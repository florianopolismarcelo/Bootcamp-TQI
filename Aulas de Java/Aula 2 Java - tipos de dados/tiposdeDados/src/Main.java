public class Main {
    public static void main(String[] args) {
        byte b1 = 10; //Correto
        byte b2 = 20; //Correto

        short s1 = 20000;
        //short s2 = 40000; Está passado o tamanho que pode suportar

        //int i1 = -10000000000; Está muito abaixo do maior valor negativo que o inteiro pode suportar.
        int i2 = 28500;

        long l1 = 1000000000000000000L; // Obrigatorio colocar a letra L no final para dizer que é long
        long l2 = 2004005000500055000L;

        // OBS: byte,short e long representam valores inteiros diferença está na capacidade de armazenamento.

        //float f1 = 4.5; Este valor não cabe dentro do float pois ele é um dooble.
        float f2 = 10.68f; //Tem que colocar o f no final.

        double d1 = 85.69; // Quando não coloca o d no final ele ja diz que é doble
        double d2 = 99.84d;

        char c1 = 'W';
        //char c2 = 'Tw'; char é apenas 1 caracter está dando erro pois tem 2 caracteres.
        char c3 = '\u0057'; // Esse código não está dando erro pois é um código unicode de um determinado caracter
        // Esse codigo é o caracter W.

        String st1 = "Fulano";
        String st2 = "Cicrano";
        String st3 = "ag dgb se se ele KNBJBJBB ESD@##$% 89754";

        //String at1 = "27/06/2022"; Não é boa pratica tem uma outra forma de fazer isso.

        boolean bo1 = true;
        boolean bo2 = false;

        System.out.println(b1);
        System.out.println(b2);
        System.out.println(s1);
        System.out.println(i2);
        System.out.println(b1);
        System.out.println(l1);
        System.out.println(l2);
        System.out.println(f2);
        System.out.println(d1);
        System.out.println(d2);
        System.out.println(c1);
        System.out.println(c3);
        System.out.println(st1);
        System.out.println(st2);
        System.out.println(st3);
        System.out.println(bo1);
        System.out.println(bo2);
    }
}
