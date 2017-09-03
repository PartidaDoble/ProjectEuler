/**
 * Numeros fibonaci
 *
 * Enunciado: Cada nuevo termino en la secuencia de Fibonacci se genera sumando
 * los dos terminos anteriores. Comenzando con 1 y 2, los primeros 10 terminos
 * seran: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * Al considerar los terminos en la secuencia de Fibonacci cuyos valores no
 * exceden los cuatro  millones, encuentre la suma de los terminos pares.
 */

var a = 1;
var b = 2;
var suma = 0;

while (b <= 4000000) {
    if (b % 2 == 0) suma += b;
    var c = a + b;
    a = b;
    b = c;
}

console.log(suma);
