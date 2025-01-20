/*
	📌 Clases
	Las clases son plantillas que podemos usar para crear objetos.
	Sirven para encapsular código.
*/

/*
	📌 Estructura de una clase:
	- Definición
	- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
	- Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
	- Métodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
*/
// class NombreDeLaClase {
// 	constructor() {
// 		//... Código del constructor
// 	}
// }


class Usuario {
    tipo = 'usuario';

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

        console.log('Nuevo usuario registrado');
    }

    obtenerNombreCompleto(){
        console.log('Loading....');
        return `${this.nombre} ${this.apellido}`
    }
}

const usuario = new Usuario('Marcos', 'Ortiz'); 
console.log(usuario.obtenerNombreCompleto());

const usuario2 = new Usuario('Rebeca', 'Carrizo'); console.log(usuario2.obtenerNombreCompleto());

