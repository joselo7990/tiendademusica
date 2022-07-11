// realizar un to-do-list para ayudar al usuario a llevar una vida saludable
//to do list

//bienvenido al usuario
let nombreUsuario = prompt("Bienvenido a tu-do_list. Tu nombre es?", "Nombre");
//declarando de lista de trareas 

const mananaPoderosa = ["Hidratarse", "Meditar", "Desayunar Saludable"];

const cerrarDia = ["Leer", "Filtros de luz", "Dormir con tiempo"];

const ambasRutinas = mananaPoderosa.concat(cerrarDia);

const toDoList = []


// Menu de opciones al usuario

let rutinaPredefinida = prompt("Mañana Poderosa incluye : Hidratarse, Meditar, Desayunar saludable; \n Cerrar el día incluye : Leer, Filtro de luz, Dormir con tiempo");

// Seleccion de opciones por el ususairo

if (rutinaPredefinida == 1) {
    toDoList.push(mananaPoderosa)
} else if (rutinaPredefinida == 2) { toDoList.push(cerrarDia) } else if (rutinaPredefinida == 3) {
    toDoList.push(ambasRutinas)
}

// Preguntarle al usuario cuantas tareas quiere agregar y le ofreceremos un prompt para que agrege segun sus gustos particular

function agregarTarea() {
    let cantidadTarea = Number(prompt("Cuantas tareas quiere agregar"));
    for (let i = 0; i < cantidadTarea; i++) {
        let agregarTarea = prompt("Escriba aca su tarea");
        toDoList.push(agregarTarea);

    }
}

// Invocamos la funcion que creamos para que el usuario pueda agregar tareas

agregarTarea();

// Aca usamos los backticks  para realizar una interpolacion de variables

let consultaFinal = prompt(`${nombreUsuario} estas son tus tareas: ${toDoList},
                          \n  Si quieres eliminar la ultima tarea escribe 1
                          \n  Si quieres seguir agregando otra tarea adicional escribe 2
                          \n  Si no quieres hacer mas nada, escribe cualquier otro valor`)


if (consultaFinal == 1) {
    toDoList.pop();

} else if (consultaFinal == "") {
    agregarTarea();
} else {
    alert(`${nombreUsuario} estas son todas tus tareas elegidas ${toDolist}`)
}

//Mostrar al usuario el resultado cuando eliminamos tareas o si no hacemos mas nada

alert(`${nombreUsuario} estas son todas tus tareas elegidas ${toDolist}`)