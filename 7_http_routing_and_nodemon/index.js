const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    
    const loadFile = (fileLocation, statusCode) => {
        fs.readFile(fileLocation, (err, data) => {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    }

    if (req.url === '/') {
        loadFile("./htmlFile/index.html", 200);
    }
    else if (req.url === '/about') {
        loadFile("./htmlFile/about.html", 200);
    }
    else if (req.url === '/contact') {
        loadFile("./htmlFile/contact.html", 200);
    }
    else {
        loadFile("./htmlFile/error.html", 400);
    }
});

server.listen(port, hostname, () => {
    console.log(`server is running successfully http://${hostname}:${port}`);
})