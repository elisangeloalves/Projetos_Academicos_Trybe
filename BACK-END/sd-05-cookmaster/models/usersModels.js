const getConnection = require('./connection');

const createUser = async ({ name, email, password, role }) => getConnection('users').then((user) => user.insertOne({ name, email, password, role }))
  .then((response) => ({
    _id: response.insertedId,
    name,
    email,
    password,
    role,
  }));

const findUserbyEmail = async (email) => getConnection('users').then((user) => user.findOne({ email }));

module.exports = {
  createUser,
  findUserbyEmail,
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
