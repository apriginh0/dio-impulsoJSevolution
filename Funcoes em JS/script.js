let eduardo = [5, 9, 7];
let maria = [6, 6, 8];
let bruno = [3, 10, 7];
let joao = [10, 9, 8];
let sophia = [5, 6, 10];
const ALUNOS = [eduardo, maria, bruno, joao, sophia];
function acimaDaMedia(alunos, mf = 7){
   let i;
   let aprovados = [];

   for(i = 0; i < alunos.length; i++){
      if(media.apply(0, alunos[i]) >= mf){
         aprovados.push(alunos[i]);
      }
   }
   console.log(aprovados);
}
function media(a, b, c){
   return (a + b + c)/3;
}

acimaDaMedia(ALUNOS);