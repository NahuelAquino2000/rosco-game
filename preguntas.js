// --- ROSCO 1 ---
const roscoData1 = [
    { letra: "A", respuesta: "Ana", definicion: "Empieza con A: La prima de uno." },
    { letra: "B", respuesta: "Boloh", definicion: "Empieza con B: 'Uhh me re sacaste la ficha...'" },
    { letra: "C", respuesta: "Cocoliche", definicion: "Empieza con C: Dicho de un cocodrilo." },
    { letra: "D", respuesta: "Deku", definicion: "Empieza con D: Raza de humanoides basada en los seres vegetales en la saga Zelda." },
    { letra: "E", respuesta: "Encuadernación", definicion: "Empieza con E: Actividad que Santi realizaba." },
    { letra: "F", respuesta: "Fantalox", definicion: "Empieza con F: Nombre de Invocador de Nahuel." },
    { letra: "G", respuesta: "Global Elite", definicion: "Empieza con G: Rango más alto que se podía alcanzar en competitivo en Counter Strike." },
    { letra: "H", respuesta: "Hollow Knight", definicion: "Empieza con H: Juego de un caballero blanco." },
    { letra: "I", respuesta: "Isekai", definicion: "Empieza con I: Subgénero de anime donde el protagonista muere y reencarna en otro mundo." },
    { letra: "J", respuesta: "Jinbe", definicion: "Empieza con J: Gyojin experto en karate acuático que se une a los Sombrero de Paja." },
    { letra: "K", respuesta: "Kiwi", definicion: "Empieza con K: Bolas de mono." },
    { letra: "L", respuesta: "Leeroy Jenkins", definicion: "Empieza con L: Cargar. Grito de batalla: Invoca dos crías 1/1 para tu oponente." },
    { letra: "M", respuesta: "Mica Berzel", definicion: "Empieza con M: Crush de Casas que se mudó de Río Grande." },
    { letra: "N", respuesta: "Onix", definicion: "Contiene N: Modelo de auto que maneja Nahuel." },
    { letra: "Ñ", respuesta: "Ñarakoopeguare", definicion: "Empieza con Ñ: Sticker de Plankton que dice..." },
    { letra: "O", respuesta: "Orto", definicion: "Empieza con O: ¿Dónde va el chupete?" },
    { letra: "P", respuesta: "Pan de carne", definicion: "Empieza con P: Última receta que cocinó Nahuel." },
    { letra: "Q", respuesta: "Conquistador", definicion: "Contiene Q: En TFT. Las habilidades de los ... pueden asestar impactos críticos. (Incluye Rek'Sai, Ambessa, Gangplank)." },
    { letra: "R", respuesta: "Brujita", definicion: "Contiene R: Esa mina tiene el skin de Lux..." },
    { letra: "S", respuesta: "Skpp", definicion: "Empieza con S: Santi." },
    { letra: "T", respuesta: "Aoi Todou", definicion: "Contiene T: Personaje de la foto de perfil de Tomy en Discord." },
    { letra: "U", respuesta: "Dune", definicion: "Contiene U: Juego de Mesa donde Santi hace trampa." },
    { letra: "V", respuesta: "Valorant", definicion: "Empieza con V: Hero shooter táctico por equipos." },
    { letra: "W", respuesta: "Wind Waker", definicion: "Empieza con W: Último Zelda que jugó Casas." },
    { letra: "X", respuesta: "Arco Axiomático", definicion: "Contiene X: Derribar a un campeón enemigo dentro de los 3 segundos de haberlo dañado reembolsa el 15% del tiempo de reutilización de tu definitiva." },
    { letra: "Y", respuesta: "Yone", definicion: "Empieza con Y: Hermanastro de Yasuo." },
    { letra: "Z", respuesta: "Zaahen", definicion: "Empieza con Z: Último campeón que salió en el LoL." }
];

