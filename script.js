const boton = document.getElementById("colorBtn");

boton.addEventListener("click", () => {
  const colores = ["#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#aecbfa"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
});