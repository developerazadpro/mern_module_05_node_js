let http = require('http');
let fs   = require('fs');
const port = 3000;

let server = http.createServer( (req, res) => {
    if(req.url == '/'){
        // fs read file Synchronous process
        const data = fs.readFileSync('public/home.html');
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end();
    }else if(req.url == '/about'){
        const data = fs.readFileSync('public/about.html');
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end();
    }else if(req.url == '/contact'){
        const data = fs.readFileSync('public/contact.html');
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end();
    }else{
        let data = fs.readFileSync('public/404.html');
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end();
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
