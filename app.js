var app = require('express')()
  , port = 3000;

if (process.env.NODE_ENV == 'production')
  port = 80;

app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/views/index.html');
});

app.listen(3000);
