// Preguntar porque 

var http = require('http')
var bl = require('bl')

url1 = process.argv[2]
url2 = process.argv[3]
url3 = process.argv[4]

function program6 (ruta1,ruta2,ruta3){
	http.get(ruta1, function(res){
		res.pipe(bl(function(err,data1){
				var cadena = data1.toString()
				console.log(cadena)
		}))
	})
	http.get(ruta2, function (res){
			res.pipe(bl(function(err,data2){
				var cadena = data2.toString()
				console.log(cadena)
		}))
	})
	http.get(ruta3, function (res){
			res.pipe(bl(function(err,data3){
				var cadena = data3.toString()
				console.log(cadena)
		}))
	})
}

program6(url1,url2,url3);

/*
var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
       
     function printResults () {  
       for (var i = 0; i < 3; i++) {  
         console.log(results[i])  
       }  
     }  
       
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err) {  
             return console.error(err)  
           }  
       
           results[index] = data.toString()  
           count++  
       
           if (count === 3) {  
             printResults()  
           }  
         }))  
       })  
     }  

*/