const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');

const User = require('../models/user')
const app = express()

app.get('/usuario/:id', (req, res) => {
    let id = req.params.id
    res.send('get user' + id)
})

app.post('/usuario', (req, res) => {
    let body = req.body;
    let user = new User({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    user.save((error, userDB) => {
        if (error) {
            return res.json(error)
        }
        res.json(userDB)
    })

})
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);
    User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (error, userDB) => {
        if (error) {
            return res.json(error)
        }
        res.json(userDB)
    })

})
app.delete('/usuario', (req, res) => {
    res.send('delete user')
})

module.exports = app;