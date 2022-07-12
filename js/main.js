//desafio 1//
let tabla = 2;
let resultado;

for (let i = 1; i <= 10; i++) {
    resultado = tabla * i;
    console.log(tabla + " x " + i + " es igual a " + resultado);
}
// Desafio 2 + Entrega Proyecto Final
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
    this.cuerdas = 6; /*asumo que todos los intrumentos tienen 6 cuerdas, hardcodeo}*/

    const bajo1 = new bajo('has comprado una guitarra', 'fodera');
    const bajo2 = new bajo('fender');


    console.log(bajo1);
    console.log(bajo2.marca);
}

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




/*
class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

let productos = [
    newProducto = (100, "Taylor", 550, "electroacustica"),
    newProducto = (101, "Fender", 600, "electrica"),
    newProducto = (102, "Gibson", 650, "electrica"),
    newProducto = (103, "Fender", 700, "electrica"),
];

let categorias = ["electroacustica", "electrica"];

let productosEnCarro = [];


let categoria = "";

while (categoria != "salir" && categoria != null) {
    let aux = categorias.join(",");
    categoria = prompt(
        'Ingrese una categoria o ingrese "salir" : \n(' + aux + ")"
    );

    if (categoria != "salir") {
        let productosFiltradoPorCategoria = productos.filter(item => item.categoria == categoria);

        let cartel = "";
        for (let i = 0; i < productosFiltradoPorCategoria.length; i++) {

            cartel +=
                "id:" +
                productosFiltradoPorCategoria[i].id +
                " precio: " +
                productosFiltradoPorCategoria[i].precio +
                " nombre: " +
                productosFiltradoPorCategoria[i].nombre +
                "\n";
        }

        alert = ("Selecione id del producto que desea comprar \n" + cartel);
    }
}



/*
//bienvenido al usuario
let nombreUsuario = prompt("Bienvenido Tu nombre es?", "Nombre");
//declarando de lista de trareas 

const GuitarrasALaVenta = ["Fender", "Gibson", "Taylor"];

const BajosALaVenta = ["Fodera", "Gibson", "Fender"];

const ambosInstrumentos = GuitarrasALaVenta.concat(BajosALaVenta);

const tiendaOnLine = []


// Menu de opciones al usuario

let InstrumentosPreferidos = prompt("Las Marcas de guitarra que tenemos son  : Fender, Gibson, Taylor ; \n Las marcas de bajo que tenemos son  : Fender, Gibson, Fodera");

// Seleccion de opciones por el ususairo

if (InstrumentosPreferidos == 1) {
    toDoList.push(GuitarrasALaVenta)
} else if (InstrumentosPreferidos == 2) { toDoList.push(BajosALaVenta) } else if (InstrumentosPreferidos == 3) {
    toDoList.push(ambosInstrumentos)
}

// Preguntarle al usuario cuantas tareas quiere agregar y le ofreceremos un prompt para que agrege segun sus gustos particular

function agregarInstrumento() {
    let cantidadIntrumenos = Number(prompt("Cuantos instrumentos deseas agregar"));
    for (let i = 0; i < cantidadTarea; i++) {
        let agregarInstrumento = prompt("Escriba aca que instrumento desea");
        toDoList.push(agregarInstrumento);

    }
}

// Invocamos la funcion que creamos para que el usuario pueda agregar tareas

agregarInstrumento();

// Aca usamos los backticks  para realizar una interpolacion de variables

let consultaFinal = prompt(`${nombreUsuario} estas son tus tus instrumentos: ${tiendaOnLine},
                          \n  Si quieres eliminar el ultimo instrumento escribe 1
                          \n  Si quieres seguir agregando otra instrumento adicional escribe 2
                          \n  Si no quieres hacer mas nada, escribe cualquier otro valor`)


if (consultaFinal == 1) {
    tiendaOnLine.pop();

} else if (consultaFinal == "") {
    agregarInstrumento();
} else {
    alert(`${nombreUsuario} estas son todos tus intrumentos eleguidos ${tiendaOnLine}`)
}

//Mostrar al usuario el resultado cuando eliminamos tareas o si no hacemos mas nada

alert(`${nombreUsuario} estas son todos tus intrumenos eleguidos ${tiendaOnLine}`)
*/