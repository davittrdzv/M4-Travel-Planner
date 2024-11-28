// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte, viajeros) => {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        viajeros: parseInt(viajeros),
        costo: calcularCosto(destino, transporte, viajeros)
    };
    destinos.push(nuevoViaje);
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

    descuento = 0;
    if (viajeros > 1) {
        descuento = viajeros * .025;
    }

    if (descuento > 0.25) {
        descuento = 0.25;
    }

    costoBase = costoBase * viajeros * (1 - descuento)

    return costoBase;
}


// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        console.log(`Destino: ${viaje.destino}
Fecha: ${viaje.fecha}
Transporte: ${viaje.transporte}
Viajeros: ${viaje.viajeros}
Costo: $${viaje.costo}`
        )
    }
}