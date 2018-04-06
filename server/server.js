// require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var https = require('https')
var pem = require('pem')

pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
  if (err) {
    throw err
  }

  app.use(express.static('server/public'));

  https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(4430)
  console.log('listening on port 4430');
})

console.log('in server');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const fbRouter = require('./routes/fb.router');
app.use('/fb', fbRouter);
