class User{
    constructor(user, password){
        this.user = user;
        this.password = password;
    }

    obtenerPosts(){
        const posts = ['post1', 'post2'];
        return posts;
    }
}

class Moderador extends User {
    constructor(user, password, permisos){
        // Super nos permite copair todos los metodos y propiedades de la clase original.
		// Incluyendo el constructor, por eso le pasamos los parametros usuario y password.
        super(user, password);
        this.permisos = permisos;
    } 

    borrarPost(id){
        if(this.permisos.includes('borrar')){;
            console.log(`El post con el id ${id} fue eliminado.`);
        }
        else{
            console.log('No tenés los permisos para borrar posts');
        }
    }
}

const user = new User('Marcos', '123');
console.log(user.obtenerPosts());

// const user2 = new Moderador('Rebe', '456', ['borrar', 'editar']);
const user2 = new Moderador('Rebe', '456', ['editar']);
console.log(user2.permisos);
console.log(user2.borrarPost(7));
