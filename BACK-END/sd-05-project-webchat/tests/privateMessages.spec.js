require('dotenv').config();
require('@testing-library/jest-dom');
const faker = require('faker');
const puppeteer = require('puppeteer');
const _ = require('lodash');

const BASE_URL = 'http://localhost:3000/';
const { MongoClient } = require('mongodb');

function dataTestid(name) {
  return `[data-testid=${name}]`;
}

function wait(time) {
  const start = Date.now();
  while (true) {
    if (Date.now() - start >= time) {
      return true;
    }
  }
}

describe('Permita que usuários troquem mensagens particulares', () => {
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
    await page.setCacheEnabled(false);
    await page.goto(BASE_URL);
  });

  afterEach(async () => {
    await browser.close();
    await db.collection('messages').deleteMany({});
    await connection.close();
  });

  it('Será validado que existe o botão para entrar em um chat privado e para voltar ao chat principal.', async () => {
    const page2 = await browser.newPage();
    await page.goto(BASE_URL);
    await page.waitForTimeout(1000);

    await page2.goto(BASE_URL);
    await page.waitForSelector(dataTestid('private'));

    const privateButton = await page.$(dataTestid('private'));
    const publicButton = await page.$(dataTestid('public'));
    expect(privateButton).not.toBeNull();
    expect(publicButton).not.toBeNull();
  });

  it('Será validado que é possível enviar uma mensagem privada para um usuário.', async () => {
    const chatMessage = "Vamos com tudo";
    await page.goto(BASE_URL);

    const page2 = await browser.newPage();
    await page2.goto(BASE_URL);

    await page.bringToFront();
    await page.waitForSelector(dataTestid('private'));
    let privButtons = await page.$$(dataTestid('private'));
    wait(10000);
    await _.last(privButtons).click();

    await page.waitForSelector(dataTestid('message-box'));
    const messageBox = await page.$(dataTestid('message-box'));
    await messageBox.type(chatMessage);

    await page.waitForSelector(dataTestid('send-button'));
    const sendButton = await page.$(dataTestid('send-button'));
    await sendButton.click();

    await page2.bringToFront();
   
    await page.waitForSelector(dataTestid('private'));
    let secondPrivButton = await page2.$$(dataTestid('private'));
    wait(10000);
    await _.last(secondPrivButton).click();

    await page.waitForSelector(dataTestid('message'));
    const secondPageMessages = await page2.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));

    expect(secondPageMessages[0]).toMatch('Vamos com tudo');
  });

  it('Será validado que é possível transitar entre o chat particular e o chat global.', async () => {
    const privateMessage = 'eae mano como ta';
    const publicMessage = 'fala jovens';

    await page.goto(BASE_URL);

    const page2 = await browser.newPage();
    await page2.setCacheEnabled(false);
    await page2.goto(BASE_URL);

    await page.bringToFront();

    await page.waitForSelector(dataTestid('message-box'));
    let messageBox = await page.$(dataTestid('message-box'));
    await messageBox.type(publicMessage);

    await page.waitForSelector(dataTestid('send-button'));
    let sendButton = await page.$(dataTestid('send-button'));
    await sendButton.click();

    await page.waitForSelector(dataTestid('private'));
    const privButtons = await page.$$(dataTestid('private'));
    await _.last(privButtons).click();

    await page.waitForSelector(dataTestid('message-box'));
    messageBox = await page.$(dataTestid('message-box'));
    await messageBox.type(privateMessage);
    sendButton = await page.$(dataTestid('send-button'));
    await sendButton.click();
    wait(10000);

    await page2.bringToFront();
    wait(10000);
    const secondPagePublicMessages = await page2.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));
    expect(secondPagePublicMessages[0]).toMatch('fala jovens');

    await page.waitForSelector(dataTestid('private'));
    let secondPrivateButton = await page2.$$(dataTestid('private'));
    await _.last(secondPrivateButton).click();
    wait(1000);

    const secondPageMessagePrivate = await page2.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));
    expect(secondPageMessagePrivate[0]).toMatch('eae mano como ta');
  });
});
