/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/

var obtenerCantidadDeLetras = (nombre) => {
    var numeroLetras = nombre.length;
    // Forma 1
    console.log('El nombre: ' + nombre + ' tiene ' + numeroLetras + ' letras');
    
    // Forma 2
    console.log(`El nombre ${nombre} tiene ${numeroLetras} letras.`);
}

obtenerCantidadDeLetras('Marcos');