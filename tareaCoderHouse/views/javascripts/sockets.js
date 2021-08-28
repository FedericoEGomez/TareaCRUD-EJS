const socket = io.connect();

const user = document.getElementById('user');
const message = document.getElementById('msg');
const send = document.getElementById('send');
const messageForm = document.getElementById('messageForm');
console.log('estoy aca')

messageForm.addEventListener('submit', e => {
    console.log('click')
  e.preventDefault();
  const msg = { 
    author: user.value, 
    text: message.value 
  };
  socket.emit('nuevoMensaje', msg);
  console.log(msg)
  messageForm.reset();
  message.focus();
});


// Recibir los mensajes desde el servidor con websockets:

socket.on('mensajes', msg => {
  const html = listaMensajes(msg);
  console.log(msg)
  document.getElementById('mensajes').innerHTML = html;
});



// Construir las filas de mensajes con map y un template string con la data de cada mensaje:

const listaMensajes = mensajes => mensajes.map( msg =>
  `
    <tr>
        <td>${msg.author}</td>
        <td>${msg.fyh}</td>
        <td>${msg.text}</td>
    </tr>
  `
  ).join(' ')
;