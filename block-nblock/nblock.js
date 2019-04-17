let { getUsuario } = require('./user/usuario')
console.log('Inicio del programa');

getUsuario(1, function(user1) {
    console.log(user1);
})

getUsuario(2, function(user2) {
    console.log(user1);
})
console.log('Hola mundo');