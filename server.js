import express, { application } from 'express';

const server = express();
server.listen(3000, () => console.log('pognal'))



server.get('/get/', (req, res) => {
  res.send({"K":10,"Sums":[1.01,2.02],"Muls":[1,4]})
})