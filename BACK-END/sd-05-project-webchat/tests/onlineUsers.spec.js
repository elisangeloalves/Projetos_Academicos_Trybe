/**
 * @jest-environment node
 */
require('dotenv').config();

const cheerio = require('cheerio');
const axios = require('axios');
const faker = require('faker');
const puppeteer = require('puppeteer');
const { MongoClient } = require('mongodb');

const BASE_URL = 'http://localhost:3000/';

function dataTestid(name) {
  return `[data-testid=${name}]`;
}

describe('Informe a todos os clientes quem está online no momento', () => {
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
  });

  afterEach(async () => {
    await browser.close();
    await db.collection('messages').deleteMany({});
    await connection.close();
  });
  
  it('Será validado que quando um usuário se conecta, seu nome aparece no frontend de todos', async () => {
    const nickname = 'Joao da carrocinha'
    const secondNickname = 'Zacarias'

    await page.goto(BASE_URL);
    let nicknameBox = await page.$(dataTestid('nickname-box'));
    let nicknameSave = await page.$(dataTestid('nickname-save'));

    await page.$eval('[data-testid="nickname-box"]', el => el.value = '');
    await page.waitForTimeout(1000);
    await nicknameBox.type(nickname);
    await nicknameSave.click();
    await page.waitForTimeout(1000);
    await page.waitForSelector(dataTestid('online-user'));
    let usersOnline = await page.$$eval(dataTestid('online-user'), (nodes) => nodes.map((n) => n.innerText));

    expect(usersOnline).toContain(nickname);
    
    const newPage = await browser.newPage();

    await newPage.goto(BASE_URL);
    nicknameBox = await newPage.$(dataTestid('nickname-box'));
    nicknameSave = await newPage.$(dataTestid('nickname-save'));

    await page.$eval('[data-testid="nickname-box"]', el => el.value = '');
    await page.waitForTimeout(1000);
    await nicknameBox.type(secondNickname);
    await nicknameSave.click();
    await page.waitForTimeout(1000);
    await page.waitForSelector(dataTestid('online-user'));
    usersOnline2 = await page.$$eval(dataTestid('online-user'), (nodes) => nodes.map((n) => n.innerText));

    expect(usersOnline2).toContain(nickname);
    await newPage.close(); 
  });

  it('Será validado que qunado um usuário se desconecta, seu nome desaparece do frontend dos outros usuários.', async () => {
    const nickname = 'Joao da carrocinha'
    const secondNickname = 'Zacarias'

    await page.goto(BASE_URL);
    let nicknameBox = await page.$(dataTestid('nickname-box'));
    let nicknameSave = await page.$(dataTestid('nickname-save'));

    await page.$eval('[data-testid="nickname-box"]', el => el.value = '');
    await page.waitForTimeout(1000);
    await nicknameBox.type(nickname);
    await nicknameSave.click();
    await page.waitForTimeout(1000);
    await page.waitForSelector(dataTestid('online-user'));
    let usersOnline = await page.$$eval(dataTestid('online-user'), (nodes) => nodes.map((n) => n.innerText));

    expect(usersOnline).toContain(nickname);

    const newPage = await browser.newPage();

    await newPage.goto(BASE_URL);

    nicknameBox = await newPage.$(dataTestid('nickname-box'));
    nicknameSave = await newPage.$(dataTestid('nickname-save'));

    await page.$eval('[data-testid="nickname-box"]', el => el.value = '');
    await page.waitForTimeout(1000);
    await nicknameBox.type(secondNickname);
    await nicknameSave.click();
    await page.waitForTimeout(1000);
    await page.waitForSelector(dataTestid('online-user'));
    let usersOnline2 = await page.$$eval(dataTestid('online-user'), (nodes) => nodes.map((n) => n.innerText));

    await page.bringToFront();
    expect(usersOnline2).toContain(secondNickname);

    await newPage.bringToFront();
    await newPage.close();

    expect(usersOnline).not.toContain(secondNickname);
  });

  it('Será validado usuários online em MVC', async () => {
    const nickname = 'Joao da carrocinha';
    await page.goto(BASE_URL);
    const nicknameBox = await page.$(dataTestid('nickname-box'));
    const nicknameSave = await page.$(dataTestid('nickname-save'));

    await page.$eval('[data-testid="nickname-box"]', (el) => (el.value = ''));
    await page.waitForTimeout(1000);
    await nicknameBox.type(nickname);
    await nicknameSave.click();
    const response = await axios.get('http://localhost:3000/');
    const $ = cheerio.load(response.data);
    const onlineUserPosition = $('[data-testid="online-user"]').length - 1;
    const changedNameUser = Object.values($('[data-testid="online-user"]'))[
      onlineUserPosition
    ].children[0].data;
    expect(changedNameUser).toBe(nickname);
  });
});
