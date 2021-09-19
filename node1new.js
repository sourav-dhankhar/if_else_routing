const http = require('http');
const fs=require("fs");
const hostname = '127.0.0.1';
const port = 5000;

const home=fs.readFileSync("home.html");
const contact=fs.readFileSync("contact.html");
const details=fs.readFileSync("details.html");
const server = http.createServer((req, res) => {
    let url=req.url;
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
     if(url=="/")
    {
        res.end(home);
    }
    else if(url=="/contact")
    {
        res.end(contact);
    }
    else if(url=="/details")
    {
        res.end(details);
    }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});