// Preguntar porque 

var http = require('http')

url = process.argv[2];

function program6 (ruta){
	http.get(ruta, function(res){
		res.on("data",function (data){
			console.log(data.toString())			
		})
	})
}

program6(url);

/*
var http = require('http')  
       
     http.get(process.argv[2], function (response) {  
       response.setEncoding('utf8')  
       response.on('data', console.log)  
       response.on('error', console.error)  
     }).on('error', console.error)  
*/