require("dotenv").config({ path: "./.env"});
const app = require('./app');
const http = require('http');

const server = http.createServer(app);
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
