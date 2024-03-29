//1. Инициализируйте проект NPM.
//2. Установите библиотеку express.
//3. Создайте файл index.js.
//4. В файле напишите код который реализует два обработчика по URL “/” и URL
//“/about”.
//5. В каждом обработчике верните HTML код, в котором есть заголовок и ссылка
//на соседнюю страницу.

const express = require("express");
const app = express();

//каждый раз, когда кто-то будет делать запрос по данному маршруту, то есть нашему '/', будет отрабатывать эта функция

//static - по сути создали сервер статик и хотим получить доступ к файлам внутри папки static. Как это работает? когда идет запрос на какой-то файл(.css, .js ) статик подхватывает подобного рода запросы и пытается эти ресурсы найти там, где мы ему сказали, т.е. в нашем случае папка 'static'. он там все ищет находит и отдает.
app.use(express.static('static'));
// app.get("/", (req, res) => {
//   res.send("<h1>home page</h1><a href='/about'>Go to page about</a>");
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>page about</h1><a href='/about'>Go to main page</a>");
// });

app.listen(3000);
