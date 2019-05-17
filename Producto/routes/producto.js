const express = require('express');
const Producto = require('../model/Producto')
const app = express();

app.get('/app/producto/:id', function(req, res) {
    let id = req.params.id
    let productoB = Producto.findById(id, (error, producto) => {
        res.json(producto)
    });

})
app.get('/', function(req, res) {
    res.json('servidor  levantado')

})

app.put('/app/prodcto/:id', function(req, res) {
    let id = req.params.id
    let body = req.body;
    console.log(body);
    Producto.findByIdAndUpdate(id, body, (error, res1) => {
        if (error)
            return res.status(404);
        res.json(res1);
    })

})

app.delete('/app/producto/:id', function(req, res) {
    let id = req.params.id
    Producto.findByIdAndRemove(id, (error, res) => {
        if (error)
            return res.status(404);
    })
    res.status(200);
})

app.post('/app/producto', function(req, res) {
    let body = req.body;
    let nuevo = new Producto({
        nombre: body.nombre,
        precio: body.precio,
        descripcion: body.descripcion

    });
    nuevo.save();
    return res.json(nuevo);
})

module.exports = app;