let http = require('http');
let fs   = require('fs');

let server = http.createServer(function (req, res){
    if(req.url == '/'){
        // Asynchronous process
        fs.readFile('home.html', function (error, data){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end();
        })
    }
})

server.listen(3000);
console.log("Server Run Success");