# 2520 es el número más pequeño que se puede dividir por
# cada uno de los números de 1 a 10 sin ningún resto.
# ¿Cuál es el número positivo más pequeño que es
# divisible por todos los números del 1 al 20?

factores = []
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
n = 2

while n < 20:
    factor = False

    for i in range(1, 20):
        if numeros[i] % n == 0:
            numeros[i] /= n
            factor = True

    if factor:
        factores.append(n)
    else:
        n += 1


factor_minimo = 1

for f in factores:
    factor_minimo *= f

print("Respuesta: ", factor_minimo)
