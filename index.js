const fs = require('fs');

fs.writeFile('./texto.txt', 'Linea uno', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});

fs.readFile('./texto.txt', function (err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
    