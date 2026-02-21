const contenedorRosco = document.getElementById('rosco');
const displayLetra = document.getElementById('letra-actual');
const displayDefinicion = document.getElementById('definicion-actual');
const displayRespuesta = document.querySelector('#respuesta-secreta span');
const btnToggleTextos = document.getElementById('btn-toggle-textos');
const bloqueTextos = document.getElementById('bloque-textos');

let indiceActual = 0;
let estadoJuego = new Array(roscoData.length).fill('pendiente'); 

// Dibujar el círculo perfecto
function inicializarRosco() {
    const radio = 160; 
    const centroX = 175; 
    const centroY = 175; 
    const totalLetras = roscoData.length;

    roscoData.forEach((item, index) => {
        const divLetra = document.createElement('div');
        divLetra.classList.add('letra');
        divLetra.innerText = item.letra;
        divLetra.id = `letra-${index}`;
        
        const angulo = (index / totalLetras) * (Math.PI * 2) - (Math.PI / 2);
        const x = centroX + radio * Math.cos(angulo) - 20;
        const y = centroY + radio * Math.sin(angulo) - 20;

        divLetra.style.left = `${x}px`;
        divLetra.style.top = `${y}px`;

        contenedorRosco.appendChild(divLetra);
    });
    
    actualizarPantalla();
}

function actualizarPantalla() {
    document.querySelectorAll('.letra').forEach(el => el.classList.remove('activa'));
    const letraDOM = document.getElementById(`letra-${indiceActual}`);
    if(letraDOM) letraDOM.classList.add('activa');

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
        
        if (iteraciones > roscoData.length) {
            finalizarJuego("¡Fin del juego! El rosco está completo.");
            return;
        }
    } while (estadoJuego[indiceActual] === 'correcto' || estadoJuego[indiceActual] === 'incorrecto');
    
    actualizarPantalla();
}

function responder(estado) {
    estadoJuego[indiceActual] = estado;
    const letraDOM = document.getElementById(`letra-${indiceActual}`);
    
    letraDOM.classList.remove('pasapalabra', 'correcto', 'incorrecto');
    letraDOM.classList.add(estado);

    avanzarLetra();
}

function finalizarJuego(mensaje) {
    const aciertos = estadoJuego.filter(e => e === 'correcto').length;
    const errores = estadoJuego.filter(e => e === 'incorrecto').length;
    const sinResponder = estadoJuego.filter(e => e === 'pendiente' || e === 'pasapalabra').length;

    setTimeout(() => {
        alert(`${mensaje}\n\nAciertos: ${aciertos}\nErrores: ${errores}\nSin responder: ${sinResponder}`);
    }, 100);
}

// Conectar los botones con la lógica
document.getElementById('btn-correcto').addEventListener('click', () => responder('correcto'));
document.getElementById('btn-incorrecto').addEventListener('click', () => responder('incorrecto'));
document.getElementById('btn-pasapalabra').addEventListener('click', () => responder('pasapalabra'));

// Lógica para el botón de ocultar/mostrar textos
btnToggleTextos.addEventListener('click', () => {
    bloqueTextos.classList.toggle('escondido');
    
    if (bloqueTextos.classList.contains('escondido')) {
        btnToggleTextos.innerText = 'Mostrar Textos';
    } else {
        btnToggleTextos.innerText = 'Ocultar Textos';
    }
});

// Arrancar el juego al cargar la página
inicializarRosco();