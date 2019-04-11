
var express = require('express');
var https = require('https');
var app = express();
app.use(express.static('../client'))

app.get('/',async function(req, res){
  res.redirect('/index.html')
})
console.log({
  firstName:'aaa',
  lastName:'bb44b',
})


var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic NGI3M2NlNTMtMTNiYS00MmRhLThkZWQtZTJiMDI3ZGY0YWJl"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

var message = { 
  app_id: "a94ae9a7-a951-4056-8116-db65b1447295",
  contents: {"en": "English Message"},
  // included_segments: ["All"],
  // filters: [
  //   {"field": "ExternalUserId", "key": "level", "relation": "=", "value": "paidaxing0071"}
  // ]
  include_player_ids: ["7bcc8b68-f101-4426-839b-5678af825ee6"]
};

sendNotification(message);

app.listen(4000);
console.log('Running a GraphQL API server at loca4lhost:4000/graphql');