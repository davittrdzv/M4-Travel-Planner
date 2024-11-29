// app.js

import { registrarDestino } from './viajes.js';
import { form } from './viajes.js';

// Iniciar la aplicación
const iniciarApp = () => {
    form.addEventListener('submit', registrarDestino);
}

// Ejecutar la aplicación
iniciarApp();

