/**
 * Multiplos de 3 y 5
 *
 * Enunciado: Si enumeramos todos los números naturales por debajo de 10
 * que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos
 * múltiplos es 23. Calcula la suma de todos los múltiplos de 3 o 5
 * por debajo de 1000.
*/

var suma = 0

for (var num = 1; num < 1000; num++) {
    if (num % 3 == 0 || num % 5 == 0) {
        suma += num;
    }
}

console.log('Solución: ' + suma);
