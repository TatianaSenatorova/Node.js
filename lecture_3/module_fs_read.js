const fs = require('fs'); // модуль позволяет работать с файлом - читать и записывать

fs.readFile('./text.txt', 'utf-8', (err, data) =>{
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})
//выведет в консоль содержание файла