// =================================================================
// get the packages we need ========================================
// =================================================================
var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var cors 		= require('cors')
var config = require('./config'); // get our config file

var staticData = require('./app/routes/staticData')
var events = require('./app/routes/events')
// =================================================================
// configuration ===================================================
// =================================================================
var port = process.env.PORT || 8082; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// use morgan to log requests to the console
app.use(morgan('dev'));
app.use(cors());

// =================================================================
// routes ==========================================================
// =================================================================
app.use('/staticData',staticData)
app.use('/events', events)

// =================================================================
// start the server ================================================
// =================================================================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
