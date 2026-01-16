const http = require('http');

const server = http.createServer((req,res)=>{
  console.log('bir istek gönderildi');
const url = req.url;
if(url===("/index")){
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write("<h1>index sayfasina hosgeldiniz</h1>");
}
else if(url===("/hakkimda")){
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write("<h1>hakkimda sayfasina hosgeldiniz</h1>");
}
else if(url===("/iletisim")){
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write("<h1>iletisim sayfasina hosgeldiniz</h1>");
}

else {
    res.writeHead(404,{"Content-Type" : "text/html"});
    res.write("<h1>404</h1>");


}});

const port =5000;

server.listen(port,()=>{
    console.log('sunucu 5000 portunda başladı');
})