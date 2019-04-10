
var express = require('express');

var app = express();
app.use(express.static('../client'))

app.get('/',async function(req, res){
  res.redirect('/index.html')
})
console.log({
  firstName:'aaa',
  lastName:'bb44b',
})
app.listen(4000);
console.log('Running a GraphQL API server at loca4lhost:4000/graphql');