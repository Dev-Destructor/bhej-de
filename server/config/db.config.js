require("dotenv").config({ path: "./env/secrets.env" });
const mongoose = require("mongoose");

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
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
