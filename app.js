let numeroIntentos = 1;
let listaNumerosSorteados = [];
let numeroSecreto = 0;
let numeroMaximo = 10;

parametrosInicio();

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
// console.log(numeroSecreto);

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Felicidades, acertaste el número secreto en ${numeroIntentos} ${
        numeroIntentos === 1 ? "intento" : "intentos"
      }!`
    );
    document.querySelector("#reiniciar").removeAttribute("disabled");
  }
  //Si el usuario no acierta
  else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    numeroIntentos++;
    limpiarCaja();
  }
  return;
}

function parametrosInicio() {
  asignarTextoElemento("h1", "¡Bienvenido al juego secreto!");
  asignarTextoElemento("p", `Elige un número del 1 al ${numeroMaximo}`);

  numeroSecreto = generarNumeroSecreto();
  numeroIntentos = 1;
  //deshabilitar boton nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function nuevoJuego() {
  //vaciar caja
  limpiarCaja();
  //cambiar texto defecto
  //generar numero nuevo
  parametrosInicio();
  //reiniciar contador de intentos
}

function limpiarCaja() {
  let valorCaja = document.querySelector("#valorUsuario");
  valorCaja.value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya has adivinado todos los números disponibles");
    document.querySelector("#valorUsuario").setAttribute("disabled", "true");
    document.querySelector("#intentar").setAttribute("disabled", "true");
  } else {
    // buscando numero en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
