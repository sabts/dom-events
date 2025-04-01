//# Ejercicios
//## EVENTOS
//- Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"
const elementMainTitle = document.getElementById("main-title");

const hoverinTheMainTitle = event => {
  console.log();
};
elementMainTitle.addEventListener(
  "mouseover",
  () => (elementMainTitle.textContent = "Quita de encima!!!")
);
elementMainTitle.addEventListener(
  "mouseleave",
  () => (elementMainTitle.textContent = "Soy un título")
);

//- Crea un botón con la etiqueta <button> en tu página HTML con el texto "Click me" y añadele un evento de click. Al hacer click tendrá que poner "clicked x times" donde x será el número de veces que hiciste click en él.
const elementButtons = document.getElementById("buttons");
let counter = 0;

const clickCounter = event => {
  //console.log(event);
};
elementButtons.addEventListener(
  "click",
  () => (elementButtons.textContent = 'clicked ' + counter++ + ' times')
);

//- Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control.

//- Crea un array con 5 palabras, las que tú quieras. Añade un h2 a tu HTML. Añade dos botones con el texto previous y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera al pulsar el botón next y cuando estés en la primera podrás volver a la última haciendo click al botón previous.
