// query selectors
const c = document.querySelector('.c');
const sumarDividir = document.querySelector('.sumarDividir');
const porcentaje = document.querySelector('.porcentaje');
const dividir = document.querySelector('.dividir');

const siete = document.querySelector('.siete');
const ocho = document.querySelector('.ocho');
const nueve = document.querySelector('.nueve');
const multiplicar = document.querySelector('.multiplicar');

const cuatro = document.querySelector('.cuatro');
const cinco = document.querySelector('.cinco');
const seis = document.querySelector('.seis');
const menos = document.querySelector('.menos');

const uno = document.querySelector('.uno');
const dos = document.querySelector('.dos');
const tres = document.querySelector('.tres');
const sumar = document.querySelector('.sumar');

const cero = document.querySelector('.cero');
const decimal = document.querySelector('.decimal');
const igual = document.querySelector('.igual');

const inputNumeros = document.querySelector('.mostrar');

// eventos

c.addEventListener('click', borrar );
sumarDividir.addEventListener('click', operar );
porcentaje.addEventListener('click', operar );
dividir.addEventListener('click', operar );

siete.addEventListener('click', operar );
ocho.addEventListener('click', operar );
nueve.addEventListener('click', operar );
multiplicar.addEventListener('click', operar );

cuatro.addEventListener('click', operar );
cinco.addEventListener('click', operar );
seis.addEventListener('click', operar );
menos.addEventListener('click', operar );

uno.addEventListener('click', operar );
dos.addEventListener('click', operar );
tres.addEventListener('click', operar );
sumar.addEventListener('click', operar );

cero.addEventListener('click', operar );
decimal.addEventListener('click', operar );
igual.addEventListener('click', resultado );

// funciones
let operacion = '';

function operar(e) {
    const cadena = e.target.value.toString();
    operacion += cadena;
    mostrar(operacion);
}

function resultado() {
    resultado = eval(operacion);
    mostrar(resultado);
    operacion = resultado;
}

function borrar() {
    operacion = '';
    mostrar();
}

function mostrar(operacion) {
    inputNumeros.textContent = operacion;
}