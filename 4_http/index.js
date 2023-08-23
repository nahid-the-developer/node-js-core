const http = require('http');
const port = 3000;
const hostname = 'nahid'

const myServer = http.createServer((req, res) =>{
    res.writeHead(202, {'Content-type':'text/html'})
    res.write("<h1>I am Nahid Hasan</h1>");
    res.end();
});

myServer.listen(port, hostname, ()=>{
    console.log(`srever is running successfully at http://${hostname}:${port}`);
})