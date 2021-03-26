const database = require('../model/models');
const router = require('express').Router();
const rescue = require('express-rescue');
const express = require('express');
const app = express();
const cors = require('cors');
const { join } = require('path');
const PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');
const server = require('http').createServer(app);

app.engine('html', require('ejs').renderFile);
app.set('views', join(__dirname,'../views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, 'views')));

const io = require('socket.io')(server, {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
router.get('/', rescue(async (req, res) => {
  // await database.findUserMessages(idUser).then((msgs) => {
      res.render('index.ejs', { 
        mensagens: 'Histórico de mensagens', msgs: req });
  // })
}));

module.exports = router;