const express = require('express');

const {PORT} = require('./constants/server');

const rootRouter = require('./routes/todos');

const server = express();

server.use(express.json());
server.use(express.static('./public'));

server.disable('etag');

server.use('/api/v1/todos', rootRouter);

server.listen(PORT, () => {
  console.log('server is listening...')
});