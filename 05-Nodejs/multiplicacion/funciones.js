const fs = require('fs');
let crearArchivo = (base) => {
    let data = "";
    for (let i = 1; i < 10; i++) {
        data += `${i}*${base}=${i * base}\n`;
    }
    fs.writeFile(`tabla_del_${base}.xtx`, data, (err) => {
        if (err) throw err;
        console.log('La tabla ha sido creada');
    });
}
let listarTabla = (base) => {

    for (let i = 1; i < 10; i++) {
        console.log(`${i}*${base}=${i * base}\n`);
    }
}
module.exports = {
    crearArchivo,
    listarTabla
}