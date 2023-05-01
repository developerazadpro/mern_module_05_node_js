let http = require('http');
let fs   = require('fs');

let server = http.createServer(function (req, res){
    if(req.url == '/read-file'){
        // fs read file Asynchronous process
        fs.readFile('home.html', function (error, data){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end();
        })

        // fs read file Synchronous process
        /*let data = fs.readFileSync('about.html');
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end();*/
    }else if(req.url == '/write-file'){
        // fs file write Assync
        fs.writeFile('demo.txt', 'Welcome to node js async', function (error){
            if(error){
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write('File write failed')
                res.end();
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write('File write success')
                res.end();
            }
        })
        // fs file write Sync
        let error = fs.writeFileSync('demo2.txt', 'Welcome node js fs write sync method');
        if(error){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('File write failed')
            res.end();
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('File write success')
            res.end();
        }
    }else if(req.url == '/rename-file'){
        // Async
        /*fs.rename('demo.txt', 'demoNew.txt', function (error){
            if(error){
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write('File rename failed')
                res.end();
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write('File rename success')
                res.end();
            }
        })*/
        // Sync
        let error = fs.renameSync('demo2.txt', 'demo2New.txt');
        if(error){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('File rename failed')
            res.end();
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('File rename success')
            res.end();
        }

    }else if(req.url == '/delete-file'){
        // Async
        fs.unlink('demoNew.txt', function (error){
            if(error){
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write('File delete failed')
                res.end();
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write('File delete success')
                res.end();
            }
        })
        // Sync
        let error = fs.unlinkSync('demo2New.txt');
        if(error){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('File delete failed')
            res.end();
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('File delete success')
            res.end();
        }
    }else if(req.url == '/exist'){

    }
})

server.listen(3000);
console.log("Server Run Success");