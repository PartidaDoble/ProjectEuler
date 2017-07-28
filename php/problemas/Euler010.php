<?php
/**
 * La suma de los números primos por debajo de 10 es 2 + 3 + 5 + 7 = 17.
 * Encuentra la suma de todos los primos por debajo de dos millones.
 */

class Problem10
{
    private function isPrime($number)
    {
        if ($number == 2 || $number == 3) return true;
        if ($number % 2 == 0) return false;

        for ($n = 3; $n<=sqrt($number); $n+=2) {
            if ($number % $n == 0) {
                return false;
            }
        }
        return true;
    }

    public static function solution()
    {
        $sum = 0;
        for ($n = 2; $n < 2000000; $n++) {
            if (self::isPrime($n)) {
                $sum = $sum + $n;
            }
        }

        return $sum;
    }
}

echo Problem10::solution();
