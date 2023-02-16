/* Lenguaje compilado lee todo a maquina y te optimiza el codigo, 
el interpretador va linea por linea y lo va ejecutando y cuando ve un error, se rompe
Java se crea para que ese código funciones en  cualuqier computadora*/

/*Para declarar variables puedes usar var y let, var deja el código vulnerable*/
var desayuno = "hotcakes";
let comida = "pizza";
const precio = 120; /* constante, no se puede cambiar por el cliente en su navegador, pero let sí */

console.log("El desayuno es " + desayuno); /* Sale en la consola */
console.info("El precio es: " + precio); /* Sale en la consola pero con una i en circulito */
console.warn("No le cambies el precio"); /* Sale en la consola pero con un signo de exclamación amarillo*/
console.error("No le cambies el precio"); /* Sale en la consola pero con un signo de tache en círculos rojo */
console.assert(1 === 0, "No son iguales"); /* Si la cond es verdadera ni hace nada, si es falsa manda error*/
/* (===) es estrictamente igual, compara valor y tipo, (==) busca que sean iguales*/
/* 1 == true es true en js*/ 
let pr1 = "Dame un número: ";
