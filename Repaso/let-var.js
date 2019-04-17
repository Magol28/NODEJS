function getPersonById(id, callback) {

    if (id === 10) {
        callback(null, 'no se encuentra la persona');
    } else {
        let person = {
            nombre: 'miguel',
            apellido: 'angel',
            id
        }
        callback(person);
    }
}

getPersonById(11, (err, person) => {

    if (!err) {
        return console.log(person);
    }
    console.log(err);
});