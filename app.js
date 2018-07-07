var express=require('express')();
var app =express;
var express1=require('express');

var router = express1.Router();
var subdomain= require('express-subdomain');


 
app.use(subdomain('api', router));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// router.get('/', function(req, res) {
//     res.send('Welcome to our API!');
// });
 
// router.get('/users', function(req, res) {
//     res.json([
//         { name: "Brian" }
//     ]);
// });

var server = app.listen(3000, function () {

console.log("change hs been made")

});

// app.listen(8080,function(){
//   console.log("Port Is Listening")
// });


