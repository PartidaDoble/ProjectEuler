/**
 * Numeros palindromos
 *
 * Un número palindromo se lee lo mismo en ambos sentidos.
 * El palíndromo más grande creado con el producto
 * de dos números de 2 dígitos es 9009 = 91 × 99.
 *
 * Encuentra el palíndromo más grande creado con
 * el producto de dos números de 3 dígitos.
 */

var palindromo = 0;

for (var num1 = 999; num1 > 100; num1--) {
    for (var num2 = 999; num2 > 100; num2--) {
         if(esPalindromo(num1 * num2)) {
             if (palindromo <  num1 * num2) {
                 palindromo = num1 * num2;
             }
         }
    }
}

console.log('Solución: ' + palindromo);

function esPalindromo(numero) {
    var numStr = "" + numero;
    if (numStr == reverseString(numStr)) return true;
    return false;
}

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    return reverseArray.join("");
}
