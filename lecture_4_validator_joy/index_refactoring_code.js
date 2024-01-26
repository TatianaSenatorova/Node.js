const express = require("express");
const { checkBody, checkParams } = require("./validation/validator");
const { idScheme, articleScheme } = require("./validation/scheme.js");

const app = express();

let uniqueID = 0;
const articles = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ articles });
});

app.get("/articles/:id", checkParams(idScheme), (req, res) => {
  const article = articles.find(
    (article) => article.id === Number(req.params.id)
  );
  if (article) {
    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null });
  }
});

app.post("/articles", checkBody(app), (req, res) => {
  uniqueID += 1;

  articles.push({
    id: uniqueID,
    ...req.body,
  });
  res.send({
    id: uniqueID,
  });
});

app.put(
  "/articles/:id",
  checkParams(idScheme),
  checkBody(articleScheme),
  (req, res) => {
    const article = articles.find(
      (article) => article.id === Number(req.params.id)
    );
    if (article) {
      article.title = req.body.title;
      article.content = req.body.content;

      res.send({ article });
    } else {
      res.status(404);
      res.send({ article: null });
    }
  }
);

app.listen(3000);
