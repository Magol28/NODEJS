const { argv } = require('yargs')
    .command('crear', 'Se crea el archivo', {
        base: {
            demand: true,
            alias: 'b'
        }
    })
    .command('listar', 'Se lista la tabla', {
        base: {
            demand: true,
            alias: 'b'
        }
    })
    .help();
module.exports = {
    argv
}