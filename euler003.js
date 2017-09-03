/**
 * Factor primo mas grande
 *
 * Enunciado: Los factores primos de 13195 son 5, 7, 13 y 29.
 * ¿Cuál es el factor primo más grande del número 600851475143?
 */

var numero = 600851475143;
var factorPrimo;

for (var p = 2; p <= numero; p++) {
    if (esPrimo(p)) {
        if (numero % p == 0) {
            numero /= p;
            factorPrimo = p;
        }
    }
}

console.log(factorPrimo);

function esPrimo(valor) {
    if (valor == 2 || valor == 3) return true;
    if (valor % 2 == 0) return false;

    for (var n = 3; n <= Math.sqrt(valor); n += 2) {
        if (valor % n == 0) return false;
    }

    return true;
}
