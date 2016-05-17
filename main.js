

// Require module
var express = require('express') ; 
var mongodb = require('mongodb');
var bodyParser = require('body-parser');

// app
var MongoClient = require('mongodb').MongoClient;
var jsonParser = bodyParser.json(); 
var app = express();
var db;

// Initialize connection to Mongo database once
MongoClient.connect("mongodb://vuphan:123456aA@ds023052.mlab.com:23052/thosan_database", function(err, database) {
  if(err) throw err;
  db = database;
});


// Get list available news follow offset and limit
app.post('/listnews', jsonParser, function(request, response){

 	db.collection("NEW").find({}, {limit:request.body.limit, skip:request.body.page}, function(err, docs) {
		docs.toArray(function(err, data) {
			response.end(JSON.stringify(data));
        });
  	});	
});

app.listen(3000);



  
