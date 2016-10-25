var mymodule = require('./mymodule.js')

var dir = process.argv[2]
var ext = process.argv[3]

function imprimir(error, lista){
	for (var i = 0; i < lista.length; i++){
		    console.log(lista[i])
    } 
}

mymodule(dir, ext, imprimir)