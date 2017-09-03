/**
 * Suma de primos.
 *
 * La suma de los números primos por debajo de 10 es 2 + 3 + 5 + 7 = 17.
 * Encuentra la suma de todos los primos por debajo de dos millones.
 */

var sumaPrimos = 0;

for (n = 2; n < 2000000; n++) {
    if (esPrimo(n)) {
        sumaPrimos += n;
    }
}

console.log('Solución: ' + sumaPrimos);

function esPrimo(valor) {
    if (valor == 2 || valor == 3) return true;
    if (valor % 2 == 0) return false;

    for (var n = 3; n <= Math.sqrt(valor); n += 2) {
        if (valor % n == 0) return false;
    }

    return true;
}
