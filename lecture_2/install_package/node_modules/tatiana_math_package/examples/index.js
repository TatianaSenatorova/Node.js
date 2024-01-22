'use strict';

const uuid = require('uuid');
const hello = require('./hello');
hello.sayHello();

const id = uuid.v4();

console.log(id);