const person = {
   nome: 'Sophia',
   idade: 10,
   profissao: 'desenvolvedora'
}
person.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
   nome: 'André',
   idade: 25,
   profissao: 'pintor'
}

enum Profissao {
   Professora,
   Atriz,
   Desenvolvedora,
   JogadoraDeFutebol
}

interface Pessoa {
   nome: string,
   idade: number,
   profissao?: Profissao
}

interface Estudante extends Pessoa {
   materias: string[]
}

const vanessa: Pessoa = {
   nome: 'Vanessa',
   idade: 23,
   profissao: Profissao.Desenvolvedora
}
const maria: Pessoa = {
   nome: 'Maria',
   idade: 23,
   profissao: Profissao.Desenvolvedora
}
const jessica: Estudante = {
   nome: 'Jessica',
   idade: 28,
   profissao: Profissao.Desenvolvedora,
   materias: ['Matemática discreta', 'programação', 'introdução à filosofia']
}
const monica: Estudante = {
   nome: 'Monica',
   idade: 19,
   materias: ['historia da Física', 'Geometria Analítica']
}

function listar(lista: string[]){
   for(const item of lista){
      console.log('- ', item);
   }
}
listar(monica.materias);