<?php
/* Numeros palindromos;

Un número palindromo se lee lo mismo en ambos sentidos. 
El palíndromo más grande creado con el producto
de dos números de 2 dígitos es 9009 = 91 × 99.
Encuentra el palíndromo más grande creado con
el producto de dos números de 3 dígitos.
*/

namespace App;

class Euler004 {

    public static function esPalindromo($numero)
    {
        $numStr = (string)$numero;
        if ($numStr == strrev($numStr)) {
            return true;
        }
        return false;
    }

    public static function solucion()
    {
        $palindromo = 0;
        for ($num1 = 999; $num1 > 100; $num1--) {
            for ($num2 = 999; $num2 > 100; $num2--) {
                 if(self::esPalindromo($num1 * $num2)) {
                     if ($palindromo <  $num1 * $num2) {
                         $palindromo = $num1 * $num2;
                     }
                 }
            }   
        }
        return $palindromo;
    }
}

echo "Solucion " . Euler004::solucion();
