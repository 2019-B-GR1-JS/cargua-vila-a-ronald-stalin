const fileSystem = require('fs');

console.log('1) Iniciando');
fileSystem.readFile(
    './05-callbaks.js',
    'utf8',
    callbackLeerArchivo
);

console.log('2) Finalizando');

function callbackLeerArchivo(error, datos){
    if (error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: error,
            error,
        })
    }else {
        console.log('Datos: 05', datos);
        fileSystem.readFile(
            './03-operadores.js',
            'utf8',
            callbackLeerArchivo1
        );
       
    }
    
}
function callbackLeerArchivo1(error, datos){
    if (error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: error,
            error,
        })
    }else {
        console.log('Datos: 03', datos);
        
        fileSystem.readFile(
            './objetos.js',
            'utf8',
            callbackLeerArchivo2
        );
    }
    
}
function callbackLeerArchivo2(error, datos){
    if (error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: error,
            error,
        })
    }else {
        console.log('Datos: 02', datos);
        fileSystem.readFile(
            './01-variables.js',
            'utf8',
            callbackLeerArchivo3
        );
    }
    
}
function callbackLeerArchivo3(error, datos){
    if (error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: error,
            error,
        })
    }else {
        console.log('Datos: 01', datos);
    }
    
}


//PROMESAS

fileSystem.readFile(
    './05-callbaks.js',
    'utf8',
    callbackLeerArchivo
);
