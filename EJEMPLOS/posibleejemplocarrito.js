class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    mostrarProducto() {
        return (
            "id: " +
            this.id +
            " Precio: " +
            this.precio +
            " " +
            " Producto: " +
            this.nombre +
            "\n"
        );
    }
}

function comprar(nombre, email, tel, productosEnCarro) {
    let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);
    alert("Gracias" + nombre + " por tu compra. \n Total: $" + cant);
}

let productos = [
    new Producto(1001, 'Taylor', 550, 'Electroacustica'),
    new Producto(1002, 'Fender Stratocaster', 600, 'Electrica'),
    new Producto(1003, 'Gibson Explorer', 650, 'Electrica'),
    new Producto(1004, 'Fender Jazz Bass', 700, 'Electrica'),

];

let categorias = ["Electrica", "Electroacustica", ];

let productosEnCarro = [];

let categoria = "";

while (categoria != "salir" && categoria != null) {
    let aux = categorias.join("\n");
    categoria = prompt(
        'Ingrese un categoria para continuar con su compra o ingrese "salir": \n(' + aux + ")"
    );

    if (categoria != "salir" && categoria != null) {
        let productosFiltradoPorCategoria = productos.filter(
            (item) => item.categoria == categoria
        );

        let cartel = "";
        for (let i = 0; i < productosFiltradoPorCategoria.length; i++) {
            cartel += productosFiltradoPorCategoria[i].mostrarProducto();
        }

        let idSeleccionado = parseInt(
            prompt("Seleccione el id del producto que quiere comprar: \n\n" + cartel)
        );

        let productoParaCarro = productosFiltradoPorCategoria.find(
            (item) => item.id == idSeleccionado
        );
        if (productoParaCarro) {
            productosEnCarro.push(productoParaCarro);
        }
    }
}

if (productosEnCarro.length > 0) {
    alert('Te invitamos a Iniciar sesion o Registrarte para terminar tu compra');
    let nombre = prompt('ingrese su nombre');
    let mail = prompt('ingrese su email');
    let tel = prompt('ingrese su tel');
    comprar(nombre, mail, tel, productosEnCarro);
}