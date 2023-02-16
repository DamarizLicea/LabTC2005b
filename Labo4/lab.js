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



 let boton = document.getElementById("boton");
 boton.innerHTML = "Click aquí";
 boton.onclick = () => {
        let contadorclicks = Number (document.getElementById("clicks").innerHTML);
        contadorclicks++;
        console.log(contadorclicks);
        document.getElementById("clicks").innerHTML = contadorclicks;
    }


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

/*aquí empieza el laboratorio de javascript*/
let pr1 = prompt("Dame un número: ");
function sqcubes(pr1) {
  for (let i = 1; i <= pr1; i++) {
    let num = i;
    let sq = 0;
    let cu = 0;
    let accum = 0;

    sq = num * num;
    cu = num * num * num;
    accum = num + 1;

    document.write(
      "El cuadrado de " + num + " es " + sq + "  el cubo es: " + cu + "<br>"
    );
  }
}
sqcubes(pr1);
