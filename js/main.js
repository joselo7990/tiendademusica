//desafio 1//
let tabla = 2;
let resultado;

for (let i = 1; i <= 10; i++) {
    resultado = tabla * i;
    console.log(tabla + " x " + i + " es igual a " + resultado);
}
// Desafio 2 
let total = 0

function agregarGuitarra() {
    const numero = prompt("Ingrese el numero del instrumento a agregar")
    switch (numero) {
        case "1":
            total = total + 500;
            break;
        case "2":
            total = total + 550;
            break;

        case "3":
            total = total + 600;
            break;

        case "4":
            total = total + 650;
            break;
        case "5":
            total = total + 700;
            break;
        case "6":
            total = total + 750;
            break;

        default:
            const buscar = confirm("Producto no encontrado. Si quieres buscar de nuevo presiona Aceptar")
            if (buscar == true) {
                agregarGuitarra()
            }
            break;

    }
}

function comprar() {

    if (total == 0) {
        alert
            ("todavia no has seleccionado producto")
    } else if (total >= 700) {
        alert("Gracias por tu compra.\n El total es $" + total + "\n Te regalamos el envio")
    } else { alert("Gracias por tu compra.\n El total es $" + (total + 50) + " envio incluido") }

}

// Ejemplos funciones y parametros //

function instrumentosCaracteristicas(marca, anio) {
    console.log("Felicitaciones has seleccionado un instrumento" + marca + "del año" + anio);

}

instrumentosCaracteristicas("Gibson", "2009");
instrumentosCaracteristicas("Fender", "2015");

// variables de un instrumento :

let nombreIntrumento = ('Gibson');
let anioInstrumento = (2009);
let maderaInstrumento = ('kaboa');

const intrumento1 = { marca: 'Gibson', anio: '2009', madera: 'kaboa', };
const intrumento2 = { marca: 'Taylor', anio: '2015', madera: 'oscura', };

console.log(intrumento1);
console.log(intrumento2);

//objeto literales
console.log(intrumento1.madera);

//objetos creadores 
function bajo(marca, madera) {
    this.marca = marca;
    this.madera = madera;
    this.cuerdas = 6; /*asumo que todos los intrumentos tienen 6 cuerdas, hardcodeo*/
}

const bajo1 = new bajo('has comprado una guitarra', 'fodera');
const bajo2 = new bajo('fender');


console.log(bajo1);
console.log(bajo2.marca);

//Desafio 3 Complementario (ARRAYS)

const productos = [
    { nombre: `Taylor`, precio: 550 },
    { nombre: `Fender`, precio: 600 },
    { nombre: `Gibson`, precio: 650 },
    { nombre: `Fender jazzbass`, precio: 700 },
];
for (const objeto of productos) {
    console.log(`Cuesta` +

        objeto.precio +
        `la guitarra` +

        objeto.nombre);
}