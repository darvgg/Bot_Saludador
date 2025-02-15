import saludar_hola from "./saludador";

const form =document.querySelector("#saludar-form")
const saludar_boton = document.querySelector("#saludar-boton")
const div = document.querySelector("#resultado-div")
form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + saludar_hola() + "</p>";

});