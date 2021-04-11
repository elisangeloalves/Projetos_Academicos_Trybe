const getConnection = require('./connection');
const formatador = require('../utils/formatador');
// const insertedId = require('mongodb').ObjectId;

const createMessage = async ({ id, nickname, chatMessage, type, targetId }) => {
  const data = formatador(new Date());
  const messages = await getConnection('messages')
    .then((msg) => msg.insertOne({ id, nickname, chatMessage, type, targetId, data }))
    .then((res) => res.ops[0])
    // ({
    //   id: insertedId(res.insertedId),
    //   idUser: res.ops[0].idUser,
    //   message: res.ops[0].message,
    //   data: formatador(res.ops[0].data),
    //   name: res.ops[0].name,
    // }))
    .catch((err) => console.log(err));
  return messages;
};

const findUsersMessages = async (id, targetId) =>
  getConnection('messages')
    .then((msg) =>
      msg
        .find({
          $or: [
            { id, targetId },
            { id: targetId, targetId: id },
          ],
        })
        .toArray()).catch((err) => console.log(err));

const findAllMessages = async () =>
  getConnection('messages')
    .then((msg) => msg.find({ targetId: null }).toArray())
    .catch((err) => console.log(err));

// const findAllUser = async () =>
//   getConnection('users')
//     .then((users) => users.find({}, { _id: 0, nickname: 1, idUser: 1 }).toArray())
//     .catch((err) => console.log(err));

// const deleteUser = async (idUser) =>
//   getConnection('users')
//     .then((users) => users.deleteOne({ idUser }))
//     .catch((err) => console.log(err));

// const createUser = async (nickname, idUser) => {
//   const user = await getConnection('users')
//     .then((u) => u.insertOne({ nickname, idUser }))
//     .then(
//       (res) => ({
//         id: insertedId(res.insertedId),
//         nickname: res.ops[0].nickname,
//         idUser: res.ops[0].idUser,
//       }),
//       // console.log(res.ops[0]);
//     )
//     .catch((err) => console.log(err));
//   return user;
// };
module.exports = {
  // createUser,
  createMessage,
  findUsersMessages,
  // findAllUser,
  // deleteUser,
  findAllMessages,
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
