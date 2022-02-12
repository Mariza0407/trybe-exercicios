/* EXERCICIO-01- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

const somaMaxima = 10 ;
let soma = 1 ; */

/* for (let index = 1; index <= somaMaxima; index += 1) {
    soma = soma * index;
}
console.log(soma); 3628800 */

/* EXERCICIO-02- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */

/* let word = 'tryber';
let newWord = '';
for (let index = word.length - 1; index >= 0; index -=1) {
     newWord += word[index];
}
console.log(newWord); rebyrt
/*  */

/* EXERCICIO-03- Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = '';
  for (word of array) {
    if (word.trim().length > bigWord.length){
        bigWord = word.trim();
    }
}
console.log(bigWord); */ //[javascript]
// MENOR PALAVRA

/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let smallWord = '';
  for (word of array) {
    if (word.split().length >= smallWord.length){
        smallWord = word.split();
    }
}
console.log(smallWord); *///[ 'css' ]


// EXERCICIO-4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50

 /*   exibirNummerosPrimos(50);
    function exibirNummerosPrimos(limite){
        for (let numero = 2; numero <= limite; numero++) {
            if (numeroPrimo(numero)) console.log(numero);

        }
    }

    function numeroPrimo(numero) {
        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor ===0) {
                return false;
            }
        }
       return true;
    }
 */

