// импортируем express
const express = require("express");

//создаем приложение

const app = express();
app.use(express.json());

//реализуем простой роут

// app.get("/", (req, res) => {
//   res.send("Hello!");
// });

let uniqueID = 0;
const articles = [];

//роут получения статей
//обычно эти данные (масссив )берут из базы данных. но мы здесь для упрощения реализуем слпед.образом
app.get("/articles", (req, res) => {
  res.send({ articles });
});

//добавили новый метод, кот позволяет создать новую статью
//для статьи нам необходимо сгенерировать уникальный идентификатор
app.post("/articles", (req, res) => {
  uniqueID += 1;
  articles.push({
    id: uniqueID,
    ...req.body,
  });
  //возвращаем в ответе идентификатор статьи. для чего? чтобы было удобнее пользователям нашего сервера. чтобы запомнить идентификатор и потом с его помощью производить какие-то действия с этой статьей
  res.send({
    id: uniqueID,
  });
});

//роут получения определенной статьи. добавили новый обработчик
///articles/:id динамическая часть url
app.get("/articles/:id", (req, res) => {
  const article = articles.find(
    (article) => article.id === Number(req.params.id)
  );
  //далее проверяем, а существует ли такая статья
  if (article) {
    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null });
  }
});
//статью не нашел, т.к. наша импровизированная база данных хранится ровно столько, сколько работает наш сервер. как только сервер мы останавливаем, все переменные и массивы удаляются. Поэтому чтобы нам получить первую статью, надо после перезапуска сервера заново ее создать

//роут обновления статьи

app.put("/articles/:id", (req, res) => {
  //ищем опред.статью
  const article = articles.find(
    (article) => article.id === Number(req.params.id)
  );
  //далее проверяем, а существует ли такая статья
  //если статья существует - обновляем поля статьи
  if (article) {
    article.title = req.body.title;
    article.content = req.body.content;
    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null });
  }
});
//роут удаления статей

app.delete("/articles/:id", (req, res) => {
  //ищем опред.статью
  const article = articles.find(
    (article) => article.id === Number(req.params.id)
  );

  if (article) {
    const articleIndex = articles.indexOf(article);
    articles.splice(articleIndex, 1);
    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null });
  }
});
//запускаем сервер
app.listen(3000);
