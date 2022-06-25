package br.com.dio;

import br.com.dio.model.Gato;

public class primeiroPrograma {

	public static void main(String[] args) {
		Gato gato = new Gato();
		System.out.println(gato);
		
		Livros livros = new Livros();
		System.out.println(livros);
		
		/*int a = 20;
		int b = 25;
		
		System.out.println("Hello World = " + (a+b)+ " Concatenando Kkk");*/
	}
}
class Livros{
	private String nome;
	private String npag;
}
