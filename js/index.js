let nombre = prompt("Por favor ingresa tu nombre");
alert(
  `Hola ${nombre}, Por medio de la siguiente encuesta te diremos cuál es el producto que mejor se te acomoda!`
);
let tipoPiel = prompt(
  `${nombre}, ¿Qué tipo de piel tienes: seca, mixta o grasa?`
);
function Piel(){
while (tipoPiel != "seca" && tipoPiel != "mixta" && tipoPiel != "grasa") {
 
  tipoPiel = prompt("¡Vuelvelo a intentar!");
}
switch (tipoPiel) {
  case "seca":
    alert(
      `Si tu piel es seca, te recomendamos el Face Oil de la marca Skinfresh, el cual te ayudará a mejorar la textura de tu piel y evitar los signos de la edad`
    );
    break;
  case "mixta":
    alert(
      `Si tu piel es mixta, te recomendamos el Face keeping fresh de la marca Skinfresh, el cual te ayudará a mantener la humectación natural de la piel`
    );
    break;
  case "grasa":
    alert(
      `Si tu piel es grasa, te recomendamos el Face Dry spray de la marca Skinfresh, el cual te ayudará a conservar la lozanía de tu piel y controlar el exceso de grasa`
    );
    break;
  default:
    alert(`Lo sentimos ${nombre}, debes ingresar una de las opciones que te dimos`);
}
}
Piel()