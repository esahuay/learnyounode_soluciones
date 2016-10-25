var fs = require('fs')
var path = require('path')

module.exports = function (ruta, ext, callback){
			var contents = fs.readdir(ruta, ext, function(err, contents) {
	    	if (err){
	    		return callback(err,null);
	    	}
	    	else{
		    	var listado = contents.toString().split(',');
		    	var extension = "." + ext;
		    	var datos = []
		    	var j = 0;
		    	for (var i = 0; i < listado.length; i ++){
		    		var extact = path.extname(listado[i]);
		    		if (extact === extension){
		    			datos[j] = listado[i];
		    			j++			
			    	}
		    	}
		    	return callback(null, datos)    		
	    	}
	    })
}