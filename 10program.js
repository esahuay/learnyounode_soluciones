var net = require('net')
var puerto = process.argv[2]
var date = new Date()
				
var server = net.createServer(function (socket){
				var year = date.getFullYear()
				var month = date.getMonth() + 1
				if (month < 10){month = "0" + month.toString()}
				var day = date.getDate()
				if (day < 10){day = "0" + day.toString()}
				var hora = date.getHours()
				if(hora < 10){hora = "0" + hora.toString()}
				var min = date.getMinutes()
				if(min < 10){min = "0" + min.toString()}

				var fecha = year.toString() + "-" + month.toString() + "-" + day.toString() + " "
				fecha = fecha + hora.toString() + ":" + min.toString() + "\n"
				
				socket.end(fecha)
			})

server.listen(puerto)