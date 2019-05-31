const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user')
const app = express()


app.post('/login', (req, res) => {
    let body = req.body;
    User.findOne({ email: body.email }, (error, useDB) => {
        if (error) {
            return res.status(400).json(error)
        }
        if (!useDB) {
            return res.status(400).json({
                message: 'usuario o contraseña incorrectos u'
            })
        }
        if (!bcrypt.compareSync(body.password, useDB.password)) {
            return res.status(400).json({
                message: 'usuario o contraseña incorrectos p'
            })
        }
        const token = jwt.sign({
            usuario: useDB,

        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
        res.json({
            ok: true,
            usuario: useDB,
            token
        })

    })

})

module.exports = app;