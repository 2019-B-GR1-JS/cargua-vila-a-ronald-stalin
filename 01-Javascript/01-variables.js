// JSON
// var nombre = "Ronald";
// Mutable (No queremos)
let nombre = "Ronlad";
nombre = "Miguel";
nombre = 1;
// No mutables Inmutable (No cambia)
const cedula = 1722861042;
const mensaje = `
Siempre usar "const"
Si ya toca usar "let"
Nunca vamos a usar "var"
`;
// Datos primitivos
let nombres = "Ronald";
console.log(typeof nombres, 'nombres');
let numeros = 1;
console.log(typeof numeros, 'numeros');
numeros = 1.1
console.log(typeof numeros, 'numeros decila')
let casado = false;
console.log(typeof casado, 'casados');
let hijos = null;
console.log(typeof hijos, 'hijos');
let mascotas = [];
console.log(typeof  mascotas, 'mascotas');
let hermana = {};
console.log(typeof hermana, 'hermana');
//Condicion!
// Truty
//Falsy
if ("") {
    console.log("Truty");
} else {
    console.log("Falsy"); // Falsy
}


if ("a") {
    console.log("Truty"); // Truty
} else {
    console.log("Falsy");
}

if (-1) {
    console.log("Truty"); // Truty
} else {
    console.log("Falsy");
}


if (0) {
    console.log("Truty");
} else {
    console.log("Falsy"); // Falsy
}

if (1) {
    console.log("Truty"); // Truty
} else {
    console.log("Falsy");
}


if (null) {
    console.log("Truty");
} else {
    console.log("Falsy"); // Falsy
}

if ({}) {
    console.log("Truty"); // Truty
} else {
    console.log("Falsy");
}

if ([]) {
    console.log("Truty"); // Truty
} else {
    console.log("Falsy");
}

// JSON - JS
const adrian = {
    "nombre": 'Adrian',
    'apellido': "Eguez Sarzosa",
    edad: 10,
    casado: false,
    hijos: null,
    hermana: {nombre: "Carolina"},
    mascotas: [
        {
            nombre: "Cachetes",
        }
    ],
};
console.log(adrian.nombre); // Adrian
console.log(adrian.hermana); // { nombre: "Carolina" }
console.log(adrian.mascotas[0].nombre);
adrian.sueldo = 1.2;
adrian["deudas"] = 10000;
console.log(adrian);
delete adrian.hijos;
console.log(adrian);

