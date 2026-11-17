# Investigación: Web Components, HTML Templates y Frameworks

## Parte 1. Investigación: Web Components

**1. ¿Qué problema resuelven los Web Components y qué aporta cada tecnología: Custom Elements, Shadow DOM y HTML Templates?**
Resuelven el problema de armar piezas de interfaz reutilizables sin que los estilos o scripts se mezclen y dañen todo el sitio. 
* **Custom Elements:** Permite crear etiquetas HTML propias con el comportamiento que uno quiera.
* **Shadow DOM:** Crea una cajita aislada para el componente, asegurando que su CSS y HTML interno no afecten al resto de la página ni se dejen influenciar por ella.
* **HTML Templates:** Sirve para armar fragmentos de HTML que se quedan guardados sin cargar hasta que uno decide clonarlos y usarlos.

**2. ¿En qué se diferencia un `<template>` de un `<div>` oculto con `display: none`?**
Aunque ninguno se ve al entrar a la página, el `<div>` con `display: none` sí lo lee el navegador, lo mete al DOM y ejecuta lo que tenga dentro (como descargar imágenes o correr scripts). En cambio, el `<template>` es totalmente inerte: el navegador solo revisa que esté bien escrito pero no carga nada ni ejecuta nada hasta que se clona. Además, si buscas con `document.querySelector` encuentras lo del `div`, pero para tocar lo de un template te toca entrar primero a su propiedad `.content`.

**3. ¿Qué cambia entre el Shadow DOM en modo `"open"` y en modo `"closed"`?**
Básicamente el nivel de acceso desde afuera. En modo `"open"`, cualquier script externo puede asomarse al Shadow DOM usando `elemento.shadowRoot`. En modo `"closed"`, eso devuelve `null` desde afuera y queda totalmente blindado; solo el código interno del componente puede manipularlo.

**4. ¿Qué es un `<slot>` y para qué sirve en un componente reutilizable?**
Es como un huequito o espacio reservado dentro del componente donde el usuario puede meter el texto o las etiquetas que quiera desde afuera. Sirve para que la estructura base del componente sea fija, pero el contenido de adentro pueda cambiar en cada instancia sin romper el diseño.

**5. ¿Qué navegadores soportan hoy los Web Components?**
Hoy en día (noviembre de 2026), funcionan de forma nativa en todos los navegadores modernos y actualizados (Chrome, Firefox, Safari, Edge y Opera), sin necesidad de instalar cosas raras.
* *Fuente:* Can I use — Custom Elements (v1) & Shadow DOM (v1) (`https://caniuse.com/custom-elementsv1`).

## Parte 2. Investigación: frameworks, librerías y Node.js

**1. Explica con un ejemplo la diferencia entre estándar del navegador, librería, framework y entorno de ejecución.**
* **Estándar del navegador:** Es lo que trae el navegador por defecto sin instalar nada. *Ejemplo:* Usar `Custom Elements` o funciones nativas de JS.
* **Librería:** Un conjunto de herramientas que tú llamas cuando las necesitas para algo específico, manteniendo tú el control de la aplicación. *Ejemplo:* **React** (tú organizas todo y solo lo usas para pintar la interfaz).
* **Framework:** Una estructura rígida que te impone reglas y se encarga de controlar el flujo; aquí el framework llama a tu código. *Ejemplo:* **Angular**, que ya te trae todo estructurado de fábrica.
* **Entorno de ejecución (Runtime):** El programa que te permite correr JavaScript fuera del navegador (en tu compu o un servidor). *Ejemplo:* **Node.js**.

**2. Completa la tabla comparativa**

| Criterio | Web Components nativos | React | Vue | Angular |
| :--- | :--- | :--- | :--- | :--- |
| **Tipo (estándar, librería o framework)** | Estándar nativo del navegador web. | Librería enfocada en la interfaz de usuario (UI). | Framework progresivo de JavaScript. | Framework completo basado en TypeScript. |
| **Cómo se crea un componente** | Con una clase en JS que extiende `HTMLElement`, Shadow DOM y `customElements.define()`. | Con funciones que devuelven JSX y usan *Hooks* para el estado. | Con archivos `.vue` que separan template, script y estilos en uno solo. | Con clases en TypeScript decoradas con `@Component`. |
| **Necesita instalar herramientas (npm)** | No, corren directo con HTML, CSS y JS puro en el navegador. | Sí, requiere Node.js/npm para compilar y empaquetar. | No es obligatorio para empezar, pero sí para proyectos grandes. | Sí, obliga a usar npm y su CLI para compilar TypeScript. |
| **Ventajas principales** | Cero dependencias, pesan poco y sirven en cualquier framework. | Comunidad gigantesca, muchísima demanda laboral y gran rendimiento. | Fácil de aprender, limpio y con excelente documentación. | Todo viene incluido de fábrica, ideal para equipos grandes. |
| **Desventajas principales** | Hay que escribir más código base (*boilerplate*) para cosas complejas. | No trae rutas ni estado global oficial; toca agregar librerías externas. | Menor oferta laboral en comparación con React en algunas zonas. | Curva de aprendizaje dura y es pesado para proyectos pequeños. |

**3. ¿Qué es Node.js, para qué se usa y qué relación tiene npm con React, Vue y Angular? Si una tienda en línea usa React y Node.js, ¿qué hace cada uno?**
**Node.js** es un motor para correr JavaScript fuera del navegador (en el servidor). Se usa para crear la parte de atrás de las webs, APIs y herramientas. Su relación con React, Vue y Angular es a través de **npm** (el gestor de paquetes que trae Node), que sirve para descargar estas herramientas y compilar el código.

En una tienda en línea que usa ambos:
* **React (Frontend):** Lo que ve el usuario en su pantalla (el catálogo, los filtros y el carrito).
* **Node.js (Backend):** Lo que está atrás en el servidor (hablar con la base de datos, revisar inventario, procesar los pagos y mandar correos).

**4. Elige la herramienta que usarías en cada caso y justifica en 3 a 5 líneas:**

* **a. Un botón de chat que varias empresas pegan en sus propias páginas:**
  Usaría **Web Components nativos**. Como irá incrustado en webs hechas con tecnologías distintas, el Web Component funciona universalmente sin amarrar a nadie a librerías pesadas. Además, el **Shadow DOM** evita que los estilos de la página del cliente dañen el diseño del chat.

* **b. Una aplicación web grande para un banco, con muchos equipos de desarrollo:**
  Usaría **Angular**. Al ser un banco con varios equipos trabajando al tiempo, se necesita una estructura estricta y organizada donde todos sigan las mismas reglas. Angular ya trae todo listo (rutas, formularios, seguridad) y usa TypeScript, lo que ayuda a evitar errores graves.

## Fuentes de consulta

1. **MDN Web Docs — Web Components**
   * Enlace: https://developer.mozilla.org/es/docs/Web/API/Web_components

2. **MDN Web Docs — Usar plantillas y ranuras (`<template>` y `<slot>`)**
   * Enlace: https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_templates_and_slots

3. **Node.js Official Documentation — Introduction to Node.js**
   * Enlace: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

4. **Can I use — Custom Elements (v1) & Shadow DOM**
   * Enlace: https://caniuse.com/custom-elementsv1
