const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for
//for of
//for in
//while
//switch -> PYTHON :(
for (const i in arreglo) { // Indices
    console.log('I', i)
}
for (const i of arreglo) { // Valores
    console.log('i', i)
}

const respuestaForEach = arreglo.forEach(
    function (valorActual, indiceActual, arreglo) {
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arreglo', arreglo);
    }
);


console.log('respuestaForEach', respuestaForEach);
const respuestaMap = arreglo.map( // transaformar o mutar arreglo
    function (valorActual, indiceActual, arreglo) {
        return valorActual + 5;
    }//devolver un elemento
);//Devuelve un arreglo
const respuestaMap2= arreglo.map(r=>r+5);
console.log('respuestaMap', respuestaMap);
console.log('respuestaMap2', respuestaMap2);
const respuestaFilter = arreglo.filter( // transaformar o mutar arreglo
    function (valorActual, indiceActual, arreglo) {
        return valorActual > 7;
    }//devolver -> expresion -> Truty o Falsy
);//Nuevo arreglo -> Filtradp
const respuesraFilter2 = arreglo.filter(r=>r>7);
console.log('respuesraFilter', respuesraFilter2);
// AND -OR
//OR -> SOME
const respuestaSome = arreglo.some( // transaformar o mutar arreglo
    function (valorActual, indiceActual, arreglo) {
        return valorActual > 9 && valorActual < 11;
    }//Expresion
);//Devuelve -> Booleano
console.log('respuestaSome', respuestaSome);
//AND -> EVERY
const respuestaEvery = arreglo.every( // transaformar o mutar arreglo
    function (valorActual, indiceActual, arreglo) {
        return valorActual > 1 ;
    }//Expresion
);//Devuelve -> Booleano
console.log('respuestaEvery', respuestaEvery);
