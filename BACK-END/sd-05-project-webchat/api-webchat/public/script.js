const socket = require('socket.io')();
const formatador = require('../utils/formatador');

const form = document.querySelector('form');
const user = document.querySelector('#username');
const message = document.querySelector('#userMessage');
// console.log('tests:  ',formatador(new Date()));
console.log(user.value, message.value);
function messageRender(parametro) {
  const conversa = document.querySelector('#chat');
  const div = document.createElement('div');
  // const strong = document.createElement('strong');
  // strong.textContent = `${message.user}: ${message.message}`;
  div.className = 'messages';
  div.setAttribute('data-testid', 'message');
  // div.append(strong);
  div.textContent = parametro;
  conversa.append(div);
}

socket.on('saudacao', (e) => alert(e));

socket.on('message', (msg) => {
  // if (msg.id !== socket.id) messageRender(msg);
  if (!msg.includes(user.value)) messageRender(msg);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const sendingObject = {
    nickname: user.value,
    message: message.value,
  };

  if (user.value && message.value) {
    console.log('chat: ', formatador(new Date()));
    messageRender(`${formatador(new Date())} - ${user.value}: ${message.value}`);
    socket.emit('sendMessage', sendingObject);
  }
  message.value = '';
  return false;
});
