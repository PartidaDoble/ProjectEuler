/**
 * Diferencia de suma de cuadrados.
 *
 * La suma de los cuadrados de los diez primeros números naturales es,
 * 1^2 + 2^2 + ... + 10^2 = 385
 * El cuadrado de la suma de los diez primeros números naturales es,
 * (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * Por lo tanto, la diferencia entre la suma de los cuadrados de los diez primeros
 * números naturales y el cuadrado de la suma es 3025 - 385 = 2640.
 *
 * Encuentra la diferencia entre la suma de los cuadrados de los
 * primeros cien números naturales y el cuadrado de la suma.
 */

var parcial = 0;

for (var i = 1; i <= 100; i++) {
    for (var j = i + 1; j <= 100; j++) {
        parcial += i*j;
    }
}

console.log('Solución: ' + 2 * parcial);
