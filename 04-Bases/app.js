//requireds
const fs = require('fs');

// const fs = require('express');
// const fs = require('./fs');
let base = 2;

let data = '';
for (let index = 1; index < 10; index++) {
    data += (index + '*' + base + '=' + (base * index) + '\n');;

}

fs.writeFile('tabla.txt', data, (error) => {
    if (error) throw Error;
    console.log('se creo el archivo');
})