require('./config/config')

const express = require('express')
const mongoose = require('mongoose');

const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'))

mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true }, (error) => {
    if (error) {
        throw new Error;
    }
    console.log("base conectada");
});
mongoose.set('useCreateIndex', true)
app.listen(process.env.PORT, () => {
    console.log("servidor activo");
})