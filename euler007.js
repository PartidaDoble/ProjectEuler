/**
 * Primo 10001
 *
 * Al enumerar los primeros seis números primos: 2, 3, 5, 7, 11 y 13,
 * podemos ver que el sexto primo es 13.
 *
 * ¿Cuál es el número primo 10001?
 */


var num = 2;
var i = 1;

while (i <= 10001) {
    if (esPrimo(num)) {
        var prime = num;
        i++;
    }
    num++;
}

console.log('Solución: ' + prime);

function esPrimo(valor) {
    if (valor == 2 || valor == 3) return true;
    if (valor % 2 == 0) return false;

    for (var n = 3; n <= Math.sqrt(valor); n += 2) {
        if (valor % n == 0) return false;
    }

    return true;
}
