var http = require('http')
var map = require('through2-map')
var puerto = process.argv[2]

var server = http.createServer(function(req,res){
	if(req.method == 'POST'){

		req.pipe(map(function (chunk) { 
			// chunck dentro del metodo se vuelve como cadena, lo capturado en el stream de req
			return chunk.toString().toUpperCase()
		})).pipe(res) 
		console.log(res.toString())
	}else{
		return console.log("error no envio post");
	}
})

server.listen(puerto)