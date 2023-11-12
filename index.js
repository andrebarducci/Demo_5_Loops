const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

function encontreMaiorSomaLinha(matriz){
let maiorSomaLinha = 0;
let linhaMaiorSoma = [];

for(let i = 0; i < matriz.length; i++){
let soma = 0
for(let j = 0; j < matriz[i].length; j++){
    soma = soma + matriz[i][j]

} 

if (soma > maiorSomaLinha){
    maiorSomaLinha = soma
    linhaMaiorSoma = matriz[i]


}

}
const message = `A maior é linha ${maiorSomaLinha} e a matriz é ${linhaMaiorSoma}`

return message
}


console.log(encontreMaiorSomaLinha(matriz))
