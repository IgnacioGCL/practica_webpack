import '../styles/main.scss';
import { GeneradorAleatorio } from './random-generator';

const textoDeSalida = document.querySelector('#texto-de-salida');

const salidaEntero = () => {
    textoDeSalida.textContent = GeneradorAleatorio.enteroAleatorio();
};

const salidaRango = () => {
    textoDeSalida.textContent = GeneradorAleatorio.rangoAleatorio(1, 500);
};

const botonEntero = document.querySelector('#entero-aleatorio');
const botonRango = document.querySelector('#rango-aleatorio');

botonEntero.addEventListener('click', salidaEntero);
botonRango.addEventListener('click', salidaRango);