const contenedorRosco = document.getElementById('rosco');
const displayLetra = document.getElementById('letra-actual');
const displayDefinicion = document.getElementById('definicion-actual');
const displayRespuesta = document.querySelector('#respuesta-secreta span');

let indiceActual = 0;
// Estados posibles: 'pendiente', 'correcto', 'incorrecto', 'pasapalabra'
let estadoJuego = new Array(roscoData.length).fill('pendiente'); 

// Dibujar el círculo perfecto
function inicializarRosco() {
    const radio = 160; // Distancia desde el centro hasta las letras
    const centroX = 175; // Mitad del ancho del rosco-container (350/2)
    const centroY = 175; // Mitad del alto del rosco-container
    const totalLetras = roscoData.length;

    roscoData.forEach((item, index) => {
        const divLetra = document.createElement('div');
        divLetra.classList.add('letra');
        divLetra.innerText = item.letra;
        divLetra.id = `letra-${index}`;
        
        // Matemática para colocar en círculo
        // Restamos Math.PI / 2 para que empiece arriba en el centro
        const angulo = (index / totalLetras) * (Math.PI * 2) - (Math.PI / 2);
        
        // Restamos 20 porque la letra mide 40x40, así centramos exactamente su medio
        const x = centroX + radio * Math.cos(angulo) - 20;
        const y = centroY + radio * Math.sin(angulo) - 20;

        divLetra.style.left = `${x}px`;
        divLetra.style.top = `${y}px`;

        contenedorRosco.appendChild(divLetra);
    });
    actualizarPantalla();
}

function actualizarPantalla() {
    // Quitar la clase 'activa' de todas las letras para achicarlas
    document.querySelectorAll('.letra').forEach(el => el.classList.remove('activa'));
    
    // Agrandar y resaltar solo la letra que toca jugar ahora
    const letraDOM = document.getElementById(`letra-${indiceActual}`);
    if(letraDOM) letraDOM.classList.add('activa');

    // Cambiar los textos en el panel inferior
    const dataActual = roscoData[indiceActual];
    displayLetra.innerText = dataActual.letra;
    displayDefinicion.innerText = dataActual.definicion;
    displayRespuesta.innerText = dataActual.respuesta;
}

function avanzarLetra() {
    let iteraciones = 0;
    // Buscar la próxima letra que no esté respondida (es decir, saltamos las verdes y rojas)
    do {
        indiceActual = (indiceActual + 1) % roscoData.length;
        iteraciones++;
        
        // Si ya dimos toda la vuelta y no hay letras pendientes
        if (iteraciones > roscoData.length) {
            alert("¡Fin del juego! El rosco está completo.");
            return;
        }
    } while (estadoJuego[indiceActual] === 'correcto' || estadoJuego[indiceActual] === 'incorrecto');
    
    actualizarPantalla();
}

function responder(estado) {
    estadoJuego[indiceActual] = estado;
    const letraDOM = document.getElementById(`letra-${indiceActual}`);
    
    // Limpiar colores anteriores (por si antes le habíamos dado a 'pasapalabra')
    letraDOM.classList.remove('pasapalabra', 'correcto', 'incorrecto');
    // Aplicar el nuevo color
    letraDOM.classList.add(estado);

    avanzarLetra();
}

// Conectar los botones con la lógica
document.getElementById('btn-correcto').addEventListener('click', () => responder('correcto'));
document.getElementById('btn-incorrecto').addEventListener('click', () => responder('incorrecto'));
document.getElementById('btn-pasapalabra').addEventListener('click', () => responder('pasapalabra'));

// Arrancar el juego al cargar la página
inicializarRosco();