const express = require('express')
const app = express()

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'miguel'
    });
})

app.listen(3000, () => {
    console.log('servidor activo');
})