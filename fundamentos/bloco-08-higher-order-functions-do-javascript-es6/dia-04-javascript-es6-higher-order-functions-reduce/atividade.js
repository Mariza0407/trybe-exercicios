// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const getBigger = (bigger, number) => ((bigger > number)? bigger : number);
// console.log(numbers);

// const bigger = numbers.reduce(getBigger, 6);
// console.log(bigger);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const numberPair = (number) => number % 2 === 0;

const sumPair = (numberA, number) => numberA+ number;

const sumNumber = (array) => array.filter(numberPair).reduce(sumPair);
console.log(numbers);
console.log(sumNumber(numbers));