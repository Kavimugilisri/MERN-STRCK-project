var h1=require ('http')
h1.createServer (function(req,res){
    res.writeHead (200,{'content-Type':"text/html"});
    res.end("Welcome");
}).listen(3000);
console.log("Server running")