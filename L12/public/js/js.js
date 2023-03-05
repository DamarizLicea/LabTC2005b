// arreglos
const arreglo = ["Elemento"];
arreglo.push("Otro elemento");
arreglo["dos"] = 2;
arreglo.length = 10;
console.log(arreglo);

//Recorre los valores del arreglo
for (let valor of arreglo) {
  console.log(valor);
}

//Recorre los índices del arreglo
for (let elemento in arreglo) {
  console.log(elemento);
}

//Objetos
let objeto = {
  atributo_1: "valor 1",
  atributo_2: 2,
};

objeto.atributo_3 = arreglo;

console.log(objeto);

console.log(objeto.atributo_1);

for (let atributo in objeto) {
  console.log(atributo);
}

document.getElementById("input_texto").onkeyup = () => {
  let input = document.getElementById("input_texto").value;

  let reverse = document
    .getElementById("input_texto")
    .value.split(" ")
    .reverse()
    .join(" ");

  document.getElementById("texto_respuesta").innerHTML = reverse;
};

//arreglos asociativos
