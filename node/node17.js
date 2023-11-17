var h1=require('http')
h1.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.end("WELCOME");
}).listen(5000);
console.log("sever running...")