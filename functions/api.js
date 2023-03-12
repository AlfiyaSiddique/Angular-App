const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();
const cors = require("cors")

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://main--enchanting-marshmallow-109241.netlify.app');
  res.header('Access-Control-Allow-Origin', '*'),
   res.header( 'Access-Control-Allow-Headers', 'Content-Type')
  next();
});
server.use(cors())
server.use(middlewares);
server.use( router); 

server.listen(3000);
