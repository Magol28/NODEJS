//puerto
process.env.PORT = process.env.PORT || 3000;

// fecha de vencimiento

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30
    //seed de acutentificacion

process.env.SEED = process.env.SEED || 'modo-de-desarrollo-de-app'