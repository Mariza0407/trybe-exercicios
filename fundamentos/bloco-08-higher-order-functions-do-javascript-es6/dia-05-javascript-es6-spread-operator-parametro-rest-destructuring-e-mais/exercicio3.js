// 3 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

// Dica: use object destructuring.
const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo

  //({name, age, likes, nationality}) entre () porque é um parametro de um objeto.

  //(`${name} is ${age} years old and likes ${likes.join(', ')}.`); faço templat literals  para imprimir
  //a frase que quero.

  //JOIN => O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
  
  const personLikes = ({name, age, likes, nationality}) => (`'${name} is ${age} years old and likes ${likes.join(', ')}.'`);

  console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
