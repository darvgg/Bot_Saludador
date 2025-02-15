import saludar_hola from "./saludador";

const form =document.querySelector("#saludar-form")

const div = document.querySelector("#resultado-div")

const nombre_input = document.querySelector("#nombre-input")

const op_genero_input = document.querySelector("#genero")

const edad_input = document.querySelector("#edad-input")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombre_input.value;
  const genero = op_genero_input.value;
  const edad = Number.parseInt(edad_input.value);
  div.innerHTML = "<p>" + saludar_hola(nombre,genero,edad) + "</p>";
});