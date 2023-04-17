const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const parrafo = document.getElementById('texto');
const audio = document.getElementById('audio');

// Lista de preguntas y respuestas
const preguntas = [
  { pregunta: 'what are you doing now', enlace: 'audio1' },
  { pregunta: "I'm studying", enlace: 'audio2' },
  { pregunta: "I'm doing my homework", enlace: 'audio3' },
  { pregunta: "how was your weekend", enlace: 'audio4' },
  { pregunta: "it's okay. I didn't do anything special this weekend", enlace: 'audio5' }
];

let indicePreguntaActual = 0; // Índice de la pregunta actual

const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResult = false;

// Función para avanzar a la siguiente pregunta
function siguientePregunta() {
  indicePreguntaActual++;
  if (indicePreguntaActual < preguntas.length) {
    // Si hay más preguntas, mostrar la siguiente
    const preguntaActual = preguntas[indicePreguntaActual];
    audio.src = '../Audios/'+ preguntaActual.enlace + '.mp3'; // Cambiar el audio
    audio.play();
  } else {
    // Si no hay más preguntas, mostrar un mensaje final
    alert('¡Felicidades, has terminado el curso auditivo!');
  }
}

btnStart.addEventListener('click', () => {
  recognition.start();
});

btnStop.addEventListener('click', () => {
  recognition.abort();
});

recognition.onresult = (event) => {
  const texto = event.results[event.results.length - 1][0].transcript;
  const preguntaActual = preguntas[indicePreguntaActual];
  if (preguntaActual.pregunta == texto) {
    // Si la respuesta es correcta, mostrar el mensaje de la respuesta y avanzar a la siguiente pregunta
    alert('Mensaje correcto, la respuesta es: '+preguntaActual.pregunta+'\n'+
    'Tu respuesta fue: '+texto);
    siguientePregunta();
  } else {
    alert('Mensaje incorrecto, la respuesta es: '+preguntaActual.pregunta+'\n'+
    'Tu respuesta fue: '+texto);
  }
};

// Al cargar la página, mostrar la primera pregunta
const preguntaActual = preguntas[indicePreguntaActual];
audio.src = '../Audios/'+ preguntaActual.enlace + '.mp3';
audio.play();
