1. **Justificación de Arquitectura:** Argumenta por qué `useReducer` es una mejor opción aquí que usar múltiples `useState` (ej. `useState` para los items, `useState` para el total). ¿Qué problema específico encontrarías durante la implementación de la función “incrementar cantidad” si usaras `useState` para los items y otro `useState` para el precio total?
por su centralizacion de la logica las transacciones atomicas y su consistencia

2. **Análisis de Rendimiento:** Si un componente `BotonPromocion` que no tiene nada que ver con el carrito se re-renderiza cada vez que añades un producto, ¿cuál sería tu primera hipótesis sobre la causa del problema y cómo usarías las React DevTools para confirmarlo?
puede ser por la falta de react.memo o por usar propiedades volatiles