var http = require('http')
var fs = require('fs')
var bl = require('bl')
var puerto = process.argv[2]
var ruta = process.argv[3]

var server = http.createServer(function (req, res){
	var archivo = fs.createReadStream(ruta)
	archivo.pipe(bl(function(err,data){
		var salida = data.toString()
		res.write(salida)
		res.end()
	}))
})

server.listen(puerto)