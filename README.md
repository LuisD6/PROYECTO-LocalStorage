## Aprendizajes Clave

A través de esta práctica, se consolidaron conceptos fundamentales de JavaScript como:
- Manejo de eventos (`submit`, `DOMContentLoaded`).
- Creación y eliminación dinámica de elementos del DOM.
- Almacenamiento y recuperación de datos en `localStorage`.
- Validación y manejo de errores en formularios.

# Proyecto: Administrador de Tweets

Este proyecto es una aplicación web para gestionar una lista de tweets. Los usuarios pueden agregar, eliminar y almacenar tweets en `localStorage` para que persistan al recargar la página. Este proyecto demuestra el uso de eventos, manipulación del DOM, almacenamiento en `localStorage`, y validación de formularios.

## Funcionalidades del Proyecto

### Agregar Tweets
Los usuarios pueden agregar tweets mediante un formulario. El evento `submit` del formulario captura el texto ingresado, crea un objeto `tweet` con un identificador único y lo almacena en un array de tweets, el cual se muestra dinámicamente en la página.

### Validación de Entradas
La función `agregarTweet()` verifica que el campo de texto no esté vacío. Si el usuario intenta enviar un tweet vacío, se muestra un mensaje de error durante 3 segundos, mejorando la experiencia del usuario al evitar entradas inválidas.

### Persistencia de Datos
Los tweets se almacenan en `localStorage` para asegurar que los datos persistan incluso si el usuario recarga la página. La función `sincronizarStorage()` es responsable de guardar el estado actual de los tweets en `localStorage`, y al cargar la página, los datos se recuperan automáticamente y se muestran en la interfaz.

### Eliminar Tweets
Cada tweet en la lista tiene un botón de eliminación que permite al usuario borrar tweets específicos. Al eliminar un tweet, el array de tweets se actualiza y el cambio se refleja tanto en la interfaz como en `localStorage`.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura de la aplicación.
- **CSS3**: Para el estilo y la presentación visual.
- **JavaScript**: Para la manipulación del DOM, manejo de eventos y almacenamiento en `localStorage`.

## Código de Ejemplo

Este es un fragmento de código que maneja la validación y el agregado de tweets:
```javascript
function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    if(tweet === '') {
        mostrarError('Error: campo vacío');
        return;
    }
    const tweetObject = { id: Date.now(), tweet };
    tweets = [...tweets, tweetObject];
    crearHTML();
    formulario.reset();
}
```

## Referencia

Este proyecto está disponible para pruebas en GitHub Pages: [https://luisd6.github.io/PROYECTO-EnviarEmail/](https://luisd6.github.io/PROYECTO-LocalStorage/).