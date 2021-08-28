const socket = io.connect();

// MENSAJES:

// Leer los valores del formulario por su id en el DOM:

const user = document.getElementById('user');
const message = document.getElementById('msg');
const send = document.getElementById('send');
const messageForm = document.getElementById('messageForm');


// Crear event listener para el botón de enviar:

messageForm.addEventListener('submit', e => {

  e.preventDefault();

  // Construir un objeto para el mensaje:

  const msg = { 

    author: user.value, 
    text: message.value 
  };

  // Emitir el mensaje desde el cliente al servidor con websockets:

  socket.emit('nuevoMensaje', msg);

  // Resetear el formulario:

  messageForm.reset();

  message.focus();
});


// Recibir los mensajes desde el servidor con websockets:

socket.on('mensajes', msg => {

  // Llamar a la función (listaMensajes) que construye las filas con la data de cada mensaje:

  const html = listaMensajes(msg);

  // Insertar la lista de mensajes en el DOM:

  document.getElementById('mensajes').innerHTML = html;
});



// Construir las filas de mensajes con map y un template string con la data de cada mensaje:

const listaMensajes = mensajes => mensajes.map( msg =>
  `
    <div>
      <b style="color:blue;">${msg.author}</b>
      [<span style="color:brown;">${msg.fyh}</span>] :
      <i style="color:green;">${msg.text}</i>
    </div>
  `
  ).join(' ')
;
