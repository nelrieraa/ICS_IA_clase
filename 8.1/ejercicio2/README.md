1. Justificación de Arquitectura
¿Por qué separar AuthContext y TasksContext? Es una buena práctica por el principio de Responsabilidad Única.

Problema de rendimiento que previene: Si tuvieras un GlobalContext, cada vez que cambies el usuario (ej. de "Ana" a "Luis"), el objeto del contexto cambia por completo. Esto obligaría a re-renderizarse a cualquier componente que consuma el contexto, incluso si solo le interesan las tareas. Al separarlos, el componente UserInfo (que solo consume AuthContext) no se ve afectado por cambios en la lista de tareas (como añadir o borrar una tarea). Si estuvieran juntos, UserInfo se redibujaría cada vez que añades una tarea, lo cual es ineficiente.

2. Depuración y Optimización
Cadena de eventos al cambiar de usuario:

Cambias el <select>, lo que dispara setUser en AuthContext.

AuthContext.Provider emite un nuevo valor.

DashboardApp consume AuthContext, por lo que se re-renderiza.

Al re-renderizarse DashboardApp, por defecto intenta renderizar a todos sus hijos (TaskItem).

Aunque las tareas no han cambiado, las funciones onToggle y onDelete se están pasando como funciones inline (flecha), lo que significa que en cada render son "nuevas" referencias.

Solución: No basta solo con envolver TaskItem en memo. Para que memo funcione, las funciones que le pasamos deben ser estables. Debemos usar useCallback en el componente padre para envolver las funciones de dispatch, asegurando que su referencia de memoria no cambie entre renders.