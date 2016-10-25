var mymodule = require('./mymodule.js')

var dir = process.argv[2]
var ext = process.argv[3]


var nos = function (err, list) {
    if (err) throw Error;
    else{
	    for (var i = 0; i < list.length; i++){
		    console.log(list[i])
	    }    	
    }
}


mymodule(dir,ext, nos);