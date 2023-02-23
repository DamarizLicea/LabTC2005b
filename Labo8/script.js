console.log("Hello World!");
const filesystem = require("fs");
filesystem.writeFileSync("doc.txt", "Hello World!");
filesystem.writeFileSync("doc.txt", "Holiwis!");
function add(a, b) {
  return a + b;
}

const array = [5000, 60, 90, 100, 10, 20, 1000, 0, 120, 2000, 340, 1000, 50];

for (let item of array) {
  setTimeout(() => {
    console.log(item);
  }, item);
}

setTimeout(() => console.log("ya te hackié"), 15000);
/*
const http = require("http");
const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  response.write("Hola desde node");
  response.end();
});

server.listen(3000);*/

//Puerto es el numero de departamento

//funcion para promedio de arreglos

const arreglo = [5000, 60, 90, 100, 10, 20, 1000, 0, 120, 2000, 340, 1000, 50];

function promedio(arreglo) {
  let suma = 0;
  for (let item of arreglo) {
    suma += item;
  }
  return suma / arreglo.length;
}

console.log("El promedio es. " + promedio(arreglo));

//funcion para escribir una string en un archivo de texto

let p1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function vocero(p1) {
  filesystem.writeFileSync("doc.txt", p1);
}

vocero(p1);

srt1 = "Lorem ipsum dolor sit amet.";
function numReverse() {
  let reverse = srt1.split("").reverse().join("");
  filesystem.writeFileSync(
    "doc.txt",
    "El string " + srt1 + " al revés es " + reverse
  );
}
numReverse(srt1);

//Crea una pequeña aplicación web que al enviar una petición al servidor, devuelva una de las páginas de html

const http = require("http");
const fs = require("fs");

const servidor = http.createServer((pedido, respuesta) => {
  const url = new URL("http://localhost:4000" + pedido.url);
  let camino = "static" + url.pathname;
  if (camino == "static/") camino = "static/index.html";
  fs.stat(camino, (error) => {
    if (!error) {
      fs.readFile(camino, (error, contenido) => {
        if (error) {
          respuesta.writeHead(500, { "Content-Type": "text/plain" });
          respuesta.write("Error interno");
          respuesta.end();
        } else {
          respuesta.writeHead(200, { "Content-Type": "text/html" });
          respuesta.write(contenido);
          respuesta.end();
        }
      });
    } else {
      respuesta.writeHead(404, { "Content-Type": "text/html" });
      respuesta.write(
        "<!doctype html><html><head></head><body>Recurso inexistente</body></html>"
      );
      respuesta.end();
    }
  });
});

servidor.listen(4000);

console.log("Servidor web iniciado");
