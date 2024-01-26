//этот файл наш сервер

// const fs = require("fs");
// const path = require("path");
const express = require("express");

//импортируем не всю библиотеку express-handlebars, а конкретно функцию engine
const { engine } = require('express-handlebars');

//создаем приложение
const app = express();

//далее мы можем указать, какой будет движок генерации html
app.engine('handlebars', engine());

//установка переменных окружения express
//указываем движок
app.set('view engine', 'handlebars');
//указываем директорию, в кот. будут храниться templat'ы (то есть наши шаблоны)
app.set('views', './views');

const articles = [
  {
    title: "article1",
    description: "awesome description 1",
  },
  {
    title: "article2",
    description: "awesome description 2",
  },
  {
    title: "article3",
    description: "awesome description 3",
  },
];

//обработчик
app.get('/', (req, res) =>{
  //в свойстве res хранится метод render, который позволяет указать, что мы хотим вернуть клиенту. в первый аргумент передается название файла без расширения ('home'), во втором аргументе передаются данные, которые мы хотим сгенерировать и показать.

  //в фигурных скобках можно указать конкретно файл, в который передавать данные. Он у нас будет в папке layouts
  res.render('home', { layout: "index", articles});
});

app.listen(3000);
