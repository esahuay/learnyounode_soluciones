var http = require('http')
var url = require('url')
var puerto = process.argv[2]
var math = require('mathjs')

var server = http.createServer(function(req, res){
	if(req.method == 'GET'){
		var obj = url.parse(req.url,true),
			path = obj.pathname
			horacompleta = obj.query.iso
			var fecha = new Date(horacompleta)
			res.writeHead(200, { 'Content-Type': 'application/json' })
			if(path == "/api/parsetime"){
				var hora = fecha.getHours()
				var min = fecha.getMinutes()
				var sec = math.round(fecha.getSeconds())
				var arreglo = {hour: hora, minute: min, second: sec}
				res.write(JSON.stringify(arreglo))
			}else if(path == "/api/unixtime"){
				var horaunix = fecha.getTime()
				var arreglounix = {unixtime: horaunix}
				res.write(JSON.stringify(arreglounix))				
			}
		res.end()
	}
})

server.listen(puerto)