//Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

//— На каждой странице реализован счетчик просмотров
//— Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
//— Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
//— Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

if (!fs.existsSync("counter_pages.json")) {
  const countPages = {
    counterMainPage: 0,
    counterPageAbout: 0,
  };
  const countPagesJson = JSON.stringify(countPages, null, 2);
  fs.writeFileSync((__dirname, "counter_pages.json"), countPagesJson);
}

app.get("/", (req, res) => {
  const pathToCounterFile = (__dirname, "counter_pages.json");
  fs.readFile(pathToCounterFile, "utf-8", (error, data) => {
    if (error) return console.log(error);
    let dataPage = JSON.parse(data);
    dataPage.counterMainPage += 1;
    fs.writeFile(
      pathToCounterFile,
      JSON.stringify(dataPage, null, 2),
      (error) => {
        if (error) return console.log(error);
      }
    );
    res.send(
      `<h1>Корневая страница</h1><p>Просмотров: ${dataPage.counterMainPage}</p><a href='/about'>Ссылка на страницу /about</a>`
    );
  });
});

app.get("/about", (req, res) => {
  const pathToCounterFile = (__dirname, "counter_pages.json");
  fs.readFile(pathToCounterFile, "utf-8", (error, data) => {
    if (error) return console.log(error);
    let dataPage = JSON.parse(data);
    dataPage.counterPageAbout += 1;
    fs.writeFile(
      pathToCounterFile,
      JSON.stringify(dataPage, null, 2),
      (error) => {
        if (error) return console.log(error);
      }
    );
    res.send(
      `<h1>Страница about</h1><p>Просмотров: ${dataPage.counterPageAbout}</p><a href='/'>Ссылка на страницу /home page</a>`
    );
  });
});

app.listen(3000);
