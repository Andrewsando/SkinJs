let numero1, numero2;
do {
  numero1 = prompt("Ingrese un número para sumar").toUpperCase();
  console.log(numero1)
  if (numero1 !== "ESC") {
    numero1 = parseFloat(numero1);
    alert("Hola, el número ingresado es " + numero1);
    numero2 = prompt("Ingrese un número para sumar").toUpperCase();
    
    if (numero2 !== "ESC") {
      numero2 = parseFloat(numero2);
      alert("Hola, el número ingresado es " + numero2);
      let resultado = numero1 + numero2;
      alert("El resultado es " + resultado);
    }
  }
} while (numero1 !== "ESC" || numero2 !== "ESC");
