function calculadora() {
   const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - resto (%)\n 6 - potenciação (**) '));

   if (!operacao || operacao >= 7) {
      alert("Erro - operação inválida!");
      calculadora();
   } else {
      let n1 = Number(prompt('Insira o primeiro valor:'));
      let n2 = Number(prompt('Insira o segundo valor:'));
      let resultado;

      if (!n1 || !n2) {
         alert('Erro - parâmetros inválidos!');
         calculadora();
      } else {
         function soma() {
            resultado = n1 + n2;
            alert(`A soma entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao();
         }
         function subtracao() {
            resultado = n1 - n2;
            alert(`A subtração entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao();
         }
         function multiplicacao() {
            resultado = n1 * n2;
            alert(`A multiplicação entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao();
         }
         function divisao() {
            resultado = n1 / n2;
            alert(`A divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao();
         }
         function resto() {
            resultado = n1 % n2;
            alert(`O resto entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao();
         }
         function potencia() {
            resultado = n1 ** n2;
            alert(`A potenciação de ${n1} elevado por ${n2} é igual a ${resultado}`);
            novaOperacao();
         }

         function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
               calculadora();
            } else if (opcao == 2) {
               alert("Até Mais!");
            } else {
               alert("Digite uma opção válida!\n Escolha 1 ou 2.");
               novaOperacao();
            }
         }

         // if(operacao == 1){
         //    soma();
         // } else if(operacao == 2){
         //    subtracao();
         // } else if(operacao == 3){
         //    multiplicacao();
         // } else if(operacao == 4){
         //    divisao();
         // } else if(operacao == 5){
         //    resto();
         // } else if(operacao == 6){
         //    potencia();
         // }
         switch (operacao) {
            case 1:
               soma();
               break;
            case 2:
               subtracao();
               break;
            case 3:
               multiplicacao();
               break;
            case 4:
               divisao();
               break;
            case 5:
               resto();
               break;
            case 6:
               potencia();
               break;
         }
      }
   }
}

calculadora();