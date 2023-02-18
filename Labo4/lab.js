/* Lenguaje compilado lee todo a maquina y te optimiza el codigo, 
el interpretador va linea por linea y lo va ejecutando y cuando ve un error, se rompe
Java se crea para que ese código funciones en  cualuqier computadora*/

/*Para declarar variables puedes usar var y let, var deja el código vulnerable*/
var desayuno = "hotcakes";
let comida = "pizza";
const precio = 120; /* constante, no se puede cambiar por el cliente en su navegador, pero let sí */

console.log("El desayuno es " + desayuno); /* Sale en la consola */
console.info(
  "El precio es: " + precio
); /* Sale en la consola pero con una i en circulito */
console.warn(
  "No le cambies el precio"
); /* Sale en la consola pero con un signo de exclamación amarillo*/
console.error(
  "No le cambies el precio"
); /* Sale en la consola pero con un signo de tache en círculos rojo */
console.assert(
  1 === 0,
  "No son iguales"
); /* Si la cond es verdadera ni hace nada, si es falsa manda error*/
/* (===) es estrictamente igual, compara valor y tipo, (==) busca que sean iguales*/
/* 1 == true es true en js*/
/*funciones*/

function numero_alitas() {
  return 12;
}
console.log(numero_alitas());

/*arrow function*/
let cantidad_alitas = () => {
  return 12;
};

/*

 let boton = document.getElementById("boton");
 boton.innerHTML = "Click aquí";
 boton.onclick = () => {
        let contadorclicks = Number (document.getElementById("clicks").innerHTML);
        contadorclicks++;
        console.log(contadorclicks);
        document.getElementById("clicks").innerHTML = contadorclicks;
    }
*/

/*arreglo, que es un apuntador y solo guarda la localidad ded memoria*/
const arreglo = ["elemento1", "elemento2", "elemento3"];
arreglo.push("elemento4");
console.log(arreglo);
arreglo["dos"] = 2;
arreglo.length = 10;
console.log(arreglo);

/*recorre valores*/
for (let valor of arreglo) {
  console.log(valor);
}

/*recorre indices*/
for (let elemento in arreglo) {
  console.log(elemento);
}

/*obejtos*/

let objeto = {
  atributo_1: "valor1",
  atributo_2: 2,
};
objeto.atributo_3 = arreglo;
console.log(objeto);

for (let atributo in objeto) {
  console.log(atributo);
}

/*funciones*/
/*aquí empieza el laboratorio de javascript*/

function sqcubes() {
  let pr1 = document.getElementById("numero1").value;
  for (let i = 1; i <= pr1; i++) {
    let num = i;
    let sq = 0;
    let cu = 0;
    let accum = 0;

    sq = num * num;
    cu = num * num * num;
    accum = num + 1;

    /*document.write(*/
    /* "<table>"+num+" "+sq+" "+cu+"</table>"*/
    /*  "<table><tr><th>" + "Normal" + "</th><th>" + "Cuadrado" + "</th><th>" + "Cubo" + "</th></tr>"+ "<tr><td>"+ num + + sq + cu + "</td></tr></table>"*/
    /* "<table><th>"+ "Normal" +"</th><th>"+ "Cuadrado"+ "</th><th>"+ "Cubo" + "</th><tr><td>"+ num + "</td><td>" + sq + "</td><td>" + cu + "</td></tr></table>");*/

    document.getElementById("tabla").innerHTML +=
      "<tr><td>" + num + "</td><td>" + sq + "</td><td>" + cu + "</td></tr>";
  }
}

let r1 = Math.floor(Math.random() * 10);
let r2 = Math.floor(Math.random() * 10);
let suma = r1 + r2;
document.getElementById("randtable").innerHTML +=
  "<tr><td>" + r1 + "</td><td>" + r2 + "</td></tr>";
let stDate = Date.now();

function ej2() {
  let resultado = document.getElementById("respuesta").value;
  let end = Date.now();
  let tpasado = (end - stDate) / 1000;
  if (resultado == suma) {
    document.getElementById("respejer2").innerHTML =
      "Correcto" +
      "<br> <br> <br> El tiempo que tardaste fue de: " +
      tpasado +
      " segundos";
  } else {
    document.getElementById("respejer2").innerHTML =
      "Incorrecto" +
      "<br> <br> <br> El tiempo que tardaste fue de: " +
      tpasado +
      " segundos";
  }
}

let array = [
  -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0,
  0, 0,
];
document.getElementById("arreglo").innerHTML = array;

function contador(array) {
  let ceros = 0;
  let positivos = 0;
  let negativos = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      ceros++;
    } else if (array[i] > 0) {
      positivos++;
    } else {
      negativos++;
    }
  }

  document.getElementById("respejer3").innerHTML =
    "Hay " +
    ceros +
    " ceros, " +
    positivos +
    " positivos y " +
    negativos +
    " negativos";
}

contador(array);

/*ingresar una matriz y sacar promedio por renglon*/
let matriz = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
document.getElementById("matr").innerHTML = "La matriz es: " + matriz + "<br>";
function ej4(matriz) {
  let promedio = 0;
  let acumulador = 0;
  let contador = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      acumulador += matriz[i][j];
      contador++;
    }
    promedio = acumulador / contador;
    document.getElementById("respejer4.1").innerHTML +=
      "El renglón " + (i + 1) + " es " + matriz[i] + "<br>";
    document.getElementById("respejer4").innerHTML +=
      "El promedio del renglón " + (i + 1) + " es " + promedio + "<br>";
    acumulador = 0;
    contador = 0;
    promedio = 0;
  }
}
ej4(matriz);

function numReverse() {
  let num = document.getElementById("numRev").value;
  let reverse = num.split("").reverse().join("");
  document.getElementById("respejer5").innerHTML =
    "El número " + num + " al revés es " + reverse;
}

numReverse();

document.getElementById("boton1").onclick = (e) => {
  e.preventDefault();
  sqcubes();
};

document.getElementById("boton2").onclick = (e) => {
  e.preventDefault();
  ej2(r1, r2);
};

document.getElementById("boton5").onclick = (e) => {
  e.preventDefault();
  numReverse();
};
