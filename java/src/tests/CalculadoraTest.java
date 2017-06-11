package tests;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import problemas.Calculadora;

public class CalculadoraTest {

	Calculadora calc;
	
	@Before // se ejecuta antes de cada prueba
	public void before() {
		System.out.println("before()");
		calc = new Calculadora();
	}
	
	@After // se ejecuta despúes de cada test
	public void after() {
		System.out.println("after()");
	}
	
	@Test
	public void testSuma() {
		System.out.println("testSuma()");
		assertEquals(5, calc.suma(3, 2));
	}

	@Test
	public void testResta() {
		System.out.println("testResta()");
		assertEquals(3, calc.resta(5, 2));
	}
}
