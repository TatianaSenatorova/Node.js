const express = require('express');

const app = express();

//промежуточный обработчик use, выполняет код, прежде чем начнет работу основной обработчик. обязательно промежуточные обработчики определять до основных обработчиков
app.use((req, res, next) =>{
    //при запросе мы в консоли получим информацию об этом запросе
console.log('Поступил запрос', req.method, req.url);
next(); // эта функция говорит о том, что нужно вызвать основной обработчик. 
})

app.get('/', (req, res) =>{
    res.send('<h1>Добро пожаловать на мой сайт</h1>');
})
app.get('/about', (req, res) =>{
    res.send('<h1>Страница обо мне</h1>');
})

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './index.html'));
})

const port = 3000;

app.listen(port, () =>{
    console.log(`Сервер запущен на порту ${port} `);
})