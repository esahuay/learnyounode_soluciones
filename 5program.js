var fs = require('fs')
var path = require('path')

    var contents = fs.readdir(process.argv[2], process.argv[3], function(Error, contents) {
    	if (Error)throw Error;
    	var listado = contents.toString().split(',');
    	var extencion = "." + process.argv[3];
    	for (var i = 0; i < listado.length; i ++){
    		var ext = path.extname(listado[i]);
    		if (ext == extencion){
    			console.log(listado[i]);    			
	    	}
    	}
    });
       
    // note you can avoid the .toString() by passing 'utf8' as the  
    // second argument to readFileSync, then you'll get a String!  
    //  
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
    /*
Utilizando forEach aunque es peor el rendimiento de un forEach que el de un for.
        var listado = contents.toString().split(',');
    	var extencion = "." + process.argv[3];
        listado.forEach(function (listado){
		var ext = path.extname(listado);
    		if (ext == extencion){
    			console.log(listado);    			
	   		}
    	})
*/