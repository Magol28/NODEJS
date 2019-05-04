const express = require('express')
const app = express()
require('./config/config')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario/:id', (req, res) => {
    let id = req.params.id
    res.send('get user' + id)
})

app.post('/usuario', (req, res) => {
    console.log(req);
    let body = req.body;
    res.status(200).json("todo bien")
})
app.put('/usuario', (req, res) => {
    res.send('put user')
})
app.delete('/usuario', (req, res) => {
    res.send('delete user')
})

app.listen(process.env.PORT, () => {
    console.log("servidor activo");
})