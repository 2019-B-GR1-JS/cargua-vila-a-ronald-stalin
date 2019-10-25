function calculo(numUno,numDos,funtionCalculo){
    const total= numUno + numDos;
    return funtionCalculo(numUno,numDos, total);
}
const numeroUno =3;
const numeroDos =5;
const suma = (numUno,numDos, total)=>{
    return total
};
console.log(suma);//Definición de la FUNCTION
console.log(suma( //Ejecucio de la FUNTION
    1,
    2,
    3)
);

const resultadoCalculo = calculo(numeroUno,numeroDos,
    (numUno,numDos,total)=>{
        return total/2;
    });
console.log(resultadoCalculo);


function forEachLocal(arreglo, funcion){
    for(let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++){
        funcion(arreglo[indiceInicial],indiceInicial,arreglo);        
    }
}
/* forEachLocal([1,2,3,4,5],  (valorActual, indiceActual, arreglo) =>{
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arreglo', arreglo);
    }); */

function mapLocal(arreglo, funcion){
    const arregloNew=[]
    for(let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++){
        arregloNew.push(funcion(arreglo[indiceInicial],indiceInicial,arreglo));   
    }
    return arregloNew
}

const returna = mapLocal([7,8], (valorActual, indiceActual, arreglo)=>{return valorActual-5});
console.log(returna)

function filterLocal(arreglo, funcion){
    const arregloNew=[]
    for(let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++){
        if(funcion(arreglo[indiceInicial],indiceInicial,arreglo)){
            arregloNew.push(arreglo[indiceInicial]);  
        }
    }
    return arregloNew
}
const returnaF = filterLocal([7,8,3,4], (valorActual, indiceActual, arreglo)=>{return valorActual>5});
console.log(returnaF)

function reduceLocal(arreglo, funcion,valorInicial){
    let result = valorInicial;
    for(let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++){
        result = result + funcion(arreglo[indiceInicial],indiceInicial,arreglo);
    }
        return result
}
const returnaR = reduceLocal([7,8,3,4], (valorActual, indiceActual, arreglo)=>{return valorActual},5);
console.log(returnaR)

function everyLocal(arreglo, funcion){
    let arregloNew = false;
    for(let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++){
        if(funcion(arreglo[indiceInicial],indiceInicial,arreglo)){
            arregloNew = true  
        }else{
            arregloNew = false 
            break;
        } 
    }
    return arregloNew
}
const returnaE = everyLocal([6,7,8,9], (valorActual, indiceActual, arreglo)=>{return valorActual>5});
console.log(returnaE)
function someLocal(arreglo, funcion){
    let arregloNew = false;
    for(let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++){
        if(funcion(arreglo[indiceInicial],indiceInicial,arreglo)){
            arregloNew = true  
            break;
        }else{
            arregloNew = false 
        } 
    }
    return arregloNew
}
const returnaS = someLocal([3,2,1,4], (valorActual, indiceActual, arreglo)=>{return valorActual>5});
console.log(returnaS)