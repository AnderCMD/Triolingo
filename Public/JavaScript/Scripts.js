const ejercicios = [
	{ q: "Completa la siguiente oración con el verbo correcto en presente simple: She ___ (to like) to watch TV in the evening.", a: "likes" },
	{ q: "Completa la siguiente oración con el pronombre posesivo correcto: This is ___ (my/mine) pencil.", a: "my" },
	{ q: "Escoge la palabra correcta para completar la siguiente oración: I usually have ___ (coffee/tea) for breakfast.", a: "coffee" },
	{ q: "Completa la siguiente oración con el adverbio de frecuencia correcto: He ___ (usually/never) takes the bus to work.", a: "usually" },
	{ q: "Completa la siguiente oración con la preposición correcta: I'm going to the store ___ (to buy/for buying) some milk.", a: "to buy" }
];

let ejercicioActual;
let contadorCorrectas = 0;
let preguntasRealizadas = [];

const pregunta = document.getElementById("question");
const respuesta = document.getElementById("answer");
const botonComprobar = document.getElementById("check");
const resultado = document.getElementById("result");
const barraProgreso = document.getElementById("progress-bar");

function iniciarEjercicio() {
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

	setTimeout(iniciarEjercicio, 30000);
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
respuesta.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		comprobarRespuesta();
	}
});
