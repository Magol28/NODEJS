const fs = require('fs');
const colors = require('colors');
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor de la base ${base} no es un número`);
            return;
        }


        let data = '';
        for (let index = 1; index < 10; index++) {
            data += (index + '*' + base + '=' + (base * index) + '\n');;

        }

        fs.writeFile(`tabla-${base}.txt`, data, (error) => {
            if (error) reject(error);
            else {
                resolve(`tabla-${base}.txt`)
            }
        })
    })
}
let listar = (base, limite = 10) => {
    console.log('===================');
    console.log(`====tabla de ${base}======`.green);
    for (let i = 1; i < limite; i++) {
        console.log((i + '*' + base + '=' + (base * i) + '\n'));

    }

}



module.exports = {
    crearArchivo,
    listar
}