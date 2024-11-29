// viajes.js
export const form = document.querySelector('#create-to-do-form');
const selecDestinos = document.querySelector('#destinos');
const selecFechaInicio = document.querySelector('#fecha-inicio');
const selecFechaFin = document.querySelector('#fecha-fin');
const selecTransporte = document.querySelector('#transporte');
const selecViajeros = document.querySelector('#viajeros');
const contenedorViajes = document.querySelector('#contenedor-viajes');
export const destinos = []; // Array para guardar los destinos

// Función para registrar un destino de viaje
export const registrarDestino = (event) => {
    // Prevenir refresh de la página
    event.preventDefault();

    // Alertas en caso de no incluir la información
    if (selecDestinos.value === "") {
        alert('Por favor incluye el destino');
        return;
    }
    if (selecFechaInicio.value === "") {
        alert('Por favor incluye la fecha de inicio');
        return;
    }
    if (selecFechaFin.value === "") {
        alert('Por favor incluye la fecha de fin');
        return;
    }
    if (new Date(selecFechaInicio.value) > new Date(selecFechaFin.value)) {
        alert('La fecha de inicio no puede ser posterior a la fecha de fin');
        return;
    }
    if (selecTransporte.value === "") {
        alert('Por favor incluye el medio de transporte');
        return;
    }
    if (selecViajeros.value === "") {
        alert('Por favor incluye el número de viajeros');
        return;
    }

    // variable de nuevo viaje
    const nuevoViaje = {
        destino: selecDestinos.value,
        fecha_de_inicio: selecFechaInicio.value,
        fecha_de_fin: selecFechaFin.value,
        dias_totales: calcularDias(selecFechaInicio.value, selecFechaFin.value),
        transporte: selecTransporte.value,
        viajeros: parseInt(selecViajeros.value),
        costo: calcularCosto(selecDestinos.value, selecTransporte.value, parseInt(selecViajeros.value))
    };

    // Agregar nuevo viaje a viajes totales
    destinos.push(nuevoViaje);
    
    // Resetear información de los campos
    selecDestinos.value = "";
    selecFechaInicio.value = "";
    selecFechaFin.value = "";
    selecTransporte.value = "";
    selecViajeros.value = "";
    mostrarItinerario();
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte, viajeros, descuento) => {
    let costoBase = 0;
    
    // Costo base por destino
    if (destino === "París") {
        costoBase += 150;
    } else if (destino === "Londres") {
        costoBase += 180;
    } else if (destino === "Viena") {
        costoBase += 110;
    } else if (destino === "Madrid") {
        costoBase += 120;
    } else if (destino === "Barcelona") {
        costoBase += 130;
    } else if (destino === "Roma") {
        costoBase += 140;
    } else if (destino === "Ámsterdam") {
        costoBase += 100;
    } else if (destino === "Lisboa") {
        costoBase += 110;
    } else if (destino === "Bratislava") {
        costoBase += 90;
    } else if (destino === "Praga") {
        costoBase += 80;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Autobús") {
        costoBase += 60;
    }

    // Descuento con base en número de personas (limitado a 25%)
    descuento = 0;
    if (viajeros > 1) {
        descuento = viajeros * .025;
    }

    // Limitación de descuento 25 %)
    if (descuento > 0.25) {
        descuento = 0.25;
    }

    costoBase = costoBase * viajeros * (1 - descuento);
    return costoBase;
}

const calcularDias = (fechaInicio, fechaFin) => {
    let fecha1 = new Date(fechaInicio);
    let fecha2 = new Date(fechaFin);
    
    fecha1.setHours(0, 0, 0, 0);
    fecha2.setHours(0, 0, 0, 0);

    // Calculating the time difference
    // of two dates
    let diferenciaTiempo = fecha2 - fecha1;

    // Calculating the no. of days between
    // two dates
    let diferenciaDias = Math.round(diferenciaTiempo / (1000 * 3600 * 24));
    return diferenciaDias
}

export const mostrarItinerario = () => {
    contenedorViajes.innerHTML = "";
    
    // Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        const itemViaje = document.createElement('div');
        itemViaje.setAttribute('class', 'contenedor');
        itemViaje.innerHTML =
        `<span>${destinos[i].destino}</span>
        <span>${destinos[i].fecha_de_inicio}</span>
        <span>${destinos[i].fecha_de_fin}</span>
        <span>${destinos[i].dias_totales}</span>
        <span>${destinos[i].transporte}</span>
        <span>${destinos[i].viajeros}</span>
        <span>$${destinos[i].costo.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`;
        contenedorViajes.appendChild(itemViaje);
    }
}