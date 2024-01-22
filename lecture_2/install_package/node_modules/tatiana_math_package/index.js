'use strict';

//создадим две функции: первая будет складывать числа, вторая вычитать числа

function add(x, y) {
    return x +y;
}

function substract(x, y){
    return x - y;
}

//обращаемся к глобальному объекту module, его свойству exports и прописываем в него объект, в кот. добавляем наши две функции
module.exports = { add, substract };


