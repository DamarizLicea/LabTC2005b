const carrito = [
  { nombre: "Pastel de Vainilla", precio: 600, cantidad: 0 },
  { nombre: "Pastel de Pistache con frambuesa", precio: 1200, cantidad: 0 },
  { nombre: "Pastel de Limón", precio: 1200, cantidad: 0 },
];
function renderCarrito() {
  const carrt = document.getElementById("carrt");
  let html = ` <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">Producto</div>
    <div class="col">Precio</div>
    <div class="col">Cantidad</div>
  </div>`;

  let totalSinIva = 0;

  for (let i = 0; i < carrito.length; i++) {
    const item = carrito[i];
    totalSinIva += item.precio * item.cantidad;
    html += `<div class="row align-items-center">
    <div class="col">${item.nombre}</div>
    <div class="col">${item.precio}</div>
    <div class="col">${item.cantidad}</div>`;
  }
  html += `</div>`;
  carrt.innerHTML = html;
  const precios0 = document.getElementById("precios");
  precios0.innerHTML = `<div class="col">${totalSinIva}</div>
<div class="col">${totalSinIva * 0.16}</div>
<div class="col">${totalSinIva * 1.16}</div>`;
}

function agregarAlCarrito(e) {
  const boton = e.target;
  if (boton.id === "botshop1") {
    carrito[0].cantidad++;
  } else if (boton.id === "botshop2") {
    carrito[1].cantidad++;
  } else if (boton.id === "botshop3") {
    carrito[2].cantidad++;
  }
  renderCarrito();
}
document.getElementById("botshop1").addEventListener("click", agregarAlCarrito);
document.getElementById("botshop2").addEventListener("click", agregarAlCarrito);
document.getElementById("botshop3").addEventListener("click", agregarAlCarrito);

function eliminardelCarrito(e) {
  const boton = e.target;
  if (boton.id === "elim1") {
    if (carrito[0].cantidad === 0) {
      alert("No hay productos en el carrito");
      return;
    }
    carrito[0].cantidad--;
  } else if (boton.id === "elim2") {
    if (carrito[1].cantidad === 0) {
      alert("No hay productos en el carrito");
      return;
    }
    carrito[1].cantidad--;
  } else if (boton.id === "elim3") {
    if (carrito[2].cantidad === 0) {
      alert("No hay productos en el carrito");
      return;
    }
    carrito[2].cantidad--;
  }
  renderCarrito();
}

document.getElementById("elim1").addEventListener("click", eliminardelCarrito);
document.getElementById("elim2").addEventListener("click", eliminardelCarrito);
document.getElementById("elim3").addEventListener("click", eliminardelCarrito);

renderCarrito();

function cambiarLetra() {
  console.log("cambiarLetra");
  Array.prototype.slice
    .call(document.getElementsByClassName("header2"), 0)
    .forEach((header) => {
      header.style.fontFamily = "Comic Sans MS";
    });
}
Array.from(document.getElementsByClassName("header2")).forEach((header) => {
  header.addEventListener("copy", cambiarLetra);
});
