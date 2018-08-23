
var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var router  = express.Router();

import { getSecret } from './secrets';
import Comment from './models/comment';

// set our port to either a predetermined port number if you have set it up, or 3001
const port = process.env.port || 5000;

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// using morgan to log requests to the console
app.use(morgan('dev'));

// mongoose.connect(getSecret('dbUri'));
mongoose.connect(getSecret('dbUri'), { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to database");
});

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

var routes = require('./routes/index');

app.use('/api', router);

app.listen(port);

// app.set('port', (process.env.PORT || 5000));

console.log('Server Started on Port: ' + port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
