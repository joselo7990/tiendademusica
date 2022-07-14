let boton = document.getElementById('btnPrincipal');
let inputNombre = document.getElementById('input-nombre');
let inputTel = document.getElementById('input-tel');
let inputEmail = document.getElementById('input-mail');

inputNombre.addEventListener('input', () => {
    nombreIngresado = inputNombre.value;
});

inputTel.addEventListener('input', () => {
    telIngresado = inputTel.value;
});

inputEmail.addEventListener('input', () => {
    emailIngresado = inputEmail.value;
});

boton.addEventListener('click', () => {
    alert(nombreIngresado + ' ' + telIngresado + ' ' + emailIngresado);
});

/*let nombreIngresado = '';
let telIngresado = '';
let emailIngresado = '';

let boton = document.getElementById('btnPrincipal');

let inputNombre = document.getElementById('input-nombre');
let inputTel = document.getElementById('input-tel');
let inputEmail = document.getElementById('input-email');

inputNombre.addEventListener('input', () => {
    nombreIngresado = inputNombre.value;
});

inputTel.addEventListener('input', () => {
    telIngresado = inputTel.value;
});

inputEmail.addEventListener('input', () => {
    emailIngresado = inputEmail.value;
});

boton.addEventListener('click', () => {
    alert(nombreIngresado + ' ' + telIngresado + ' ' + emailIngresado);
});*/