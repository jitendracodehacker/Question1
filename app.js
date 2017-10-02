var express = require ('express');
var http = require ('http');
var app = express     ();
var server = http.createServer(app);
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/',function(request,response){
  response.sendFile('./public/index.html');
});

*/
server.listen(3000);
