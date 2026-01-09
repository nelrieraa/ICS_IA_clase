Decisiones de Estado vs. Memoización (Defensa de la opción b)
Defiendo la opción (b) —calcular el shadowColor dentro del componente con useMemo— por los siguientes motivos:

Estado Atómico y Limpio: El Contexto (y el reducer) debe contener únicamente la información mínima necesaria (la "fuente de la verdad"). El color de la sombra no es un dato nuevo, es una derivación del color primario. Si metemos datos derivados en el estado global, el objeto de estado crece innecesariamente y se vuelve más difícil de mantener.

Responsabilidad Única: Es responsabilidad del componente decidir cómo se visualiza un dato. Si el diseño cambia y mañana no queremos sombra sino un degradado, solo modificamos el componente, no la lógica de negocio del reducer.

Eficiencia con useMemo: useMemo está diseñado exactamente para esto: realizar cálculos costosos o transformaciones de datos solo cuando la dependencia (primaryColor) cambia. Si el usuario mueve el slider de fontSize, el cálculo de la sombra se salta por completo, ahorrando ciclos de CPU.

Análisis de Rendimiento (Requisito clave)
Al arrastrar el slider de fontSize:

ThemeContext se actualiza.

CardPreview se re-renderiza porque usa theme.

Sin embargo, gracias a que calculamos la sombra con useMemo y le pasamos solo [theme.primaryColor], esa parte del código no se vuelve a ejecutar.

ThemeControls se mantiene estable gracias a React.memo, evitando que los inputs pierdan el foco o laguen al procesar el renderizado masivo.