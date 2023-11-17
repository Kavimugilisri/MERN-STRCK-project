var h1=require ('http')
h1.createServer(function(req,res){
    res.writeHead(200,{'constent-type':'text/html'})
    res.end("Welcome")
}).listen(3000);
console.log("server running..")