const { argv } = require('yargs')
    .command('crear', 'Crea una actividad por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('listar', 'Imprime las actividades por hacer')
    .command('actualizar', 'Actualiza una actividad', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            demand: true,
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borra una actividad', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()

module.exports = {
    argv
}