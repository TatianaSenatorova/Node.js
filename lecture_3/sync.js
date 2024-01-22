const fs = require('fs');

try{
    const result = fs.readFileSync(__filename, 'utf-8');
    console.log(result);
}catch(err){
    console.error(err);
}
try {
    fs.appendFileSync(__filename, '\console.log("hello");');
    console.log('the file was saved');
} catch (error) {
    console.error(err);
}console.log("hello");console.log("hello");console.log("hello");