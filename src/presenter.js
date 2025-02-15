import saludar_hola from "./saludador";

const form =document.querySelector("#saludar-form")

const saludar_boton = document.querySelector("#saludar-boton")

const div = document.querySelector("#resultado-div")

const nombre_input = document.querySelector("#nombre-input")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre= nombre_input.ariaValueMax;
  div.innerHTML = "<p>" + saludar_hola(nombre) + "</p>";

});