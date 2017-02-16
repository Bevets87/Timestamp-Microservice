// requires
var express = require('express');
var moment = require('moment');
var app = express();


// middleware
app.use('/', express.static(__dirname + '/client'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

var getNatTimeStamp = function(date){

  var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  var year = date.getFullYear();
  var month = months[date.getMonth()];
  var day = date.getDate();
              return month + ' ' + day + ', ' + year;
}

var getUnixTimeStamp = function(date){
  var milliseconds = date.getTime()/1000;
     return milliseconds;
}
// routes
app.get('/:id',function(req,res){
var query = req.params.id;
var json = {};

if(Number(query)){
var date = new Date(query * 1000);
  if(moment(date).isValid()){
   json.unix = getUnixTimeStamp(date);
   json.natural = getNatTimeStamp(date);
   res.json(json);
 } else{
   json.unix = null;
   json.natural = null;
   res.json(json);
 }
}
 else{
   var date = new Date(query);
  if(moment(date).isValid()){
     json.unix = getUnixTimeStamp(date);
     json.natural = getNatTimeStamp(date);
     res.json(json);
   } else {
     json.unix = null;
     json.natural = null;
     res.json(json);
   }
 }
});

// port

app.listen(process.env.PORT || 3000);
