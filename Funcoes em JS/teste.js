const myObj = {
   num1: 2,
   num2: 4
};
const extra = [1, 5];
function soma(a, b){
   console.log(this.num1 + this.num2 + a + b);
}
soma.apply(myObj, extra);

const potencia = a => a**2;
console.log(potencia(3));