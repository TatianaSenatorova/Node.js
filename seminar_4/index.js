const fs = require("fs");
const path = require("path");
const express = require("express");
const Joi = require("joi");

const schema = Joi.object({
  id: Joi.number(),
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  town: Joi.string().min(1).max(30),
  age: Joi.number().min(0).max(120).integer(),
});

const app = express();
const pathDB = path.join(__dirname, "users.json");

let uniqueID = 1;

app.use(express.json());

app.get("/users", (req, res) => {
  const data = fs.readFileSync(pathDB);
  res.send(data);
});

app.get("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathDB));
  const user = users.find((user) => user.id === Number(req.params.id));
  //далее проверяем, а существует ли такая статья
  if (user) {
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

app.post("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathDB));
  console.log(users);
  uniqueID += 1;
  users.push({
    id: uniqueID,
    ...req.body,
  });

  fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
  res.send({
    id: uniqueID,
  });
});

app.put("/users/:id", (req, res) => {
  const result = schema.validate(req.body);
  if(result.error){
    return res.status(404).send({error: result.error.details});
  }

  const users = JSON.parse(fs.readFileSync(pathDB));
  const user = users.find((user) => user.id === Number(req.params.id));

  if (user) {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.town = req.body.town;
    user.age = req.body.age;

    fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
    res.send({ user });
  } else {
    res.status(404);
    res.send({ article: null });
  }
});

app.delete("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathDB));
  const user = users.find((user) => user.id === Number(req.params.id));

  if (user) {
    const userIndex = users.indexOf(user);
    users.splice(userIndex, 1);
    fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

app.listen(3000);
