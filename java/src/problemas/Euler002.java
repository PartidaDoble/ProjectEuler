/* Numeros fibonaci

Enunciado: Cada nuevo termino en la secuencia de Fibonacci se genera sumando 
los dos terminos anteriores. Comenzando con 1 y 2, los primeros 10 terminos
seran: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... 
Al considerar los terminos en la secuencia de Fibonacci cuyos valores no 
exceden los cuatro  millones, encuentre la suma de los terminos pares.
*/

package problemas;

public class Euler002 {

	public static int SumaParesFibonaci(int limite) {
		int a = 1;
		int b = 2;
		int suma = 0;
		
		while (b <= limite) {
			if (b % 2 == 0) {
				suma += b;
			}
			int c = a + b;
			a = b;
			b = c;
		}
		return suma;
	}
	
	public static void main(String[] args) {
		int suma = Euler002.SumaParesFibonaci(4000000);
		System.out.println("La suma de los numeros pares es: " + suma);
	}
}
