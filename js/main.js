//R1 Template propio.

const plantilla = document.getElementById("plantilla-empleado");

//R2 Componente: una clase que extiende HTMLElement.

class TarjetaEmpleado extends HTMLElement {
    constructor() {
        super();

        //R2 Crear el Shadow DOM

        const sombra = this.attachShadow({ mode: "open" });

        //R2 Clonar el template dentro del Shadow DOM

        sombra.appendChild(plantilla.content.cloneNode(true));
    }

    connectedCallback() {
        //R3 Atributos: leemos 4 datos con getAttribute(si falta alguno se usa el valor por defecto).

        const nombre = this.getAttribute("nombre") ?? "Sin nombre";
        const cargo = this.getAttribute("cargo") ?? "Sin cargo";
        const area = this.getAttribute("area") ?? "Sin area";
        const extension = this.getAttribute("extension") ?? "N/D";

        //R3 Mostrar cada dato en su marcador vacio del template.
        
        this.shadowRoot.querySelector(".nombre").textContent = nombre;
        this.shadowRoot.querySelector(".cargo").textContent = cargo;
        this.shadowRoot.querySelector(".area").textContent = area;
        this.shadowRoot.querySelector(".extension").textContent = extension;
    }
}

//R2 Registrar el componente. El nombre debe llevar guion para evitar choques con etiquetas HTML.

customElements.define("tarjeta-empleado", TarjetaEmpleado);

// R4 Slot: el <slot name="nota"> está dentro del template (index.html).
// Cada instancia le pasa su nota con un hijo que tiene slot="nota";
// si no la pasa, se muestra "Sin notas."

// R5 Reutilización: index.html usa <tarjeta-empleado> 3 veces con datos distintos.
// La clase se define una sola vez y el navegador crea una instancia por cada etiqueta.