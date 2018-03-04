import '../styles/main.css';
import '../styles/input-elements.css';

import { botonSecreto, textoSecreto } from './dom-loader';

var mostrarSecreto = false;

//Este botón está en dom-loader.js
botonSecreto.addEventListener('click', cambiarEstadoSecreto);
actualizarTextoSecreto();

function cambiarEstadoSecreto() {
    mostrarSecreto = !mostrarSecreto;
    actualizarTextoSecreto();
    actualizarBotonSecreto();
}

function actualizarBotonSecreto() {
    if (mostrarSecreto) {
        //Este botón está en dom-loader.js
        botonSecreto.textContent = 'Oculta el secreto';
    } else {
        //Este botón está en dom-loader.js
        botonSecreto.textContent = 'Muestra el secreto';
    }
}

function actualizarTextoSecreto() {
    if (mostrarSecreto) {
        //Este botón está en dom-loader.js
        textoSecreto.style.display = 'block';
    } else {
        //Este botón está en dom-loader.js
        textoSecreto.style.display = 'none';
    }
}