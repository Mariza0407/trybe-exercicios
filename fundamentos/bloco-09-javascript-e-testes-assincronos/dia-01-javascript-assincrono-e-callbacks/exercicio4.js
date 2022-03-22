// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  //math.floor retorna um numero inteiro dentro da temperatura máxima....math.random retorna um número aleatório dentro
  //da temperatura máxima.
  return Math.floor(Math.random() * maxTemperature);
 
};
// crie a função sendMarsTemperature abaixo
//sendMarsTemperature é uma função que recebe outra função chamada -> temperaturaAtual e recebe getMarsTemperature, o setTimeout
//vai me retornar a mensagem da temperatura com um delay da primeira constante.
const sendMarsTemperature = () => {
    const temperaturaAtual = getMarsTemperature();
    setTimeout(() => console.log(`"Mars temperature is: ${temperaturaAtual} degree Celsius"`), messageDelay());
};

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
