/**
 * Created by ahmad on 08/10/2016.
 */

var port = process.env.PORT || 3000;
var mongoose = require('mongoose')
// var db = mongoose.connect('mongodb://admin:sa1234@ds053146.mlab.com:53146/datting');
var db = mongoose.connect('mongodb://user:admin@ds023674.mlab.com:23674/librarymongodb');

var express  = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app  = express();                               // create our app w/ express

var Model = require('./server/model');
var modelRoutes = require("./server/route")(Model);




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// pull information from HTML POST (express4)
var cookieParser = require('cookie-parser');




app.use(express.static(__dirname +'/app'));                 // set the static files location /public/img will be /img for users
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(cookieParser());
app.use('/api/model', modelRoutes);


app.listen(port);
console.log("App listening on port " + port);
