const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('./config/db.config');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', require('./routes/upload.routes'));
app.use(express.static('out'));

app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;
