package tests;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import problemas.Euler002;

public class Euler002Test {
	
	@Test
	public void test_suma_numeros_pares_fibonaci_hasta_8() {
		assertEquals(10, Euler002.SumaParesFibonaci(8));
	}
}
