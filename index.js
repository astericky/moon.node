// export DEBUG=app:startup
const debug = require('debug')('app:startup'); // https://www.npmjs.com/package/debug
const config = require('config'); // https://www.npmjs.com/package/config
const express = require('express'); // https://expressjs.com/en/4x/api.html
const http = require('http');
const helment = require('helmet'); // https://github.com/helmetjs/helmet
const morgan = require('morgan'); // https://expressjs.com/en/resources/middleware/morgan.html
const Joi = require('joi'); // https://www.npmjs.com/package/joi

// Routes for views
const main = require('./routes/main');

// Routes for coins
const coins = require('./routes/coins');
const reqLogger = require('./middleware/reqLogger');
const app = express();

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`); // returns development if NODE_ENV is not set.

// Configuation
// console.log('Application Name: ' + config.get('name'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helment());
app.use('/', main);
app.use('/api/coins', coins);

if (app.get('env') === 'development') {
  debug('Morgan enabled...');
  app.use(morgan('tiny')); // HTTP request logger middleware
  app.use(reqLogger); // Log Request Bodies
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
