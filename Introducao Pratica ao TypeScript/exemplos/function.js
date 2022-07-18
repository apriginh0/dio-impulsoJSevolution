"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('Olá, ', 'Mundo!'));
console.log(somarValores('casa', 5));
// OBSERVACAO
function somarValoresNumericos(numeros1, numeros2) {
    return numeros1 + numeros2;
}
console.log(somarValoresNumericos(1, 3));
// VOID
function printaValoresNumericos(num1, num2) {
    console.log(num1 + num2); // função do tipo void não retorna nada.
}
// CALLBACK
function somaValoresNumericosETratar(nume1, nume2, callback) {
    let resultado = nume1 + nume2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somaValoresNumericosETratar(1, 3, dividirPorEleMesmo));
