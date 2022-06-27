public class Main {
    public static void main(String[] args) {

        int i;
        //int i; Já existe em cima não pode repetir.
        int I; // Esse I pode pois é diferente do i.
        // int 1a; Não pode começar com número.
        int _1a;
        int $aq; //Até pode mas não é boa prática começar com $.

        i = 5; // Esse é o valor inicial da váriavel acima.
        I = 10; // Esse é o valor inicial da váriavel acima.
        _1a = 20; // Valor inicial da váriavel acima até pode, mas não é boa prática começar com _
         $aq = 7; // Valor inicial da váriaval acima até pode, mas começar com $ não é uma boa prática.

        final int j = 10; // Final significa que o valor será fixo (constante).
        // j = 15; Estava tentando mudar o valor de j não pode pois é uma constante.
        int asrn24678md; // Válida, mas não usual.
        // int asrn246 78md; Nome da variável não pode ter espaço.
        int asrn2$4678_md; //Válida, mas não muito usual.
        //int asrn2$46%78_md; Não pode conter carcter % , @ e outros do tipo

        asrn24678md = 100; // Inicialização da váriavel acima.
        asrn2$4678_md = 10; // Inicialização da váriavel acima.

        int quantidadeProduto = 50; // Váriavel correta começa com letra minuscula se chama anotação camelo.
        //int QuantidadeProduto; Não segue a boa prática pois começa com maiúscula.
        final int NUMERO_TENTATIVAS = 5; // Boa prática para final (constante).
        //final int numeroTentativas = 5; Não é uma boa prática de final (constante).
        int QUANTIDADE_OPCOES = 25; // Não segue boa prática mas essa irei deixar.
        //int qtdProd; Não segue boa prática pois não dá para definir o nome correto.

        System.out.println(i);
        System.out.println(I);
        System.out.println(_1a);
        System.out.println($aq);

        System.out.println(j);
        System.out.println(asrn24678md);
        System.out.println(asrn2$4678_md);

        System.out.println(quantidadeProduto);
        System.out.println(NUMERO_TENTATIVAS);
        System.out.println(QUANTIDADE_OPCOES);
    }
}
