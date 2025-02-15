import saludar_hola from "./saludador.js";
import greeting from "./greet.js";

const form =document.querySelector("#saludar-form")

const div = document.querySelector("#resultado-div")

const nombre_input = document.querySelector("#nombre-input")

const op_genero_input = document.querySelector("#genero")

const edad_input = document.querySelector("#edad-input")

const op_idioma_input = document.querySelector("#idioma")

const labels = {
  nombre: document.querySelector("label[for='Nombre']"),
  genero: document.querySelector("label[for='Genero']"),
  edad: document.querySelector("label[for='Edad']"),
  boton: document.querySelector("#saludar-boton")
};

const actualizarLabels = () => {
  if (op_idioma_input.value === "ES") {
    labels.nombre.textContent = "¿Cuál es tu nombre?";
    labels.genero.textContent = "Selecciona una opción:";
    labels.edad.textContent = "¿Cuál es tu edad?";
    labels.boton.textContent = "Enviar";
  } else {
    labels.nombre.textContent = "What is your name?";
    labels.genero.textContent = "Select an option:";
    labels.edad.textContent = "How old are you?";
    labels.boton.textContent = "Send";
  }
};

op_idioma_input.addEventListener("change", actualizarLabels);


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombre_input.value;
  const genero = op_genero_input.value;
  const edad = Number.parseInt(edad_input.value);
  if (op_idioma_input.value === "ES"){
    div.innerHTML = "<p>" + saludar_hola(nombre,genero,edad) + "</p>";
  }
  else{
    div.innerHTML = "<p>" + greeting(nombre,genero,edad) + "</p>";
  }
});