const { crearArchivo, listarTabla } = require('./multiplicacion/funciones')
const { argv } = require('./config/yargs')

let base = 6;
let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base);
        break;
    case 'listar':
        listarTabla(argv.base);
        break;
    default:
        console.log('no se conoce el comando');
}