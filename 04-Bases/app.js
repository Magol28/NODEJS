const { argv } = require('./config/yargs')
const { crearArchivo, listar } = require('./multiplicar/mutiplicar');

let comando = argv._[0];
switch (comando) {

    case 'crear':
        crearArchivo(argv.base).then(archivo => {
            console.log(`El archivo creado un archivo con la tabla ${argv.base}`);
        }).catch(error => {
            console.log(error);
        });
        break;
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    default:
        console.log('comando no reconocido;');
}
// console.log(process.argv);
let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(argv.limite);