import express, { application } from 'express';

const server = express();
server.listen(3000, () => console.log('pognal'))

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});


server.get('/get/', (req, res) => {
  res.send({"K":10,"Sums":[1.01,2.02],"Muls":[1,4]})
})

server.post('/writeAnswer/', (req, res) => {
  console.log(req.body); 
})