function recebe(a, b){
   const divid = a / b;
   const soma = a + b;
   const divisao = divid === 1 ? "são" : "não são";
   const vinte = soma > 20 ? "maior" : "menor";
   const dez = soma > 10 ? "maior" : "menor";
   console.log(`Os números ${a} e ${b} ${divisao} iguais. Sua soma é ${soma}, que é ${dez} que 10 e ${vinte} que 20.`);
}
recebe(4, 6);