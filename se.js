http=require("http");
fs=require("fs");

http.createServer(function(rer,res)
{
fs.readFile("index.html",function(err,data)
{
    if(err)
    {
        res.writeHead(404);
        res.write("Not Found");
        res.end();
    }
    else 
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    }
});
}).listen(4555);