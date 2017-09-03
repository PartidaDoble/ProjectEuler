/**
 * Triplete especial de Pitágoras
 *
 * Un triplete pitagórico es un conjunto de tres números naturales, a < b < c,
 * para los cuales, a^2 + b^2 = c^2
 *
 * Existe exactamente un triplete pitagórico para el cual a + b + c = 1000.
 * Calcule a*b*c
 */

for (var a = 1; a <= 1000; a++) {
    for (var b = a; b <= 1000; b++) {
        var c = Math.sqrt(a*a + b*b);

        if (isInteger(c) && a+b+c === 1000) {
            console.log('a = ' + a + ' | b = ' + b + ' | c = ' + c);
            console.log('Solución: ' + a * b * c);
            break;
        }
    }
}

function isInteger(number) {
    if (number % 1 == 0) return true;
    return false;
}
