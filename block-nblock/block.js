let { getuser } = require('./user/usuario')
console.log('Inicio del programa');


let user1 = getuser(1);
console.log('User 1:', user1);


let user2 = getuser(2);
console.log('User 2d:', user2);

console.log('Hola mundo');