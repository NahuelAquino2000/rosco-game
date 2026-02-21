const contenedorRosco = document.getElementById('rosco');
const displayLetra = document.getElementById('letra-actual');
const displayDefinicion = document.getElementById('definicion-actual');
const displayRespuesta = document.querySelector('#respuesta-secreta span');

let indiceActual = 0;
// Estados: 'pendiente', 'correcto', 'incorrecto', 'pasapalabra'
let estadoJuego = new Array(roscoData.length).fill('pendiente'); 

// Generar las letras en el círculo
function inicializarRosco() {
    roscoData.forEach((item, index) => {
        const divLetra = document.createElement('div');
        divLetra.classList.add('letra');
        divLetra.innerText = item.letra;
        divLetra.style.setProperty('--i', index);
        divLetra.id = `letra-${index}`;
        contenedorRosco.appendChild(divLetra);
    });
    actualizarPantalla();
}

function actualizarPantalla() {
    // Quitar clase activa de todas
    document.querySelectorAll('.letra').forEach(el => el.classList.remove('activa'));
    
    // Poner clase activa a la actual
    const letraDOM = document.getElementById(`letra-${indiceActual}`);
    if(letraDOM) letraDOM.classList.add('activa');

    // Actualizar textos
    const dataActual = roscoData[indiceActual];
    displayLetra.innerText = dataActual.letra;
    displayDefinicion.innerText = dataActual.definicion;
    displayRespuesta.innerText = dataActual.respuesta;
}

function avanzarLetra() {
    let iteraciones = 0;
    do {
        indiceActual = (indiceActual + 1) % roscoData.length;
        iteraciones++;
        // Si dimos la vuelta entera y todas están respondidas (verde o rojo)
        if (iteraciones > roscoData.length) {
            alert("¡Fin del juego! Todas las letras fueron respondidas.");
            return;
        }
    } while (estadoJuego[indiceActual] === 'correcto' || estadoJuego[indiceActual] === 'incorrecto');
    
    actualizarPantalla();
}

function responder(estado) {
    estadoJuego[indiceActual] = estado;
    const letraDOM = document.getElementById(`letra-${indiceActual}`);
    
    // Limpiar clases anteriores por si venía de un pasapalabra
    letraDOM.classList.remove('pasapalabra');
    letraDOM.classList.add(estado);

    avanzarLetra();
}

// Event Listeners de los botones
document.getElementById('btn-correcto').addEventListener('click', () => responder('correcto'));
document.getElementById('btn-incorrecto').addEventListener('click', () => responder('incorrecto'));
document.getElementById('btn-pasapalabra').addEventListener('click', () => responder('pasapalabra'));

// Iniciar el juego
inicializarRosco();