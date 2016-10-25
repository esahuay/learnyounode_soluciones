// Preguntar porque 

var http = require('http')
var bl = require('bl')

var contenido = []
var cuenta = 0

function imprimir(){
  for (var j = 0; j < 3 ; j++){
    console.log(contenido[j])
  }
}

function program8(i){
  http.get(process.argv[2+i], function(res){
    console.log(process.argv[2+i])
    res.pipe(bl(function(err,data){
      contenido[i] = data.toString()
      cuenta++
      if (cuenta == 3){
        imprimir()
      }
    }))
  })
}

for(var ind = 0; ind < 3 ; ind++){
  program8(ind)
}
