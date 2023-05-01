let http = require('http');
let fs   = require('fs');
const port = 3000;

let server = http.createServer( (req, res) => {
    if(req.url == '/'){
        // fs read file Sync
        let data = fs.readFileSync('public/home.html', 'utf-8');
        res.end(data);
    }else if(req.url == '/about'){
        let data = fs.readFileSync('public/about.html', 'utf-8');
        res.end(data);
    }else if(req.url == '/contact'){
        let data = fs.readFileSync('public/contact.html', 'utf-8');
        res.end(data);
    }else{
        let data = fs.readFileSync('public/404.html', 'utf-8');
        res.end(data);
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
