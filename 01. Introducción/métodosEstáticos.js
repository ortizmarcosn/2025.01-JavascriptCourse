/*
	📌 Propiedades y Métodos Estaticos
	Para poder acceder a las propiedades y metodos de una clase, 
	primero tenemos que crear un nuevo objeto apartir de una clase.

	Esto lo podemos cambiar utilizando propiedades y métodos estaticos.
*/

class User{
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrarUser(idUser){
        console.log(`El user ${idUser} ha sido borrado de la base de datos.`)
    }

    static registrados = 100;

}

// const user = new User ('Marcos', 'marcos@asd.com');
// user.borrarUser(10);


User.borrarUser(10);
console.log(`Los usuarios registrados son: ${User.registrados}`);