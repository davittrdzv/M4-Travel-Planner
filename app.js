// app.js

// Iniciar la aplicación

import { registrarDestino } from './viajes.js';
import { mostrarItinerario } from './viajes.js';

const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("París", "2024-06-15", "Avión", 1);
    registrarDestino("Londres", "2024-07-01", "Tren", 2);
    registrarDestino("Viena", "2024-08-05", "Autobús", 3);
    registrarDestino("Madrid", "2024-09-10", "Avión", 4);
    registrarDestino("Barcelona", "2024-10-12", "Tren", 5);
    registrarDestino("Roma", "2024-11-01", "Avión", 6);
    registrarDestino("Ámsterdam", "2024-12-02", "Autobús", 7);
    registrarDestino("Lisboa", "2025-01-15", "Tren", 8);
    registrarDestino("Bratislava", "2025-02-25", "Avión", 9);
    registrarDestino("Praga", "2025-03-10", "Autobús", 10);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();