var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

//Http Handlers
var onDefault=function(req, res){
    res.send("<h1>Hello Bitches! This is your dad</h1>"+
              "<hr/>"+
              "<ol>"+
	    "<head>Follow the follow the following commands to with \"SHIDDAT\" to run the code successfully!"+
                    " <li>sudo apt update</li>"+
                    " <li>git clone https://github.com/RaviTambade/dbdaMarch22</li>"+
                    " <li>cd dbdaMarch22</li>"+
                    " <li>sudo apt install -y docker.io</li>"+
                    " <li>sudo docker build -t ravya .</li>"+
                    " <li>sudo docker run --name server -d -p 9000:9000 ravya:latest</li>"+
                    " <li>check and open the ip address</li>"+
                    " <li>don't forget to check the security settings</li>"+
                    " <b>hasta la vista</b>"+
             "</ol>");
};

var onAboutUs=function(req, res){
    res.send("<h1>Baap ka naam yaad rakhna</h1>");
};

app.get("/",onDefault); 
app.get("/aboutus",onAboutUs);
var server=app.listen(9000);
console.log("Server is running on port 9000");
