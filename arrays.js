var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

//Observamos la longitud.
console.log(frutas.length);

//Accedemos al array. Nos mostrará manzana y el segundo Cereza.
console.log(frutas[0]);
console.log(frutas[2]);

//Metodos para mutar arrays.
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

var masFrutas = frutas.push("Uvas"); //Agrega un elemento al final del array.
var ultimo = frutas.pop(); //Eliminamos el ultimo elemento que existe en el array.
var nuevaLongitud = frutas.unshift(); //Agregamos elementos al inicio del array.
var borrarFruta = frutas.shift(); // Eliminamos el primer elemento del array.
var posicion = frutas.indexOf("Cereza"); //Nos trae la posicion del elemento que agregamos al index.


