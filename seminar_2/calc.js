
//1. Необходимо вынести функцию .calculateResultSum() в отдельный 
//файл, импортировать её в основной файл и использовать.
//2. Также необходимо вынести запуск скрипта в скрипты запуска NPM, 
//для того, чтобы можно было запускать скрипт с помощью команды 
//npm run start


//необходимо найти и применить библиотеку, которая позволит избежать проблем со сложением и умножением чисел с плавающей запятой

const numberPrecision = require('number-precision');

function calculateResultSumm(purchases, discount) {
  let total = purchases.reduce((acc, pur) => numberPrecision.plus(acc, pur), 0);
  total = numberPrecision.times(total, discount); //применяем скидку
  return total;
};
module.exports = calculateResultSumm;
