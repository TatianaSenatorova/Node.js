const fs = require('fs'); // модуль полностью перезаписывает содержание файла.

//записиваем в файл
fs.writeFile('./text.txt', 'console.log("hello")', (err) => {
  if (err) {
    console.error(err);
  }
  console.log("its already done");
});
