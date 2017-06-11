/* Multiplos de 3 y 5

Enunciado: Si enumeramos todos los números naturales por debajo de 10 
que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos 
múltiplos es 23. Calcula la suma de todos los múltiplos de 3 o 5 
por debajo de 1000.

*/

/*
    multiplo = new MultiploTresCinco();
    console.log(multiplo.sumaDebajo(100));

*/

const suma = (a, b) => {
    return a + b;
}


// test
var assert = require('chai').assert;

describe('Prueba de la funcionalidad x', function () {
    it('prueba de la suma', function () {
        assert.equal(5, suma(3, 2));
    });
    it('comparación de objetos', function () {
        var menu = ['green', 'chai', 'oolong'];
        assert.isArray(menu, 'what kind of tea do we want?');
    });
   /* it('stric iquals', function () {
        assert.deepEqual({ tea: 'green' }, { tea: 'green' });
    });*/
});