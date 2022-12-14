var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

//Http Handlers
var onDefault=function(req, res){
    res.send("<h1><center>Hello folks! Check this out!</center></h1>"+
              "<hr/>"+
              "<ol>"+
	    "<head background = \"Golden_Retriever.jpg\" ><b>Follow these commands with \"SHIDDAT\" to run the code successfully!</b>"+
                    " <li>sudo apt update</li>"+
                    " <li>git clone https://github.com/parag-n/publicCode</li>"+
                    " <li>cd publicCode</li>"+
                    " <li>sudo apt install -y docker.io</li>"+
                    " <li>sudo docker build -t <b style=\"color:Tomato;\">image_name</b> .</li>"+
                    " <li>sudo docker run --name <b style=\"color:Tomato;\">server_name</b> -d -p 9000:9000 <b style=\"color:Tomato;\">image_name</b>:latest</li>"+
                    " <li>check and open the ip address</li>"+
                    " <li>don't forget to check the security settings</li>"+
                    " <b>hasta la vista</b>"+
	     "</head>"+
             "</ol>"+
			 "<body>Note: names in color can be your custom name</body>");
};

var onAboutUs=function(req, res){
    res.send("<h1>LOL! What did you expect?</h1>");
};

app.get("/",onDefault); 
app.get("/aboutus",onAboutUs);
var server=app.listen(9000);
console.log("Server is running on port 9000");
