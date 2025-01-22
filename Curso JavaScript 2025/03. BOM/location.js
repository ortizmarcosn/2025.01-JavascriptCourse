// href - Retorna la URL de la página actual
console.log(window.location.href);

// hostname - Retorna el host de la página actual
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la página actual
console.log(location.pathname);

// protocol - Retorna el protocolo utilizado
console.log(location.protocol);

// assign - Asigna una URL a acceder
const cargarDocumento = () => {
    location.assign('https://google.com');
}

// history 
const regresar = () => {
    history.back();
}

// forward 
const irHaciaAdelante = () => {
    history.forward();
}