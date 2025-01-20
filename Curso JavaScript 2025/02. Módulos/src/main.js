// index.js -> cómo está en el curso

/* 
	📌 Named Imports
*/
/* 
	📌 Named Imports
	Podemos importar variables y funciones que han sido exportadas mediante la palabra "export".
	Podemos importarlas con el mismo nombre o podemos usar un alias usando la palabra "as".
	Normalmente todos los import se establecen al inicio del documento.
*/
// import {nombre, obtenerPosts} from './namedExports';
// console.log(`Mi nombre es ${nombre}`);
// console.log(`Los posts obtenidos por función son: ${obtenerPosts()}`);

/* 
	📌 Namespace Imports
*/
/* 
	Podemos importar todas las variables y funciones que fueron exportadas 
	con un named export dentro de un objeto.
*/
// import * as datos from './namedExports';
// console.log(datos.nombre);
// console.log(datos.obtenerPosts());

/* 
📌 Default Imports
*/
/* 
	Los default imports no utilizan llaves y podemos ponerles el nombre que queramos.
*/
// import obtenerUsuario from './defaultExports';
// console.log(obtenerUsuario());

/* 
	📌 Empty Imports
	Carga todo el codigo pero sin hacer ningun objeto.
*/
import './emptyExports';

// No podemos acceder a las variables definidas en el archivo emptyExport.
// Si las necesitamos tenemos que que exportarlas.
import { correo } from './emptyExports';
console.log(correo);