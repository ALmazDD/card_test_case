const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const CardDataModel = require('./models/cardData');
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/creditCard', {
  useNewUrlParser: true,
});
var conn = mongoose.connection;
conn.on('connected', function () {
  console.log('database is connected successfully');
});
conn.on('disconnected', function () {
  console.log('database is disconnected successfully');
});
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;

app.post('/createCard', async (req, res) => {
  const newCard = new CardDataModel(req.body);
  const dbResponse = await newCard.save();
  res.send({
    id: dbResponse._id,
    amount: dbResponse.cardAmountC,
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
