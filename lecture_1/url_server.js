'use strict';

const http = require('http'); //импорт встроенного модуля http. функция require возвращает объект модуля http. и этот объект необходимо куда-то записать. мы записываем в константу http

const server = http.createServer((req, res) =>{ //создаем сервер. req -  первый аргумент call back когда придет запрос
    console.log('Запрос получен');

    if (req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end('<h1>Добро пожаловать на сайт</h1>');
    }else if (req.url === '/about'){
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end('<h1>About</h1>');
    }else{
        res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
        res.end('<h1>Страница не найдена</h1>');
    }

});
const port = 3000;
server.listen(port, () =>{//
    console.log(`сервер запущен на порту ${port}`);
});