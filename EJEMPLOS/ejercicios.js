/*console.log("sacar un msg por la consola");
 */

/*console.log("se inicio mi js");

//declaracion
// var let const

//const nombre = "Guille";


/*let saludo = "hola";
console.log(saludo);
saludo = "hola mundo";
console.log(saludo);*/

/*let x = 10;
let y = 15;
let cartel1 = "hola";
let cartel2 = "mundo";

console.log(x + y);
console.log(cartel1 + cartel2);

let nombre = prompt("ingrese su nombre");
let edad = prompt("ingrese su edad")

console.log(nombre);
console.log(edad);

alertjose("Bienvenido " + nombre + "tu tienes" + edad + ".");
alert("te felicito por inscribirte a este curso")*/


/*let nombre = prompt("ingrese su nombre");
let edad = prompt("ingrese su edad");

alert("Bienvindo/a " + nombre + " tu tienes " + edad + ".");
alert("Te felicito por inscribirte a este maravilloso curso");*/

/*if and else*/

/*ejercicio1*/
/*
let nombre = prompt("Homero");
let apellido = prompt("Simpson");
let edad = prompt("39");
console.log(nombre);
console.log(apellido);
console.log(edad);*/
/*ejercicio2*/
/*
const ciudad1 = "montevideo";
const ciudad2 = "tacuarembo";
const ciudad3 = "minas";
console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);*/

/*let entrada = prompt("Ingrese su nombre");
let nombre = "Bart";
if (entrada == nombre) { alert("Fui yo"); } else { alert("Yo no fui") };

let tecla = prompt("Ingrese una tecla");
if ((tecla == "Y") || (tecla == "y")) { alert("correcto"); } else { alert("incorrecto") };

let numero = prompt("Ingrese un numero");
if (numero == "1") { alert("elegiste a homero"); } else if (numero == "2") { alert("elegiste a bart"); } else if (numero == "3") {
    alert(
        "elegiste a marge"
    );
} else if (numero == "4") { alert("elegiste a raul"); } else { alert("gil"); }


let numero3 = prompt("ingrese un numero");
if ((numero3 >= 0) && (numero3 <= 1000)) { alert("presupuesto bajo"); } else if ((numero3 >= 1001) && (numero3 <= 3000)) { alert("presupuesto medio"); } else if (numero3 > 3000) { alert("presupuesto alto"); } else { alert("error"); }
*/


//es lo mismo
//i = i + 1;
// sintaxis sugar
//i++;

/*for (let i = 0; i <= 10; i++) {
    console.log("i")
}

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//Ejericio de tablas//



/*for (let i = 3; i <= 7; i++) {

    let ingresarNombre = prompt("Ingresar nombre");
    alert(" Turno  N° " + i + " Nombre: " + ingresarNombre);
}

for (let i = 0; i < 10; i++) {
    alert("indice: " + i);
}*/

/*let myAge = 32
let myRatio = 7

let myDogAge = myAge * myRatio
console.log(myDogAge)

let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints)*/


/*let numero = prompt("ingrese un numero)")
for (i = 1; i <= 10; i++)
    console.log(numero + "x" + i + "=" + numero * i)

//CLASE 4 funciones
function calcular(operador, a, b) {
    let resultado = 0;
    if (operador == 'resta') {
        resultado = a - b;
    } else if (operador == 'suma') {
        resultado = a + b;
    } else if (operador == 'division') {
        resultado = a / b;
    } else if (operador == 'multiplicacion') {
        resultado = a * b;
    }
    console.log(resultado);

    // console.log(resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision);
}

calcular('resta', 20, 10);*/

//Ejercicios clase 4 funciones

/*function entrada() {
    return prompt("INGRESAR DATO");
}

function procesamiento(valor) {
    console.log("la entrada es" + valor)
}

function salida(valor) {
    alert(valor);
}
// Ejercicio 2

function redondeo(valor) {
    return Math.round(valor);
}
for (let i = 0; i <= 5; i++) {
    let entrada = prompt("Ingresar un numero");
    alert(redondeo + (entrada));

}*/

// ejercicios Jota Code

/*function decirHola() {
    console.log("Hola mundo")
}

function decirAdios() {
    console.log("Adios mundo")
}

let saludar = false


if (saludar) {
    decirHola()
} else {
    decirAdios()
}*/



/*function sumar(numero1, numero2) {
    console.log(numero1 + numero2)
}

sumar(2, 5)
sumar(8, 9)*/

//RETURN EN FUNCIONES

/*function dameUnNombre() {
    return "Juan"
}
let nombre = dameUnNombre()
console.log("Hola" + nombre)*/

/*function sumar(numero1, numero2) {
    return (numero1 + numero2)
}
console.log(sumar(2, 4))

function sumar(numero1, numero2) {
    return (numero1 + numero2)
}
let primeraSuma = sumar(2, 4)
let segundaSuma = sumar(primeraSuma, 100)
console.log(segundaSuma)
*/

// Ejercicio si pasa algo , sino pasa 

function avisoLluvia(estaLloviendo) {
    if (estaLloviendo) {
        console.log("Esta lloviendo")
    } else { console.log("No esta lloviendo") }

}
avisoLluvia(true)

//variables del tema casa CLASE 5


//variables que tienen que ver con la persona
/*let nombrePersona = '';
let edadPersona = 30;
let piernas = 4;

function hablar(nombrePersona, direccionCasa) {
    console.log('mi nombre es ' + nombrePersona + ' y vivo en  ' + direccionCasa);
    
}
*/
function hablar(quien, donde) {
    console.log(quien);
    console.log(donde);
}
let nombrePersona = 'Guille';
let edadpersona = 30;
let piernas = 4;

const persona1 = { nombre: 'Guille', edad: 30, piernas: 4 };
const persona2 = { nombre: 'Juana', edad: 18, piernas: 4 };


console.log(persona1);
console.log(persona2);

// LO ULTIMO QUE PASO EL PROFE GUILLE //
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.piernas = 4;
}

const persona1 = new Persona('Homero', 39);

persona1.edad = 528;
persona1.nombre = 'pepa la cerdita';
console.log(persona1.nombre);

function Persona(nombre, edad) {
    //constructor
    this.nombre = nombre;
    this.edad = edad;
    this.piernas = 4;

    //funciones
    this.hablar = function() {
        console.log('hola yo soy ' + (this.nombre || 'amigo') + ' tengo ' + this.piernas + ' piernas!');
    };
    this.resetear = function() {
        this.nombre = '';
        this.edad = 0;
        this.piernas = 0;
    };
}

class Persona {
    //constructor
    constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
            this.piernas = 4;
        }
        //funciones
    hablar() {
        console.log('hola yo soy ' + (this.nombre || 'amigo') + ' tengo ' + this.piernas + ' piernas!');
    }
    resetear() {
        this.nombre = '';
        this.edad = 0;
        this.piernas = 0;
    }
}

const persona1 = new Persona('Homero', 39);
persona1.resetear();
persona1.hablar();

// CLASE 7
const myArray = [1, 2, 3, 4, 5, 6];

myArray.forEach((x) => {
    console.log('//////////////////////');
    console.log(x);
});

const edades = [1, 2, 3, 4, 5, 6];

edades.forEach((item) => {
    console.log('//////////////////////');
    console.log(item);
});

const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'backend', precio: 100 },
];

const resultado = cursos.find((item) => item.nombre === 'backend');

console.log(resultado);