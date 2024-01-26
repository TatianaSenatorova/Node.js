const Joi = require('joi');

// в этом случае мы говорим, что будем валидировать наши данные как строку
const schema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().min(1).required(),
    content: Joi.string().min(10).required(),
});

const result = schema.validate({
    id: 1,
    title: '1',
    content: '100000000000000',
});

//в результате мы получим довольно большой объект об ошибке. чтобы взять из него самое главное - суть ошибки, сделаем так: 
//console.log(result);
console.log(result.error?.details);