// --- ROSCO 2 ---
const roscoData2 = [
    { letra: "A", respuesta: "Amigurumis", definicion: "Empieza con A: Taller al que Santi acudía (probablemente por una mujer)." },
    { letra: "B", respuesta: "BitStore", definicion: "Empieza con B: Tienda de tecnología donde trabaja uno de los participantes." },
    { letra: "C", respuesta: "Chaco", definicion: "Empieza con C: A Casas le gustan las mujeres provenientes de..." },
    { letra: "D", respuesta: "Dung Defender", definicion: "Empieza con D: Jefe que contiene la canción de pelea favorita (o no) de Casas." },
    { letra: "E", respuesta: "Ebony", definicion: "Empieza con E: Arma de Dante." },
    { letra: "F", respuesta: "Faker", definicion: "Empieza con F: Mejor jugador de League of Legends de la historia." },
    { letra: "G", respuesta: "Guybrush Threepwood", definicion: "Empieza con G: Protagonista de la aventura gráfica Monkey Island." },
    { letra: "H", respuesta: "Haikyuu", definicion: "Empieza con H: Anime de Vóley." },
    { letra: "I", respuesta: "Ivory", definicion: "Empieza con I: Arma de Dante." },
    { letra: "J", respuesta: "JoJo", definicion: "Empieza con J: Apodo generacional que comparten los protagonistas de un anime." },
    { letra: "K", respuesta: "Kevin", definicion: "Empieza con K: Mejor amigo de Tomy." },
    { letra: "L", respuesta: "Voley", definicion: "Contiene L: Deporte en cual Casas se rompió la rodilla." },
    { letra: "M", respuesta: "MewGenics", definicion: "Empieza con M: Videojuego de simulación de vida, mazmorras y rol táctico desarrollado por Edmund McMillen basado en gatos." },
    { letra: "N", respuesta: "Onix", definicion: "Contiene N: Pokémon de tipo roca/tierra introducido en la primera generación." },
    { letra: "Ñ", respuesta: "Quinceañeras", definicion: "Contiene Ñ: A Nahuel le gustan las..." },
    { letra: "O", respuesta: "Ornella", definicion: "Empieza con O: La novia de uno." },
    { letra: "P", respuesta: "PawPau", definicion: "Empieza con P: Streamer femenina favorita de Nahuel" },
    { letra: "Q", respuesta: "Quincy", definicion: "Empieza con Q: Raza de humanos con poderes espirituales que usan arcos de energía y son enemigos de los Shinigamis en Bleach." },
    { letra: "R", respuesta: "Brian Gonzales", definicion: "Contiene R: Nombre de Tuto (¿Era así?)." },
    { letra: "S", respuesta: "The Binding of Isaac", definicion: "Contiene S: Juego en el que Casas tiene 678 horas." },
    { letra: "T", respuesta: "Tokyo Ghoul", definicion: "Empieza con T: Serie de manga escrita e ilustrada por Sui Ishida, favorita de Tomy." },
    { letra: "U", respuesta: "Usopp", definicion: "Empieza con U: Tirador narigón y cobarde de los Piratas de Sombrero de Paja en One Piece." },
    { letra: "V", respuesta: "Valheim", definicion: "Empieza con V: Videojuego de supervivencia y sandbox generado proceduralmente inspirado en la mitología nórdica." },
    { letra: "W", respuesta: "Wraith King", definicion: "Empieza con W: Héroe de Dota que se puede reencarnar instantáneamente después de morir." },
    { letra: "X", respuesta: "Rexxar", definicion: "Contiene X: Personaje principal de la campaña 'La Fundación de Durotar'." },
    { letra: "Y", respuesta: "Yugi", definicion: "Empieza con Y: Confía en el corazón de las cartas..." },
    { letra: "Z", respuesta: "Corchazo", definicion: "Contiene Z: Si Casas pone música en el viaje es para darse un..." }
];

