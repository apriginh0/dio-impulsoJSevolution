console.log("Hello World!");

function soma(a: number, b: number){
   return a + b;
}
soma(1, 2)

// interface IAnimal{
//    nome: string;
//    tipo: 'terrestre' | 'aquático';
//    executarRugido(alturaEmDecibeis: number): void;
// }

// interface IFelino extends IAnimal{
//    visaoNoturna: boolean;
// }

// const animal: IAnimal = {
//    nome: 'Elefante',
//    tipo: 'terrestre'
//    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
// }
// animal.executarRugido(20)

// const felino: IFelinos = {
//    nome: 'Leão',
//    tipo: 'terrestre',
//    visaoNoturna: true
// }

interface IAnimal{
   nome: string;
   tipo: 'terrestre' | 'aquático';
   domestico: boolean;
}

interface IFelino extends IAnimal{
   visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
   porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino

const animal: IDomestico = {
   domestico: true,
   nome: 'cachorro',
   tipo: 'terrestre',
   visaoNoturna: true,
}

//

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
   const i = event.currentTarget as HTMLInputElement;
   console.log(i.value);
});

// Generic Types

function adicionaApendiceALista<T>(array: any[], valor: T) {
   return array.map(item => item + valor);
}
adicionaApendiceALista(['a', 'b', 'c'], 'a');

// Verificação de usuario ou funcionario

interface IUsuario {
   id: string,
   email: string,
}

interface IAdmin extends IUsuario{
   cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usiario: IUsuario | IAdmin){
   if('cargo' in usiario){
      // redirecione para a area de ADM
   }
   // redirecionar para a are do usuário
}

// Outra versão

interface IUsuario {
   id: string;
   email: string;
   cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usiario: IUsuario){
   if(usuario.cargo){
      // redirecionar(usuario.cargo);
   }
   // redirecionar para a area do usuario
}

//