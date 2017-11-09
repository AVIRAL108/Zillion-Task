var express = require('express');
var app = express();

let mongoUtil = require('./mongoUtil');
mongoUtil.connect();

let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));
app.get('/', function(req, res){
   res.render('index.html');
});
app.post('/SearchQuery', function(req, res){
  var query = mongoUtil.search();
  var newQuery = request.body.query || {};
        search.insert(newQuery, (err, doc) => {
            if(err){
              response.sendStatus(400);
             }
        response.sendStatus(201);
    });
});
app.listen(3000, function(){
   console.log("Serverr is Running on Port no 3000");
});
