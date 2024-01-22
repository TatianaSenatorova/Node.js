const fs = require('fs'); // модуль добавляет данные в файл.

//записиваем в файл
fs.appendFile(__filename, '\console.log("appendFile data");', (err) => {
  if (err) {
    console.error(err);
  }
  console.log("its already done");
});
console.log("appendFile data");  //добавилась эта строка после запуска файла
console.log("appendFile data");console.log("appendFile data");