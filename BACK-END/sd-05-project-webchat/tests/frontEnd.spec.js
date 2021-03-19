require('dotenv').config();

const puppeteer = require('puppeteer');
const _ = require('lodash');
const { MongoClient } = require('mongodb');

const BASE_URL = 'http://localhost:3000/';

function dataTestid(name) {
  return `[data-testid=${name}]`;
}

describe('Crie um frontend para que as pessoas interajam com o chat', () => {
  let browser;
  let page;
  let connection;
  let db;

  beforeEach(async () => {
    connection = await MongoClient.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db(process.env.DB_NAME);
    browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1920,1080'], headless: true });
    await db.collection('messages').deleteMany({});
    page = await browser.newPage();
    await page.goto(BASE_URL);
  });

  afterEach(async () => {
    await browser.close();
    await db.collection('messages').deleteMany({});
    await connection.close();
  });

  it('Será validado que o frontend tem uma caixa pra enviar mensagens', async () => {
    const messageBox = await page.$(dataTestid('message-box'));
    const sendButton = await page.$(dataTestid('send-button'));

    expect(messageBox).not.toBeNull();
    expect(sendButton).not.toBeNull();
  });

  it('Será validado que o frontend possui um campo onde o usuário pode inserir o nickname e um botão para salvar', async () => {
    const nicknameBox = await page.$(dataTestid('nickname-box'));
    const saveButton = await page.$(dataTestid('nickname-save'));

    expect(saveButton).not.toBeNull();
    expect(nicknameBox).not.toBeNull();
  });

  it('Será validado que é possível enviar mensagem após alterar o nickname', async () => {
    const chatMessage = 'Fala pessoal';
    const nickname = 'Fernando';

    await page.goto(BASE_URL);

    const nicknameBox = await page.$('[data-testid=nickname-box]');
    await nicknameBox.type(nickname);

    const saveButton = await page.$('[data-testid=nickname-save]');
    await saveButton.click();

    const messageBox = await page.$('[data-testid=message-box]');
    await messageBox.type('Fala pessoal');

    const sendButton = await page.$('[data-testid=send-button]');
    await sendButton.click();
    await page.waitForSelector(dataTestid('message'));

    const messages = await page.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));
    expect(messages.length).toBeGreaterThanOrEqual(1);
    expect(_.last(messages)).toMatch(RegExp(nickname));
    expect(_.last(messages)).toMatch(RegExp(chatMessage));
  });
});
