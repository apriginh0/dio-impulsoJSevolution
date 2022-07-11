// Tipos primitivos

// Boolean
var vDuF = false;
console.log(vDuF);
console.log(typeof(vDuF));
console.log("");

// Number
var anyNumber = 2;
console.log(anyNumber);
console.log(typeof(anyNumber));
console.log("");

// String
var myName = 'Diego';
console.log(myName);
console.log(typeof(myName));
console.log("");
console.log("");

let array = ['string', 1, true, false, ['array1'], ['array2']];
// forEach
array.forEach(function(item, index){console.log(item, index)});
console.log("");

// push
array.push('novo item');
console.log(array);
console.log("");

// pop
array.pop();
console.log(array);
console.log("");

// unshift
array.unshift('novo item no inicio');
console.log(array);
console.log("");

// shift
array.shift();
console.log(array);
console.log("");

// index.Of
console.log(array.indexOf(true));
console.log("");

//slice
let novoArray = array.slice(0, 4);
console.log(novoArray);
console.log("");

// splice
array.splice(0, 3);
console.log(array);
console.log("");

// Object
let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.objectInterno);
console.log("");
console.log("");
console.log("");

// Desestruturação
// var string = object.string;
// var number = object.number;
// var boolean = object.boolean;
// var anotherArray = object.array;
// var objectInterno = object.objectInterno;
// console.log(string);
// console.log("");
// console.log(number);
// console.log("");
// console.log(boolean);
// console.log("");
// console.log(anotherArray);
// console.log("");
// console.log(objectInterno);
// console.log("");
// console.log("");
var { string, boolean, objectInterno} = object;
console.log(string);
console.log("");
console.log(boolean);
console.log("");
console.log(objectInterno);
console.log("");
console.log(string, boolean, objectInterno);


