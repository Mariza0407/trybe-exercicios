// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

// Dica: use parâmetro rest .
// escreva sum abaixo
//VOU USAR O REST PORQUE NÃO SEI QUANTOS PARAMETROS MEU ARRAY VAI RECEBER.
//NESTA CONST A VARIAVEL "SUM" RECEBE O ARRAY 'NUMBER'
//CRIO UMA FUNÇÃO NUMBER.REDUCE E PASSO COMO PARAMETRO 'acumulator, valorAtual'
//E FALO PARA ELA SOMAR OS VALORES QUE QUERO.
//QUANDO USO (...NUMBER) significa que a sum pode ter vários parametros.
const sum = (...number) => number.reduce((acumulator, valorAtual) => (acumulator + valorAtual), 0);
//AQUI PEÇO PARA IMPRIMIR SUM COM OS PARAMETROS QUE QUERO
console.log(sum(1,2,3));