const express = require('express');
const http = require('http');
const path = require('path');

const app =express();

const port = process.env.PORT || 3001;
var bodyParser = require('body-parser')
app.use( bodyParser.urlencoded() ); 


app.use(express.static(__dirname + '/dist/portalassignment'));

// app.get('/*', {req,res} => res.sendFile(path.join(__dirname)));

app.get('/*',function(request,response){
    response.sendFile(path.join(__dirname));
  
  });
  app.post('/CP1',function(req,res){
        var email = req.body.email;
        var CPpswd = req.body.CPpswd;
        if (email=='a@a.com' && CPpswd == '123') {
          // do something here with a valid login
          res.sendFile(__dirname+"/src/app/customer-portal/customer-portal.component.html");
   } else { 
          // user or password doesn't match
          res.sendFile(__dirname+"/src/app/customer-portal/failed.html");
   }
   
  });

// CUSTOMER

const server = http.createServer(app);

server.listen(port, () => console.log("RUNNING"));

// sad@gmail.com