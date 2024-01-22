
//в файле test.js нет module.exports, но здесь используем require('./test') и все срабатывает
const test = require('./test');
console.log(test)



const express = require('express');

const app = express();

//промежуточный обработчик use, выполняет код, прежде чем начнет работу основной обработчик. обязательно промежуточные обработчики определять до основных обработчиков
app.use(express.static('static'));

app.get('/', (req, res) =>{
    res.send('static/index.html');
})

const port = 3000;

app.listen(port, () =>{
    console.log(`Сервер запущен на порту ${port} `);
})