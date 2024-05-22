const http = require('http');
http.createServer((req,res)=>{
    res.write("hello this is pooja");
    res.end()
}).listen(3001);