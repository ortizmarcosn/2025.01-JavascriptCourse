/*
	Los arreglos en javascript en realidad son objetos. 
	Esto significa que pueden contener propiedades y métodos.
	Vamos a ver algunas de las propiedades y métodos mas importantes:
*/

const colores = ['Rojo', 'Azul', 'Negro', 'Blanco'];

/* 
	📌 .length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/

console.log(colores);
console.log('Prueba función LENGTH - La cantidad de colores es: ' + colores.length);

/*
	📌 .toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/

// document.body.innerHTML = colores.toString();

/*
	📌 .join()
	Nos permite transformar un arreglop a una cadena de texto y separar cada elemento. 
*/

console.log('Prueba de función JOIN: ' + colores.join(' - '));

/*
	📌 .sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/

const letras = ['A', 'D', 'C', 'B'];
const numeros = [1,3,4,2];

console.log('Prueba función SORT: ' + letras.sort());
console.log('Prueba función SORT: ' + numeros.sort());

/*
	📌 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/

// const letras = ['A', 'D', 'C', 'B'];
// const numeros = [1,3,4,2];

console.log('Prueba función REVERSE: ' + letras.reverse());
console.log('Prueba función REVERSE: ' + numeros.reverse());

/*
	📌 .concat()
	Nos permite juntar dos arreglos en uno solo. 
*/

const array1 = [1,2,3];
const array2 = ['A', 'B', 'C'];
const array3 = array1.concat(array2);

console.log('Prueba función CONCAT: ' + array3);

/* 
	📌 .push()
	Nos permite agregar un elemento al final de un arreglo.
*/

// const colores = ['Rojo', 'Azul', 'Negro', 'Blanco'];

colores.push('Amarillo');
console.log('Función PUSH: ' + colores);

/*
	📌 .pop()
	Nos permite eliminar el ultimo elemento de un arrreglo. 
*/

colores.pop();
console.log('Función POP: ' + colores);

/* 
	📌 .shift()
	Elimina el primer elemento de un arreglo y recorre los elementos.
*/
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
console.log(dias[0]); // Lunes
const diaEliminado = dias.shift(); // Lunes

console.log(dias);
console.log(dias[0]); //Martes

/*
	📌 .unshift()
	Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
dias.unshift('Carlos');
console.log(dias);

/* 
	📌 .splice()
	Nos permite insertar elementos a un arreglo donde le especifiquemos.
	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
	- 2do parametro - Cuantos elementos eliminar desde la posición indicada.
	- Resto de parametros - Los elementos a insertar.
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.splice(1, 2, 'Rafael', 'Roberto');

// Tambien podemos usar splice para eliminar elementos sin insertar ninguno.
// amigos.splice(1, 1);

console.log(amigos);

/* 📌 .slice()
	Nos permite copiar una parte de un arreglo a otro.
	- 1er parametro - Posición desde donde queremos copiar.
	- 2do parametro - Hasta antes de que elemento copiar.
*/
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);