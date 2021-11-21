import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const server = app.listen(3000, () => console.log('pognal'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/get/', (req, res) => {
  res.send({"K":10,"Sums":[1.01,2.02],"Muls":[1,4]})
})

app.get('/ping', (req, res) => {
  res.sendStatus(200)
})

app.get('/stop', (req, res) => {
  console.log('Минус сервер');
  server.close()
})

app.post('/write', (req, res) => {
  console.log(req.body);

  res.send(`${req.body}`) 
})