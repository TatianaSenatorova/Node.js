//используются две точки перед слэш, чтобы импортировать из директории уровнем выше
const baz = require('../baz');


console.log(baz);
module.exports = 'hello from foo';