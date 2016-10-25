var path = require('path')
var fs = require('fs')

module.exports = function (ruta, extension, callback){
	var contents = fs.readdir(ruta, function(err, contents) {
	    if (err) return callback(err);
	    else{
	    	var listado = contents.toString().split(',');
	    	var extact = "." + extension;
	    	var lista = []
	    	var j = 0
		    	for (var i = 0; i < listado.length; i ++){
		    	var ext = path.extname(listado[i]);
		    		if (extact === ext){
		    			lista[j] = listado[i]
		    			j++
			    	}
		    	}
		   	callback(null,lista);
	    }
	}	
)}