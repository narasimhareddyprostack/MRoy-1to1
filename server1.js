/*
const http = require('http');
let server = http.createServer(function(req,res){
    res.write("<h2>Welcome to Google</h2>");
    res.end();
});
server.listen(4500);
*/

/*
const http = require('http');
let server = http.createServer();
server.listen(4500);
*/
const http = require("http");
var port = 5600;
let server = http.createServer((req,res)=>{
    res.write("Welcome to Hyd");
    res.end();
})
server.listen(port,(err)=>{
    console.log(`Server Running on Port: ${port}`)
});