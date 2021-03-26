require('dotenv').config();
const insertedId = require('mongodb').ObjectId;
const database = require('../model/models');

// const routes = require('../routes/index');
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
const server = require('http').createServer(app);
const formatador = require('../utils/formatador');
const cors = require('cors');
const { join } = require('path');

// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/../views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(join(__dirname, 'public')));

const io = require('socket.io')(server, {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'],
  },
});

app.use(cors());


let env = process.env.NODE_ENV;
if (!env) {
  env = 'development';
}
// Carrega configurações de acordo
// let config = require(`./config/config.${env}.json`);
//Conecta ao banco
// ('./config/database')
// require('mongodb://localhost:27017/webchat');
let response = [];
io.on('connection', (socket) => {
  console.log(`Nova conexão: ${socket.id}`);
  socket.emit('saudacao', `Bem vindo! seu id é: ${socket.id}`);
  
  socket.on('message', async(data) => {
    console.log(`id do usuario: ${socket.id} usuario: ${data.nickname}  mensagem: ${data.chatMessage}`);
    const message = await database.createMessage({ message: data.chatMessage, idUser: socket.id, name: data.nickname })
    .then((res ) => res);
    const chat = `${message.data} - ${message.name}: ${message.message}`;
    console.log(`chat: ${chat}`);
    
    console.log('teste: ',response);
    
    
    response.push(chat);
    // socket.broadcast.emit('receivedMessage', chat);
    io.emit('message', chat);
  });
  
  socket.on('save-nickName', async(userName) => {
    console.log('Nome salvo: ', userName);
    let user;
    await database.createUser(userName).then((res) => user = res);
    console.log('do banco: ',user);
    io.emit('nickName', user);
  });
  
  socket.on('disconnect', () => {
    console.log(
      'Lembre-se de deixar tudo relacionado a "conexão socket" dentro do evento "connection"'
      );
    });
  });
  console.log('array: ', ...response);

  app.get('/', (req, res) => {
    res.status(200).render("index", { 
      mensagens: 'Histórico de mensagens', req: [...response] });
  });
  
  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;