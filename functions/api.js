const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
server.use(middlewares);
server.use( router); 

server.use(router); 

server.listen(3000, ()=>{
    console.log("running")
})
