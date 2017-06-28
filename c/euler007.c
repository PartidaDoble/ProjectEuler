/* 10001 primo
*
* Al enumerar los primeros seis números primos: 2, 3, 5, 7, 11 y 13, 
* podemos ver que el sexto primo es 13.
*
* ¿Cuál es el número primo 10001?
*/

#include <stdio.h>
#include <math.h>

int main(void)
{
    int num = 2;
    int i = 1;
    int prime;

    while (i <= 10001) {
        if (isPrime(num)) {
            prime = num;
            i++;
        }
        num++;
    }

    printf("Solution: %d", prime);
}

int isPrime(int num)
{
    int r = sqrt(num);
    int i;

    if (num == 2 || num == 3) return 1;
    if (num % 2 == 0) return 0;
    
    for (i = 3; i <= r; i+=2)
        if (num % i == 0)
            return 0;

    return 1;
}

int tests(void)
{
    if (! isPrime(2)) {
        printf("TestFail: 2 is prime");
        return;
    }
    if (! isPrime(3)) {
        printf("TestFail: 3 is prime");
        return;
    }
    if (! isPrime(17)) {
        printf("TestFail: 17 is prime");
        return;
    }
    if (! isPrime(53)) {
        printf("TestFail: 53 is prime");
        return;
    }

    printf("OK Passed tests\n");
}
