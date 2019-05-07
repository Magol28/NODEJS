const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;
let roles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: 'Rol invalido'
}

let userSc = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'correo requerido'],

    },
    password: {
        type: String,
        required: [true, 'contraseña obligatoria']
    },
    img: {
        required: false,
        path: String
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: roles
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})
userSc.methods.toJSON = function() {
    let user = this;
    let userO = user.toObject();
    delete userO.password;
    return userO;
}
userSc.plugin(uniqueValidator, { message: '{PATH} debe ser unico' })

module.exports = mongoose.model('User', userSc)