// --- ROSCO 3 ---
const roscoData3 = [
    { letra: "A", respuesta: "A Pelo", definicion: "Empieza con A: Dicen los TussiWarriors: 'No cuenta el polvo si no es...'" },
    { letra: "B", respuesta: "Bella Thorne", definicion: "Empieza con B: Actriz de Disney que parece una prostituta (según Nahuel)." },
    { letra: "C", respuesta: "Crochet", definicion: "Empieza con C: Actividad que Santi realizaba (probablemente por una mujer)." },
    { letra: "D", respuesta: "Donkey Kong", definicion: "Empieza con D: Mono discapacitado." },
    { letra: "E", respuesta: "Ekko", definicion: "Empieza con E: Puede retroceder el tiempo." },
    { letra: "F", respuesta: "Fer Palacio Remix", definicion: "Empieza con F: DJ favorito de Nahuel." },
    { letra: "G", respuesta: "Engomado", definicion: "Empieza con E: Casas anda re..." },
    { letra: "H", respuesta: "Nacho", definicion: "Contiene H: Nombre del primo de Tomy (apodo)" },
    { letra: "I", respuesta: "Final Fantasy Tactics", definicion: "Contiene I: Videojuego de rol táctico que se desarrolla en un ambiente rotacional tridimensional isométrico, con figuras pixelart." },
    { letra: "J", respuesta: "Julio Cesar", definicion: "Empieza con J: Nombre del Papá de Tomy." },
    { letra: "K", respuesta: "Kurama", definicion: "Empieza con K: Zorro de las nueve colas." },
    { letra: "L", respuesta: "Hitler", definicion: "Contiene L: Sos tan nazi que sos..." },
    { letra: "M", respuesta: "Zamudio", definicion: "Contiene M: Apellido de un Ex-jugador de Uni Voley bien fantasma." },
    { letra: "N", respuesta: "Mushoku Tensei", definicion: "Contiene N: Anime pajin que ven estos dos." },
    { letra: "Ñ", respuesta: "Mañas", definicion: "Contiene Ñ: Compañera de Stream de la PawPau" },
    { letra: "O", respuesta: "Oxygen Not Included", definicion: "Empieza con O: Juego al que Casas se vicio hace poco." },
    { letra: "P", respuesta: "Slowpoke", definicion: "Contiene P: Pokémon de tipo agua/psíquico. Se les caza de manera ilegal para robar sus colas y venderlas en el mercado negro." },
    { letra: "Q", respuesta: "SoloQ", definicion: "Contiene Q: Yo juego solo, me tiro una..." },
    { letra: "R", respuesta: "Correa", definicion: "Contiene R: A tomy lo tienen de la ..." },
    { letra: "S", respuesta: "Spoiler", definicion: "Empieza con S: Respiración del..." },
    { letra: "T", respuesta: "Tyler the Creator", definicion: "Empieza con T: Artista favorito de Tomy." },
    { letra: "U", respuesta: "Sung Jin-woo", definicion: "Contiene U: Cazador de Clase E." },
    { letra: "V", respuesta: "CV", definicion: "Contiene V: A ver que día tiran un..." },
    { letra: "W", respuesta: "Wybie", definicion: "Empieza con W: Personaje de Coraline." },
    { letra: "X", respuesta: "Oxygen", definicion: "Contiene X: No está incluido." },
    { letra: "Y", respuesta: "Yonko", definicion: "Empieza con Y: Título que reciben los cuatro capitanes piratas más poderosos del Nuevo Mundo." },
    { letra: "Z", respuesta: "Zoro", definicion: "Empieza con Z: Cosplay de Nahuel en alguna Ero..." }
];

// --- SELECCIÓN ALEATORIA ---
// Guardamos los 3 roscos en una lista
const todosLosRoscos = [roscoData1, roscoData2, roscoData3];

// Elegimos uno al azar. Math.random() elige un número y lo multiplicamos por la cantidad de roscos (3)
const indiceAleatorio = Math.floor(Math.random() * todosLosRoscos.length);

// Esta es la variable que tu script.js va a leer para armar el círculo
const roscoData = todosLosRoscos[indiceAleatorio];

// Opcional: Un console.log para que vos sepas qué rosco tocó si abrís la consola (F12)
console.log("Se cargó el Rosco número: " + (indiceAleatorio + 1));