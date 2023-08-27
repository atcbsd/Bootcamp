const metaInput = document.getElementById("metaInput");
const agregarMetaBtn = document.getElementById("agregarMeta");
const listaMetas = document.getElementById("listaMetas");
const generarGraficoBtn = document.getElementById("generarGrafico");
const grafico = document.getElementById("grafico");
const fechaTexto = document.getElementById("fechaTexto");
const diaAnteriorBtn = document.getElementById("diaAnterior");
const diaSiguienteBtn = document.getElementById("diaSiguiente");

let metasPorDia = {};

agregarMetaBtn.addEventListener("click", () => {
    const nuevaMeta = metaInput.value.trim();
    if (nuevaMeta !== "") {
        const fecha = getFormattedDate(new Date());
        if (!metasPorDia[fecha]) {
            metasPorDia[fecha] = [];
        }
        metasPorDia[fecha].push({ nombre: nuevaMeta, lograda: false });
        actualizarListaMetas();
        guardarMetasEnLocalStorage();
        metaInput.value = "";
    }
});

diaAnteriorBtn.addEventListener("click", () => {
    cambiarFecha(-1);
});

diaSiguienteBtn.addEventListener("click", () => {
    cambiarFecha(1);
});

function cambiarFecha(dias) {
    const fechaActual = new Date(fechaTexto.dataset.fecha);
    fechaActual.setDate(fechaActual.getDate() + dias);
    const nuevaFecha = getFormattedDate(fechaActual);
    fechaTexto.textContent = `Fecha: ${nuevaFecha}`;
    fechaTexto.dataset.fecha = nuevaFecha;
    actualizarListaMetas();
}

function actualizarListaMetas() {
    const fechaActual = new Date(fechaTexto.dataset.fecha);
    const fechaFormateada = getFormattedDate(fechaActual);
    listaMetas.innerHTML = "";
    if (metasPorDia[fechaFormateada]) {
        metasPorDia[fechaFormateada].forEach((meta, index) => {
            const metaDiv = document.createElement("div");
            metaDiv.classList.add("meta");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = meta.lograda;
            checkbox.addEventListener("change", (event) => {
                metasPorDia[fechaFormateada][index].lograda = event.target.checked;
                guardarMetasEnLocalStorage();
            });
            const nombreMeta = document.createElement("span");
            nombreMeta.textContent = meta.nombre;
            metaDiv.appendChild(checkbox);
            metaDiv.appendChild(nombreMeta);
            listaMetas.appendChild(metaDiv);
        });
    }
}

generarGraficoBtn.addEventListener("click", () => {
    // ... (código del gráfico)
});

function guardarMetasEnLocalStorage() {
    localStorage.setItem("metasPorDia", JSON.stringify(metasPorDia));
}

function getFormattedDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

(function init() {
    const fechaActual = getFormattedDate(new Date());
    fechaTexto.textContent = `Fecha: ${fechaActual}`;
    fechaTexto.dataset.fecha = fechaActual;
    metasPorDia = JSON.parse(localStorage.getItem("metasPorDia")) || {};
    actualizarListaMetas();
})();
