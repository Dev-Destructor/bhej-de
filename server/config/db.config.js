require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

const { DB_URL } = process.env;

mongoose.connect(`${DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to Database');
});

db.on('error', (err) => {
    console.log(err);
});

module.exports = db;
