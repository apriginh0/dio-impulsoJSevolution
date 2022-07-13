// solução 1
function verificaPalindromo(string){
   if(!string) return "string inexistente";   // pra saber se a string vem nula, vazia ou underfined
   return string.split("").reverse().join("") === string;
}
console.log(verificaPalindromo(""));

// solução 2

function verificaPalindromo1(string){
   if(!string) return "string inexistente";

   for(let i = 0; i < string.length / 2; i++){
      if(string[i] !== string[string.length - 1 - i]){
         return false;
      }
   }
   return true;
}
console.log(verificaPalindromo1(""));

// ATIVIDADE 2

function substPares(variavel){
   if(!variavel) return -1;
   if(!variavel.length) return -1;

   for(let i = 0; i < variavel.length; i++){
      if(variavel[i] === 0) {
         console.log("Você já é zero!!")
      } else if(variavel[i] % 2 === 0) {
         console.log(`Substituindo ${variavel[i]} por 0.`)
         variavel[i] = 0;
      }
   }
   return variavel;
}
let array = [];
console.log(substPares(array));