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
  // var app = express()

  // app.get('/', function (req, res) {
  //   res.send('o hai!')
  // })
  app.use(express.static('server'));

  https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(4430)
})

console.log('in server');

// const passport = require('./strategies/sql.localstrategy');
// const sessionConfig = require('./modules/session-middleware');

// Route includes
// const userRouter = require('./routes/user.router');
// const propertyRouter = require('./routes/property.router');
// const uploadRouter = require('./routes/upload.router');
// const listRouter = require('./routes/list.router')
// const choreRouter = require('./routes/chore.router')

// Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// Passport Session Configuration
// app.use(sessionConfig);

// Start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

/* Routes */
// app.use('/api/user', userRouter);
// app.use('/property', propertyRouter);
// app.use('/upload', uploadRouter);
// app.use('/list', listRouter);
// app.use('/chore', choreRouter);

// Serve static files

// const PORT = process.env.PORT || 5000;

/** Listen * */
// app.listen(PORT, () => {
//     console.log(`Listening on port: ${PORT}`);
// });
