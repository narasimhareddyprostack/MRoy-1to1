const http = require('http');
const host_Name = '127.0.0.1'
const port = 3000;

let server = http.createServer((request,response) =>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello - Node Server is running Successfully')
});

server.listen(port,host_Name, ()=>{
    console.log(`server running at http://${host_Name}:${port}`)
})