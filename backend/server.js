
var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var router  = express.Router();

const db_url = require('./db');

// import Comment from './models/comment';
var Comment = require('./models/comment');

var Comm = mongoose.model('Comment');


// set our port to either a predetermined port number if you have set it up, or 3001
const port = process.env.port || 8080;

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// using morgan to log requests to the console
app.use(morgan('dev'));

// mongoose.connect(getSecret('dbUri'));
mongoose.connect(db_url.dbUri, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to database");
});

//CORS protection (Cross origin request serve)
app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Origin','Origin, X-Requested-With, Content_Type,Accept,Authorization');

    if(req.method==='OPTIONS'){
        req.header('Access-Control-Allow-Origin', 'PUT,POST,PATCH,GET,DELETE');
        return res.status(200).json({});
    }
    next();
});


// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

var routes = require('./routes/routes');
routes(router);

app.use('/api', router);

app.listen(port);

app.set('port', (process.env.PORT || 5000));

console.log('Server Started on Port: ' + port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
