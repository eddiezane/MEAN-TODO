var app = require('express')();

app.get('/', function(req, res){
  res.sendfile(__dirname + '/views/index.html');
});

app.listen(3000);
