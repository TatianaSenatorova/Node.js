"use strict";

//Напишите HTTP сервер и реализуйте два обработчика, где:
//— По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
//— А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
//— Также реализуйте обработку несуществующих роутов (404).
//— * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require("http");
let countMainPage = 0;
let countAboutMePage = 0;
const server = http.createServer((req, res) => {
  console.log("Запрос получен");
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    countMainPage++;
    res.end(
      `<h1>Главная страница</h1>
    <a href="/about">Переход на страницу обо мне</a>
    <p>Количество посещений главной страницы: ${countMainPage}`
    );
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    countAboutMePage++;
    res.end(
    `<h1>Обо мне</h1>
    <a href="/about">Переход на главную страницу</a>
    <p>Количество посещений страницы обо мне: ${countAboutMePage}`
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end("<h1>Страница не найдена!</h1>");
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
