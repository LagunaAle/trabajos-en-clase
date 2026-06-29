// function cuadrado(number) {
//     let resultado = 0
//     resultado = number * number
//     return console.log(resultado)
// }

// function cuadrado(number){
//     return console.log(number * number)
// }

// cuadrado(5);



// function sumarPares(limite) {
//   let suma = 0;
//   for (let i = 0; i <= limite; i++) {
//     if (i % 2 === 0) {
//       suma += i;
//     }
//   }
//   return console.log(suma);
// }

// sumarPares(6);

function contarVocales(cadena) {
  let contador = 0;
  const texto = cadena.toLowerCase(); 

  for (const letra of texto) {
    switch (letra) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        contador++;
        break;
        default:
            console.log(letra + " no es vocal");
    }
  }
  return contador;
}

console.log(contarVocales("Nicole"));