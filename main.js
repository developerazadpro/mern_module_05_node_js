// http  module
let http = require('http');


let server = http.createServer(function (req, res){
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>This is Home Page<h1/>')
        res.end();
    }else if(req.url == '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>This is About Page<h1/>')
        res.end();
    }else if(req.url == '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>This is Contact Page<h1/>')
        res.end()
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h1>This is 404 Page<h1/>')
        res.end()
    }
});
server.listen(5050);


// URL module
let url = require('url');
let urlServer = http.createServer(function (req, res){
    let myURL = 'https://ostad.app/dashboard/my-courses/63d767e92a16fc19bb0ac893/videos?module=63e8bc42f556736093a092e6';

    let urlObj = url.parse(myURL, true);
    let hostName = urlObj.host;
    let pathName = urlObj.pathname;
    let searchName = urlObj.search;


    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>'+hostName+'<h1/>')
    res.write('<h1>'+pathName+'<h1/>')
    res.write('<h1>'+searchName+'<h1/>')
    res.end();
});


urlServer.listen(5000);
console.log("Server Run Success")