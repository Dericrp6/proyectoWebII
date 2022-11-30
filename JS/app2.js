//JS de la tarea 7

/*
Hacer una funcion que ingrese un numero y ponga hasta que multiplicacion hacer
ejemplo num1 = 3 num2 = 5
3*1
3*2
3*3
3*4
3*5
*/



/*
Plantillas literales:Son cadenas literales que habilitan el uso de expresiones incrustadas.
Con ellas es posible utilizar cadenas de caracteres de mas de una linea y funcionalidades de interpolacion de cadenas de caracteres

Las plantillas de cadena de caracteres pueden contener marcadores identificados por el signo de dolar ($) y envueltos en llaves ({}).
Las expresiones contenidas en los marcadores junto con el texto entre ellas son enviados como documentos a una funcion.

*/

let nombre = "Eric Reyes";
console.log(`Saludo: ${nombre}`);
console.log(`Saludo: ${nombre.toUpperCase()}`);
console.log(`Saludo: ${nombre.toLowerCase()}`);

/*
Uno de los mayores problemas al establacer variables con var es que puede sobreescribir las declaraciones de variables sin errores

En una aplicacion pequeña es posible que no se encuentren estos tipos de problemas pero cuando el codigoes grande puedes sobreescribir 
accidentalmente una variable que no tenia la intencion de sobreescribirla.
Debido a este comportamiento nos arroja un error.

*/

let estado = true;

if(estado){
 let estado = false;
 console.log(estado);
}


var estado1 = true;

if(estado1){
 var estado1 = false;
 console.log(estado);
}

// Const es una constante 
/*
Array es importante comprender  los objetos (INcluidos los arreglos y las funciones) asignados a una variable mediante el uso de CONST siguen siendo mutables.
El uso de CONST solo evita la reasignacion de identificador de variables

- El metodo PUSH añade 1 o mas elementos al final del arreglo y devuelve la nueva longitud del arreglo.
- El metodo UNSHIFT agrega 1 o mas elementos al inicio del arreglo y devuelve la nueva longitud del arreglo.
- El metodo POP elimina el ultimo elemento de un array por ende cambia la longitud del arreglo.
*/
const lista = ["Pera", "Toronja", "Sandia","Uva"]

lista.push("Jicama");
console.log(lista[4]);  

lista.unshift("Manzana");
console.log(lista[0]);

const listaEliminada = ["Pera", "Toronja", "Sandia","Uva"]

listaEliminada.push("Jicama");
console.log(listaEliminada);  

listaEliminada.pop();

console.log(listaEliminada);

/*
PRACTICA CARRITO DE COMPRAS:
    El objetivo es crear una aplicacion que nos permita ir agregando elementos a un carrito de compras .
    Con uso de arreglos.
*/