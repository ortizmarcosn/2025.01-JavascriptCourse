/*
	📌 El Browser Object Model nos permite poder acceder a propiedades y metodos del navegador web.
	Ejemplos de cosas que nos permite hacer:
	- Acceder a la ventana para conocer su tamaño
	- Trabajar con la barra de direcciones
	- Mostrar alertas
	- etc
*/

/*
	📌 Window Object
	Representa la ventana del navegador.
	Las variables y funciones globales son parte del objeto de window
*/


// console.log(window);

// Mensaje de alerta cuando inicia la página.
// window.alert('Hola!');

// Medición de pixeles
console.log(`La ventana de la web tiene ${window.innerWidth} pixeles de ancho y ${window.innerHeight} pixeles de alto`);

/*
	📌 Trabajar con ventanas
	Con el BOM podemos:
	- Abrir y cerrar ventanas.
	- Mover ventanas.
	- Cambiar el tamaño de ventanas.
*/

/* 
	📌 window.open()
	Nos permite abrir ventanas del navegador
	Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

	- 1er parametro: Dirección de la nueva ventana
	- 2do parametro: Nombre de la ventana
	- 3er parametro: Cadena de texto de opciones

	Nos devuelve un objeto para aceder a esa ventana
*/

let ventana;
const abrirVentana = () => {
   ventana = window.open('https://google.com', 'Nueva ventana', 'width = 500, height = 500');
   ventana.document.write('Hola! Testing testing');
}

const cerrarVentana = () => {
    ventana.close();
}

/*
	📌 Screen Object
	Representa la pantalla del usuario.
*/

console.log(`Alto de pantalla: ${window.screen.height}`);
console.log(`Ancho de pantalla: ${window.screen.width}`);

// Available height and width

console.log(`Alto de pantalla sin barra de Windows ${window.screen.availHeight}`);
console.log(`Ancho de pantalla sin barra de Windows ${window.screen.availWidth}`);