// Preguntar porque 

var http = require('http')
var bl = require('bl')

url = process.argv[2];

function program6 (ruta){
	http.get(ruta, function(res){
		var i = 0;
		res.pipe(bl(function(err,data){
				var cadena = data.toString()
				console.log(cadena.length)
				console.log(cadena)
		}))
		
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