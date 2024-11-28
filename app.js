// app.js

// Iniciar la aplicación

import { registrarDestino } from './viajes.js';
import { mostrarItinerario } from './viajes.js';

const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("París", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("Viena", "2024-08-05", "Autobús");
    registrarDestino("Madrid", "2024-09-10", "Avión");
    registrarDestino("Barcelona", "2024-10-12", "Tren");
    registrarDestino("Roma", "2024-11-01", "Avión");
    registrarDestino("Ámsterdam", "2024-12-02", "Autobús");
    registrarDestino("Lisboa", "2025-01-15", "Tren");
    registrarDestino("Bratislava", "2025-02-25", "Avión");
    registrarDestino("Praga", "2025-03-10", "Autobús");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();