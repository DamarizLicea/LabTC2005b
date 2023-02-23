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

const http = require("http");
const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  response.write("Hola desde node");
  response.end();
});

server.listen(3000);

//Puerto es el numero de departamento
