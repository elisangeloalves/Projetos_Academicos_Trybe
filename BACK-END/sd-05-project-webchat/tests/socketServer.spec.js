const io = require('socket.io-client');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const BASE_URL = 'http://localhost:3000/';

describe('Crie um back-end para conexão simultaneamente de clientes e troca de mensagens em chat público', () => {
  const chatMessage = 'Olá meu caros amigos!';
  const nickname = 'Joel';
  let client1;
  let client2;
  let connection;
  let db;

  beforeEach(async () => {
    connection = await MongoClient.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db(process.env.DB_NAME);
    await db.collection('messages').deleteMany({});
    client1 = io.connect(BASE_URL);
    client2 = io.connect(BASE_URL);
  });

  afterEach(async () => {
    await db.collection('messages').deleteMany({});
    client1.disconnect();
    client2.disconnect();
    await connection.close();
  });

  it('Será validado que vários clientes conseguem se conectar ao mesmo tempo', (done) => {
    client1.on('connect', () => {
      expect(client1.connected).toBeTruthy();
    });
    client2.on('connect', () => {
      expect(client2.connected).toBeTruthy();
      expect.assertions(2);
      done();
    });
  });

  it('Será validado que cada cliente conectado ao chat recebe todas as mensagens que já foram enviadas', (done) => {
    client1.emit('message', { chatMessage, nickname });

    client1.on('message', (message) => {
      expect(message.includes(chatMessage)).toBeTruthy();
    });
    client2.on('message', (message) => {
      expect(message.includes(chatMessage)).toBeTruthy();
      done();
    });
  });

  it('Será validado que toda mensagem que um cliente recebe contém as informações acerca de quem a enviou, data-hora do envio e o conteúdo da mensagem em si', (done) => {
    const dateRegex = /\d{1,2}-\d{1,2}-\d{4}/gm;
    const timeRegex = /\d{1,2}:\d{1,2}(:\d{0,2})?/gm;

    client1.emit('message', { chatMessage, nickname });

    client1.on('message', (message) => {
      expect(message.includes(chatMessage)).toBeTruthy();
      expect(message.includes(nickname)).toBeTruthy();
      expect(message).toMatch(dateRegex);
      expect(message).toMatch(timeRegex);
    });
    client2.on('message', (message) => {
      expect(message.includes(chatMessage)).toBeTruthy();
      expect(message.includes(nickname)).toBeTruthy();
      expect(message).toMatch(dateRegex);
      expect(message).toMatch(timeRegex);
      done();
    });
  });
});
