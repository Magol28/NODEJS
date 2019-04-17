// setTimeout(function() {
//     console.log('hola mundo');
// }, 3000);

let getUserbyId = (id, callback) => {
    let usuario = {
        nombre: 'miguel',
        id: id
    }

    if (id === 20) {
        callback(`el usuario con ${id} no existe`)
    } else {

        callback(null, usuario);
    }
}

getUserbyId(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('usuario', usuario);
})