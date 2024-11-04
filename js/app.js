// variables 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

const contenido = document.querySelector('#contenido');

// Events
eventListener()
function eventListener() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets)

        crearHTML()
    })
}


// Function
function agregarTweet(e){
    e.preventDefault();

    // textarea donde capturaremos el mensaje
    const tweet = document.querySelector('#tweet').value;

    // Validación
    if(tweet === ''){
        mostrarError('Error campo vacio ');
        
        return; // evita que se ejecute las siguientes lineas de código.
    }

    const tweetObject = {
        id: Date.now(),
        tweet // Esto es igual al par key-value "tweet: tweet".
    }

    // Siguiente codigo a ejecutar si no pasa la validacion
    tweets = [...tweets, tweetObject];
    
    // una vez agregado, creamos el html
    crearHTML()

    // Reiniciar el formulario
    formulario.reset();
}

// function limpiarAlerta(){
//     const alerta = document.getElementsByClassName('error');
//     if(alerta){
//         alerta.remove();
//     }
// }

// Mostrar mensaje de error
function mostrarError(error){
    // limpiarAlerta()

    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');


    // Elimina el mensaje error cuando pasan 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

    formulario.appendChild(mensajeError);

    console.log(mensajeError);
}

// muestra un listado de los tweets
function crearHTML(){
    limpiarHMTL();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //Crear HTML por cada elemento del object
            const li = document.createElement('li')
            // add the text
            li.innerText = tweet.tweet

            // Asignar el button
            li.appendChild(btnEliminar);

            // insertar el li en el HTML
            listaTweets.appendChild(li);
        })
        
    }

    sincronizarStorage();
}

// Agrega los tweets actuales al locaStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Limpiar el HTML
function limpiarHMTL(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

// Eliminar un tweet
function borrarTweet(id){
    // Te filtra todos los demas excepto el que quieres eliminar
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
    console.log(tweets);
}