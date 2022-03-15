// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.
// 1 - Dada uma matriz, transforme em um array.
const arrays = [['1', '2', '3'], [true], [4, 5, 6],].reduce(function(acumulador, arrayAtual){
    return acumulador.concat(arrayAtual)
},
// //esse [ ] vazio vai servir para fazer a primeira execução do accumulator.
// Nesse caso como ele deseja reduzir um array pra formar um novo array, o accumulator começa com um array vazio.
// O acumulador é um array vazio e o valorAtual vai ser cada passagem do array passado como parâmetro
[]
)
  console.log(arrays);
  