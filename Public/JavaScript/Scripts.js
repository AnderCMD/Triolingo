const ejerciciosA1 = [
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: I ___ (to be) from Spain.", a: "am"},
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: They ___ (to have) three children.", a: "have"},
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: He ___ (to play) basketball every Saturday.", a: "plays"},
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: We ___ (to like) pizza.", a: "like"},
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: She ___ (to study) English at university.", a: "studies"},
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: I ___ (to eat) breakfast at 7am every morning.", a: "eat"},
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: They ___ (to work) in a factory.", a: "work"},
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: He ___ (to watch) TV in the evening.", a: "watches"},
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: We ___ (to play) soccer on the weekends.", a: "play"},
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: She ___ (to listen) to music every day.", a: "listens"}
];

const ejerciciosA2 = [
	{q: "Completa la siguiente oración con el verbo correcto en presente simple: She ___ (to like) to watch TV in the evening.", a: "likes"},
	{q: "Completa la siguiente oración con el pronombre posesivo correcto: This is ___ (my/mine) pencil.", a: "my"},
	{q: "Escoge la palabra correcta para completar la siguiente oración: I usually have ___ (coffee/tea) for breakfast.", a: "coffee"},
	{q: "Completa la siguiente oración con el adverbio de frecuencia correcto: He ___ (usually/never) takes the bus to work.", a: "usually"},
	{q: "Completa la siguiente oración con la preposición correcta: I'm going to the store ___ (to buy/for buying) some milk.", a: "to buy"}
];

const ejerciciosB1 = [
	{q: "Completa la siguiente oración con el verbo correcto en presente perfecto simple: I ___ (to read) three books this month.", a: "have read"},
	{q: "Completa la siguiente oración con el verbo correcto en pasado simple: She ___ (to go) to the movies yesterday.", a: "went"},
	{q: "Completa la siguiente oración con el verbo correcto en futuro simple: They ___ (to travel) to Japan next year.", a: "will travel"},
	{q: "Completa la siguiente oración con el verbo correcto en presente perfecto continuo: We ___ (to study) for three hours.", a: "have been studying"},
	{q: "Completa la siguiente oración con el verbo correcto en presente continuo: She ___ (to work) on a project right now.", a: "is working"},
	{q: "Completa la siguiente oración con el verbo correcto en pasado continuo: They ___ (to drive) when it started raining.", a: "were driving"},
	{q: "Completa la siguiente oración con el verbo correcto en futuro continuo: I ___ (to study) at this time tomorrow.", a: "will be studying"},
	{q: "Completa la siguiente oración con el verbo correcto en presente perfecto simple: He ___ (to have) breakfast already.", a: "has had"},
	{q: "Completa la siguiente oración con el verbo correcto en pasado perfecto simple: They ___ (to finish) their work before they went home.", a: "had finished"},
	{q: "Completa la siguiente oración con el verbo correcto en futuro perfecto simple: She ___ (to have) completed her degree by next year.", a: "will have had"}
];

const ejerciciosB2 = [
	{q: "Completa la siguiente oración con el verbo correcto en presente perfecto continuo: She ___ (to exercise) for two hours.", a: "has been exercising"},
	{q: "Completa la siguiente oración con el verbo correcto en pasado perfecto continuo: They ___ (to work) for 10 hours before they finished the project.", a: "had been working"},
	{q: "Completa la siguiente oración con el verbo correcto en futuro perfecto continuo: I ___ (to study) for six years by next year.", a: "will have been studying"},
	{q: "Completa la siguiente oración con el verbo correcto en presente condicional: If I ___ (to have) more money, I would buy a new car.", a: "had"},
	{q: "Completa la siguiente oración con el verbo correcto en pasado condicional: If he ___ (to study) harder, he would have passed the exam.", a: "had studied"},
	{q: "Completa la siguiente oración con el verbo correcto en presente perfecto pasivo: The book ___ (to read) by many people.", a: "has been read"},
	{q: "Completa la siguiente oración con el verbo correcto en pasado perfecto pasivo: The package ___ (to deliver) by the time we arrived.", a: "had been delivered"},
	{q: "Completa la siguiente oración con el verbo correcto en presente pasivo: The article ___ (to write) by a famous author.", a: "is written"},
	{q: "Completa la siguiente oración con el verbo correcto en pasado pasivo: The house ___ (to build) in 1900.", a: "was built"},
	{q: "Completa la siguiente oración con el verbo correcto en futuro pasivo: The party ___ (to organize) by a professional event planner.", a: "will be organized"}
];

let ejercicioActual;
let contadorCorrectas = 0;
let preguntasRealizadas = [];

const contenedorA1 = document.getElementById("question-containerA1");
const contenedorA2 = document.getElementById("question-containerA2");
const contenedorB1 = document.getElementById("question-containerB1");
const contenedorB2 = document.getElementById("question-containerB2");

const pregunta = document.getElementById("question");
const respuesta = document.getElementById("answer");
const botonComprobar = document.getElementById("check");
const resultado = document.getElementById("result");
const barraProgreso = document.getElementById("progress-bar");

function iniciarEjercicio(ejercicios) {
	if (preguntasRealizadas.length === ejercicios.length) {
		pregunta.textContent = "¡Has respondido todas las preguntas!";
		respuesta.style.display = "none";
		botonComprobar.style.display = "none";
		resultado.textContent = "Resultado final: " + contadorCorrectas + " de " + ejercicios.length;
		return;
	}
	do {
		ejercicioActual = ejercicios[Math.floor(Math.random() * ejercicios.length)];
	} while (preguntasRealizadas.includes(ejercicioActual));

	pregunta.textContent = ejercicioActual.q;
	barWidth = 0;
	mostrarBarraProgreso();

	preguntasRealizadas.push(ejercicioActual);
	respuesta.value = "";
	respuesta.focus();
}

if(contenedorA1){
	iniciarEjercicio(ejerciciosA1);
} else if(contenedorA2){
	iniciarEjercicio(ejerciciosA2);
} else if(contenedorB1){
	iniciarEjercicio(ejerciciosB1);
} else if(contenedorB2){
	iniciarEjercicio(ejerciciosB2);
}

function comprobarRespuesta() {
	const respuestaUsuario = respuesta.value.trim().toLowerCase();

	if (respuestaUsuario === ejercicioActual.a) {
		contadorCorrectas++;
		resultado.textContent = "¡Respuesta correcta!";
		resultado.style.color = "green";
	} else {
		resultado.textContent = "Respuesta incorrecta. La respuesta correcta es: " + ejercicioActual.a;
		resultado.style.color = "red";
	}

	setTimeout(iniciarEjercicio, 2000);
}

function mostrarBarraProgreso() {
	if (barWidth >= 100) {
		comprobarRespuesta();
	} else {
		barWidth++;
		barraProgreso.style.width = barWidth + "%";
		setTimeout(mostrarBarraProgreso, 100);
	}
}

iniciarEjercicio();

botonComprobar.addEventListener("click", comprobarRespuesta);
respuesta.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		comprobarRespuesta();
	}
});
