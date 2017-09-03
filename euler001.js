/**
 * Multiplos de 3 y 5
 *
 * Enunciado: Si enumeramos todos los números naturales por debajo de 10
 * que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos
 * múltiplos es 23. Calcula la suma de todos los múltiplos de 3 o 5
 * por debajo de 1000.
*/

var suma = sumaMultiplos(3, 999) + sumaMultiplos(5, 999) - sumaMultiplos(15, 999);
console.log('Solución: ' + suma);

function sumaMultiplos(multiplo, tope)
{
    var n = Math.floor(tope / multiplo);
    return multiplo * n * (n + 1) / 2;
}

// 3 + 6 + 9 + ... + 999 = 3*(1 + 2 + 3 + ... + 333) = 3 * 333 * (333 + 1) / 2
