// JS PARA LA TAREA 5
//Mostrar tu nombre
let nombre = "Eric Reyes";
console.log("Tu nombre es: " + nombre);

// Hacer una suma
var sum1 = 3;
var sum2 = 5;
resultado = sum1 + sum2;
console.log("El resultado de la suma es:" +resultado);

//compuerta OR
if (1 || 0) { // Funciona como if( true || false )
    alert("valor verdadero!");
  }

//compuerta AND
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("La hora es 12:30");
}

//compuerta NOT
alert(!true); // false
alert(!0); // true
console.log(alert);

//numero random del 0 al 10
function numero_azar() {
    var aleatorio = Math.round(Math.random()*10);
    alert("Número aleatorio entre 0 y 10:"+aleatorio);}


//adivinar un numero aleatorio
let numeroAleatorio = parseInt(Math.random()* 10)+1;
console.log("Número obtenido", numeroAleatorio);
let num, intentos = 10;
/* Saldremos del bucle si agotamos intentos o acertamos número */
do {
  num = prompt(
    `Ingrese un número (quedan ${intentos} intentos):`
  );
} while(numeroAleatorio != num && --intentos > 0);
/* Detectamos si salimos del bucle por agotar intentos o acertar número */
if (numeroAleatorio == num){
  alert("¡Ha acertado el número!");
} else {
  alert("No lo ha conseguido en 10 intentos, sigue intentando");
}
    

