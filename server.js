'use strict';

require('dotenv').load();

const cors = require('cors');
const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();

app.use(cors());
app.use(express.static('./'));


// platform.fatsecret.com/rest/server.api
app.get('/server.api/*', function(req, res){
  console.log('req.params', req.params);
  console.log('req.query', req.query);

  requestProxy({
    url: 'http://platform.fatsecret.com/rest/server.api/' + req.params[0],
  })
})

app.get('*', function(req, res){
  console.log('New request: ', req.url);
  res.sendFile('index.html', {root: '.'});
});

app.listen(process.env.PORT, function(){
  console.log('server up! ', process.env.PORT);
});
