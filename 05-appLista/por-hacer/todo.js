const fs = require('fs');

let lisToDo = [];
const guardarDB = () => {
    let data = JSON.stringify(lisToDo);
    fs.writeFile(`./data/data.json`, data, (error) => {
        //   console.log(error);
    })

}
const cargarDB = () => {
    try {
        lisToDo = require('../data/data.json');
    } catch (e) {
        lisToDo = [];
    }
}
const crear = (descripcion) => {
    cargarDB();
    let todo = {
        descripcion,
        completado: false,
    }
    lisToDo.push(todo);
    guardarDB();
    return todo;
}
let actualizar = (desc, completado = true) => {
    cargarDB();
    let i = lisToDo.findIndex(tarea => tarea.descripcion === desc);
    lisToDo[i].completado = completado;
    guardarDB();
    return true;
}

let borrar = (desc) => {
    cargarDB();
    let lista = lisToDo.filter(tarea => tarea.descripcion !== desc);
    lisToDo = lista;
    guardarDB();
    return true;
}

let porHacer = () => {
    cargarDB();
    let data = [];
    lisToDo.forEach(item => {
        if (!item.completado) {
            data.push(item);
        }
    });
    console.log(data);
    return lisToDo;
}
module.exports = {
    crear,
    porHacer,
    actualizar,
    borrar
}