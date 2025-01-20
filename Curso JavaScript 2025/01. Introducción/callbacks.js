/*
	📌 Callbacks	
	Las callbacks son funciones que podemos pasar como parametro a una función.
	Esto con el fin de que una función puede ejecutar otra función.
*/

const obtenerPostDelUsuario = (usuario, callback) => {
    console.log(`Obteniendo posts del usuario ${usuario} .... `);
    
    setTimeout(() => {
        let posts = ['post1', 'post2', 'post3'];
        callback(posts);
        }, 2000); // 2 segundos -> 2000 ms
}

obtenerPostDelUsuario('Marcos', (posts) => {
    console.log(posts);
});