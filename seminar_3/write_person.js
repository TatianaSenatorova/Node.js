//1. Создайте файл writePerson.js
//2. Напишите код, который создаст файл person.json в директории 
//запускаемого скрипта и запишет в файл следующий объект:
//{'name': 'Ivanov', 'age': 30}
//}

const path = require('path');

const fs = require('fs'); // модуль полностью перезаписывает содержание файла.

const person = {
    name: 'Ivan',
surname: 'Ivanov',
    age: 30,
    city: 'Moscow',
}

//stringify дает длинную строку. Но мы можем этому методу передать три параметра: сами данные, которые надо преобразовать в формат JSON, второй параметр - фильтры (если нам не все свойства объекта нужны, пример: ['name'] - запишет только свойство и значение name), третий параметр - пробелы, чтобы удобнее было читать строку
const personJson = JSON.stringify(person, null, 2);

//path.join что делает? он склеивает путь до текущего файла, в кот. происходит исполнение
const pathToFile = path.join(__dirname, 'person.json');

//fs создает файл, если его пока нет
fs.writeFileSync(pathToFile, personJson);


