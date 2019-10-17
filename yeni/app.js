
var http=require('http');
var fs=require('fs');
var yonlendirici =new Object();

var homeController = function(req,res){

    fs.readFile('index.html',function(err,data){

        res.write(data); 
        res.end('msj bıttı');
        
        });
}

var loginController = function (req,res){

    fs.readFile('login.html',function(err,data){

        res.write(data); 
        res.write('deneme');
        res.end('msj bıttı');
    });

}
yonlendirici['/']=homeController;
yonlendirici['/login']=loginController;
var server =http.createServer(function(req,res){

if(reg.url== '/'){

  homeController(req,res);

}



if (req.url =='/login'){ 
   loginController(req,res);
}

console.log(reg.url); 
server.listen(8000);
});