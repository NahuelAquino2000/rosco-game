const contenedorRosco = document.getElementById('rosco');
const displayLetra = document.getElementById('letra-actual');
const displayDefinicion = document.getElementById('definicion-actual');
const displayRespuesta = document.querySelector('#respuesta-secreta span');
const displayTiempo = document.getElementById('tiempo-restante');
const btnToggleTextos = document.getElementById('btn-toggle-textos');
const bloqueTextos = document.getElementById('bloque-textos');

let indiceActual = 0;
let estadoJuego = new Array(roscoData.length).fill('pendiente'); 

// --- VARIABLES DEL CRONÓMETRO ---
let tiempo = 150; // Segundos totales
let intervaloReloj;
let juegoTerminado = false;

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
    iniciarReloj(); // Arrancamos el cronómetro al iniciar
}

// Lógica del cronómetro
function iniciarReloj() {
    displayTiempo.innerText = tiempo;
    
    intervaloReloj = setInterval(() => {
        tiempo--;
        displayTiempo.innerText = tiempo;

        // Efecto visual cuando quedan 15 segundos o menos
        if (tiempo <= 15) {
            displayTiempo.classList.add('peligro');
        }

        // Si el tiempo llega a cero
        if (tiempo <= 0) {
            clearInterval(intervaloReloj);
            finalizarJuego("¡Se acabó el tiempo!");
        }
    }, 1000); // 1000 milisegundos = 1 segundo
}

function actualizarPantalla() {
    if (juegoTerminado) return;

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
    if (juegoTerminado) return; // Si el juego terminó, los botones no hacen nada

    estadoJuego[indiceActual] = estado;
    const letraDOM = document.getElementById(`letra-${indiceActual}`);
    
    letraDOM.classList.remove('pasapalabra', 'correcto', 'incorrecto');
    letraDOM.classList.add(estado);

    avanzarLetra();
}

function finalizarJuego(mensaje) {
    juegoTerminado = true;
    clearInterval(intervaloReloj); // Frena el cronómetro
    
    // Calcular aciertos y errores
    const aciertos = estadoJuego.filter(e => e === 'correcto').length;
    const errores = estadoJuego.filter(e => e === 'incorrecto').length;
    const sinResponder = estadoJuego.filter(e => e === 'pendiente' || e === 'pasapalabra').length;

    // Pequeño retraso para que la interfaz se actualice antes de la alerta
    setTimeout(() => {
        alert(`${mensaje}\n\nAciertos: ${aciertos}\nErrores: ${errores}\nSin responder: ${sinResponder}`);
    }, 100);
}

// Lógica para el botón de ocultar/mostrar textos
btnToggleTextos.addEventListener('click', () => {
    // La función 'toggle' pone la clase si no está, y la saca si está
    bloqueTextos.classList.toggle('escondido');
    
    // Cambiamos el texto del botón según el estado
    if (bloqueTextos.classList.contains('escondido')) {
        btnToggleTextos.innerText = 'Mostrar Textos';
    } else {
        btnToggleTextos.innerText = 'Ocultar Textos';
    }
});

// Conectar los botones con la lógica
document.getElementById('btn-correcto').addEventListener('click', () => responder('correcto'));
document.getElementById('btn-incorrecto').addEventListener('click', () => responder('incorrecto'));
document.getElementById('btn-pasapalabra').addEventListener('click', () => responder('pasapalabra'));

// Arrancar el juego al cargar la página
inicializarRosco();