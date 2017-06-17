/* Multiplos de 3 y 5

Enunciado: Si enumeramos todos los números naturales por debajo de 10 
que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos 
múltiplos es 23. Calcula la suma de todos los múltiplos de 3 o 5 
por debajo de 1000.

*/

#include <stdio.h>

int main(void)
{
    int suma = sumaMultiplos(3, 999) + sumaMultiplos(5, 999) - sumaMultiplos(15, 999);
    printf("La suma de multiplos de 3 o 5 por debajo de 1000 es: %d", suma);

    return 0;
}

int sumaMultiplos(int multiplo, int tope)
{
    int n = tope / multiplo;
    return multiplo * n * (n + 1) / 2;
}

