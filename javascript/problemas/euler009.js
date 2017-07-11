/* Triplete especial de Pitágoras

Un triplete pitagórico es un conjunto de tres números naturales, a < b < c,
para los cuales, a^2 + b^2 = c^2

Existe exactamente un triplete pitagórico para el cual a + b + c = 1000.

Calcule a*b*c
*/

const triplete = () => {
    for (let a = 1; a <= 1000; a++) {
        for (let b = a; b <= 1000; b++) {
            let c= Math.sqrt(a*a + b*b);

            if (isInteger(c) && a+b+c === 1000) {
                console.log(a,b,c);
                return a*b*c;
            }
        }
    }
}

const isInteger = number => {
    if (number % 1 == 0)
        return true;
    return false;
}

console.log('Solución: ' + triplete());
