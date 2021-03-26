const getConnection = require('./connection');
const insertedId = require('mongodb').ObjectId;
const formatador = require('../utils/formatador');

const createUser = async (nickname ) => {
  const user = await getConnection('users').then((user) => user.insertOne({ nickname }))
  .then((res) => ({
      id: insertedId(res.insertedId),
      usuario: res.ops[0].nickname,
    })
    // console.log(res.ops[0]);
).catch((err) => console.log(err));
return user;
};

const createMessage = async ({ message, idUser, name }) => {
  const messages = await getConnection('messages')
    .then((msg) => msg.insertOne({ message, idUser, name, data: new Date() }))
    .then((res) => 
    // console.log(res.ops[0])
    ({
    id: insertedId(res.insertedId),
    idUser: res.ops[0].idUser,
    message: res.ops[0].message,
    data: formatador(res.ops[0].data),
    name: res.ops[0].name,
  })
  ).catch((err) => console.log(err));
  return messages;
};

const findUserMessages = async (idUser) => getConnection('messages').then((msg) => msg.find({ idUser }, { message: 1, idUser: 0,  data: 1 })
  .toArray()
).catch(err => console.log(err));

module.exports = {
  createUser,
  createMessage,
  findUserMessages,
};


/*
formato do dos campos a ser salvo na tabela de usuarios:

{
  "name" : "Erick Jacquin",
  "email" : "erickjacquin@gmail.com",
  "password" : "12345678",
  "role" : "user"
}

formato do retorno do banco apos a requisição:

{
  "_id" : ObjectId("5f46914677df66035f61a355"),
  "name" : "Erick Jacquin",
  "email" : "erickjacquin@gmail.com",
  "password" : "12345678",
  "role" : "user" }

*/
