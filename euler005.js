/**
 * Multiple mas pequeño
 *
 * 2520 es el número más pequeño que se puede dividir por
 * cada uno de los números de 1 a 10 sin ningún resto.
 *
 * ¿Cuál es el número positivo más pequeño que es
 * divisible por todos los números del 1 al 20?
 */

var factores = []
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var n = 2

while (n < 20) {
    var esFactor = false

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % n == 0) {
            numeros[i] /= n;
            esFactor = true;
        }
    }

    if (esFactor) {
        factores.push(n);
    } else {
        n++;
    }
}

var factorMinimo = 1

for (var f = 0; f < factores.length; f++) {
    factorMinimo *= factores[f];
}

console.log('Solución: ' + factorMinimo);
