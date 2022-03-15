// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acumulador, valorReal) =>
    //pego o acumulador e somo os valores reais, usar split para remover os espaços em branco.
    //aplico reduce no acumulator e current..
    acumulador + valorReal.split('').reduce((acumulator, current) => {
        //faço um if para retornar as letras "a ou A" começando pela posição 0 do array.
       if (current === 'a' || current === 'A') return acumulator + 1;
       return acumulator;
    }, 0), 0);
  }
  console.log(containsA(names));