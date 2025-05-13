import { obtenerSaludo } from "./funciones.js";

document.getElementById("saludarBtn").addEventListener("click", () => {
  const mensaje = obtenerSaludo();
  document.getElementById("mensaje").textContent = mensaje;
});
