# Web Components: tarjeta de empleado
 
Actividad evaluativa en parejas: Web Components, HTML Templates y frameworks.
 
## Integrantes
 
- Juan Diego Velandia Guerrero
- Johyner Steven Martínez
## Caso elegido
 
**Tarjeta de perfil de un empleado.** El componente se llama `<tarjeta-empleado>` y muestra la ficha de una persona de una empresa.
 
Recibe 4 datos por atributos:
 
| Atributo | Qué muestra |
| :--- | :--- |
| `nombre` | Nombre del empleado |
| `cargo` | Cargo que desempeña |
| `area` | Área de la empresa |
| `extension` | Extensión telefónica |
 
Además tiene un `<slot name="nota">` para escribir una nota o descripción libre en cada tarjeta. Si no se pasa nota, muestra "Sin notas.".
 
## Estructura del repositorio
 
```
.
├── README.md
├── INVESTIGACION.md
├── index.html
└── js/
    └── main.js
```
 
- `index.html`: contiene el `<template>` (con su `<style>` y marcadores vacíos) y las 3 instancias del componente.
- `js/main.js`: contiene la clase del componente, comentada por requisito (`// R1` a `// R5`).
- `INVESTIGACION.md`: Partes 1 y 2 de la actividad, con la tabla comparativa y las fuentes.
## Cómo probar el componente
 
1. Clona el repositorio o descarga los archivos, manteniendo `index.html` en la raíz y `main.js` dentro de la carpeta `js`.
2. Abre `index.html` en un navegador moderno (Chrome, Firefox, Edge o Safari). No necesita instalar nada ni usar un servidor.
3. Deberías ver 3 tarjetas de empleados con sus datos y su nota.
4. Abre la consola del navegador (F12): no debe mostrar errores.
5. Prueba opcional: quita un atributo o la nota de una tarjeta y recarga. Se mostrarán los valores por defecto ("Sin cargo", "N/D", "Sin notas.", etc.).
6. Prueba opcional: en la pestaña Elements, abre una `<tarjeta-empleado>` y verás el `#shadow-root (open)` con el template clonado.
## Cumplimiento de los requisitos
 
| Requisito | Dónde se cumple |
| :--- | :--- |
| R1 · Template propio | `<template id="plantilla-empleado">` en `index.html`, con su `<style>` y marcadores vacíos que se rellenan desde JavaScript |
| R2 · Componente | Clase `TarjetaEmpleado extends HTMLElement` en `js/main.js`, registrada con `customElements.define("tarjeta-empleado", ...)`, que clona el template dentro de su Shadow DOM |
| R3 · Atributos | Se leen `nombre`, `cargo`, `area` y `extension` con `getAttribute` y se muestran en el template |
| R4 · Slot | `<slot name="nota">` dentro del template, usado desde `index.html` con `slot="nota"` |
| R5 · Reutilización | 3 instancias de `<tarjeta-empleado>` con datos distintos en `index.html` |
 
## Declaración de uso de IA
 
Usamos IA como apoyo y declaramos cómo:
 
- **Código (Juan Diego Velandia Guerrero):** usó Claude (Anthropic) como apoyo para plantear la solución del componente, resolver dudas sobre cada requisito y revisar el código. Después revisó el resultado, corrigió errores de ruta, de ortografía y de CSS, y estudió cada parte para poder explicarla con sus propias palabras.
- **Investigación (Johyner Steven Martínez):** usó Gemini (Google) como apoyo para toda la investigación (Partes 1 y 2), incluida la tabla comparativa. Después revisó el contenido y las fuentes consultadas, y estudió las respuestas para poder explicarlas con sus propias palabras.
Los dos integrantes entendemos lo que entregamos y podemos explicarlo.
 