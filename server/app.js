const express = require('express');
const cors = require('cors');
const db = require('./config/db.config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', require('./routes/upload.routes'));

app.get('/', (req, res) => {
  res.render('index');
})

module.exports = app;