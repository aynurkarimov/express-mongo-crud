require('dotenv').config();

const express = require('express');
const connectDB = require('./config/config');

const {PORT} = require('./constants/server');
const rootRouter = require('./routes/todos');

const server = express();

server.use(express.json());
server.use(express.static('./public'));

server.disable('etag');

server.use('/api/v1/todos', rootRouter);

(async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    server.listen(PORT, () => console.log('server is listening...'));
  } catch (e) {
    console.log('couldnt connect to DB');
  }
})();
