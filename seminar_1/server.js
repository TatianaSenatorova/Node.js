'use strict';

//Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере 
//по URL “/” возвращает такую страницу:
//localhost:3000
//Мой сервер работает!

//Подсказки:
//- Обязательно импортируйте модуль http для реализации сервера: const http = 
//require('http');
//- Используйте метод модуля http .createServer(): http.createServer((req, res) => {});
//- Для запуска сервера не забудьте вызвать метод .listen(): server.listen(3000);
//- Обязательно установите заголовки ответа с помощью метода res.writeHead(): 
//'Content-Type': 'text/html; charset=UTF-8'
//- Отправьте HTML код с помощью метода res.end()

//надо помнить, что асинхронный код начинает работать только тогда, когда завершит работу синхронный код: когда от первой строчки до последней произойдут все вызовы и завершится работа всех функций. то есть грубо говоря, callstack будет чист



const http = require('http');
const server = http.createServer((req, res) => {
console.log('Запрос получен');
if (req.url === '/') {
res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
res.end('<h1>Добро пожаловать на мой сайт!</h1>');
} else if (req.url === '/about') {
res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
res.end('<h1>Обо мне</h1>');
} else {
res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
res.end('<h1>Страница не найдена!</h1>');
};

});
const port = 3000;
server.listen(port, () => {
console.log(`Сервер запущен на порту ${port}`);
});

