/* Factor primo mas grande

Enunciado: Los factores primos de 13195 son 5, 7, 13 y 29. 
¿Cuál es el factor primo más grande del número 600851475143?

*/

const esPrimo = numero => {
    if (numero == 2 || numero == 3) return true;
    if (numero % 2 == 0) return false;

    for (let n=3; n<=Math.sqrt(numero); n+=2) {
        if (numero % n == 0) {
            return false;
        }
    }
    return true;
}

const mayorFactorPrimo = numero => {
    let factorPrimo;
    for (p = 2; p <= numero; p++) {
        if (esPrimo(p)) {
            if (numero % p == 0) {
                numero = numero / p;
                factorPrimo = p
            }
        }
    }
    return factorPrimo;
}

console.log('Solución: ' + mayorFactorPrimo(600851475143));


// test
const assert = require('chai').assert;

describe('esPrimo(n) comprueba si n es primo', () => {
    it('2 es primo', () => {
        assert.isTrue(esPrimo(2));
    });
    it('5 es primo', () => {
        assert.isTrue(esPrimo(5));
    });
    it('17 es primo', () => {
        assert.isTrue(esPrimo(17));
    });
    it('73 es primo', () => {
        assert.isTrue(esPrimo(73));
    });
    it('15 no es primo', () => {
        assert.isFalse(esPrimo(15));
    });
});

describe('Mayor factor primo', () => {
    it('mayorFactorPrimo(18) = 3', () => {
        assert.equal(3, mayorFactorPrimo(18));
    });
    it('mayorFactorPrimo(51) = 17', () => {
        assert.equal(17, mayorFactorPrimo(51));
    });
    it('mayorFactorPrimo(13195) = 29', () => {
        assert.equal(29, mayorFactorPrimo(13195));
    });
});
