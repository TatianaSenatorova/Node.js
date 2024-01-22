//1. Создайте файл changePerson.js рядом с файлом writePerson.js
//2. Напишите в нем код, который 
//➜ прочитает файл person.json,
//➜ уменьшит возраст на 10 
//➜ изменит город на “Ekaterinburg” 
//➜ перезапишет исходный файл person.json

const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'person.json');


const person = JSON.parse(fs.readFileSync(pathToFile));
person.age -= 10;
person.city = 'Ekaterinburg';

const personJson = JSON.stringify(person, null, 2);
fs.writeFileSync(pathToFile, personJson);