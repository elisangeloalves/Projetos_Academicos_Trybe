require('dotenv').config();
const faker = require('faker');
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

const server = require('http').createServer(app);
const cors = require('cors');
// const { join } = require('path');
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/../views`);
app.use(express.json());
// app.use(express.static(join(__dirname, 'public')));
const io = require('socket.io')(server, {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
const database = require('../model/models');

let env = process.env.NODE_ENV;
if (!env) {
  env = 'development';
}

let onlineUser = [];

io.on('connection', (socket) => {
  socket.on('startConnection', (data) => {
    onlineUser.push({ id: socket.id, nickname: data.nickname });
    io.emit('update', onlineUser);
  });
  // socket.emit('saudacao', faker.name.firstName());
  socket.on('private-message', async (dados) => {
    const privateMessage = await database
      .createMessage({ id: socket.id, ...dados })
      .then((res) => res);

    const chat = `${privateMessage.data} - ${privateMessage.nickname} (${privateMessage.type}): ${privateMessage.chatMessage}`;
    io.to(privateMessage.targetId).to(socket.id).emit('res-pvt-message', socket.id, chat);
  });

  socket.on('message', async (data) => {
    const message = await database.createMessage({ id: socket.id, ...data }).then((res) => res);
    const chat = `${message.data} - ${message.nickname}: ${message.chatMessage}`;
    // console.log(`chat: ${chat}`);
    // response.push(chat);
    io.emit('message', chat);
    io.emit('update', onlineUser);
  });

  socket.on('save-nickName', async (user) => {
    const idx = onlineUser.findIndex((e) => e.id === user.id);
    onlineUser[idx] = { id: user.id, nickname: user.nickname };
    io.emit('update', onlineUser);
  });

  socket.on('disconnect', async () => {
    onlineUser = onlineUser.filter((id) => id.id !== socket.id);
    io.emit('update', onlineUser);
  });
});

app.get('/', async (req, res) => {
  const allMessages = await database.findAllMessages();
  const response = allMessages.map((message) => `${message.data} - ${message.nickname}: ${message.chatMessage}`);

  res.status(200).render('index', {
    mensagens: 'Histórico de mensagens',
    req: [...response],
    guest: `guest ${faker.name.firstName()}`,
    onlineUser,
  });
});

app.get('/private/:id/:target', async (req, res) => {
  const { target, id } = req.params;
  const privateMsg = await database.findUsersMessages(id, target);
  res.status(200).json(privateMsg);
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
