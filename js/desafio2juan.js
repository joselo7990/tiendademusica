let productos = prompt("Ingrese un producto");
let precio = parseInt(prompt("Ingrese el precio"));
let productos1 = prompt("Ingrese otro producto");
let precio1 = parseInt(prompt("Ingrese el precio"));
let resultado = precio + precio1;

alert(`el precio total es ${resultado}`);

alert(`en la consola podes ver cuanto te queda en cuotas`);
for (i = 1; i <= 12; i++) {
    console.log(
        `En ${i} cuotas de $${resultado} tu ${productos} y ${productos1} te quedarian a $${
      resultado / i
    } `
    );
}

function cuotero() {
    let cuotas = parseInt(prompt("En cuantas cuotas lo queres hacer?"));
    let resultado1 = resultado / cuotas;

    if (cuotas < 13) {
        alert(`Te quedaria en cuotas ${cuotas} de $${resultado1}`);
    } else {
        alert("solo se puede hacer en 12 cuotas");
        let cuotas1 = parseInt(prompt(`pone de vuelta las cuotas xd`));
        let resultado2 = resultado / cuotas1;
        alert(`Te quedaria en ${cuotas1} cuotas de $${resultado2}`);
    }
    let resultadofinal = resultado1 || resultado2;
    return resultadofinal;
}

const resultadofinal = cuotero();