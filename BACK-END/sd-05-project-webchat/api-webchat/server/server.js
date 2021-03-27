require('dotenv').config();
const insertedId = require('mongodb').ObjectId;
const database = require('../model/models');
const faker = require('faker');

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
let onlineUser = [];

io.on('connection', (socket) => {

  socket.on('startConnection', (nickname) => { 
    onlineUser.push({ id: socket.id, nickname });
  });
  // socket.emit('saudacao', faker.name.firstName());
  
  socket.on('message', async(data) => {
    console.log(`id do usuario: ${socket.id} usuario: ${data.nickname}  mensagem: ${data.chatMessage}`);
    const message = await database.createMessage({ message: data.chatMessage, idUser: socket.id, name: data.nickname })
    .then((res ) => res);

    const chat = `${message.data} - ${message.name}: ${message.message}`;
    console.log(`chat: ${chat}`);
    
    
    
    response.push(chat);
    // socket.broadcast.emit('receivedMessage', chat);
    io.emit('message', chat);
  });
  
  socket.on('save-nickName', async(user) => {
    console.log("user:" , user)
    const idx = onlineUser.findIndex((e) => e.id === user.id );
    onlineUser[idx] = { id: user.id, nickname: user.nickname };
    // await database.createUser(userName, socket.id).then((res) => res);
    // let users = await database.findAllUser().then((res) => res)
    // console.log('users: ',users);
    io.emit('nickName', onlineUser);
  });
  
  socket.on('disconnect', async () => {
    // await database.deleteUser(socket.id);
    onlineUser = onlineUser.filter( id => id.id !== socket.id);
    // let users = await database.findAllUser().then((res) => res);
    // socket.remove();
    io.emit('nickName', onlineUser);
    console.log(
      'Lembre-se de deixar tudo relacionado a "conexão socket" dentro do evento "connection"'
      );
    });
  });
  console.log('array: ', ...response);

  let guest = 1;
  app.get('/', (req, res) => {
    res.status(200).render("index", { 
      mensagens: 'Histórico de mensagens', req: [...response], guest: `guest ${faker.name.firstName()}` });
      guest+=1;
  });
  
  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;