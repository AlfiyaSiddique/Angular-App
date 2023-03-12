const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../db.json'); 

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.use('/api', router); 

module.exports = server;
