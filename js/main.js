//desafio 1//
let tabla = 2;
let resultado;

for (let i = 1; i <= 10; i++) {
    resultado = tabla * i;
    console.log(tabla + " x " + i + " es igual a " + resultado);
}
//2 
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