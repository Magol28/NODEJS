const { argv } = require('./config/yargs');
const { crear, porHacer, actualizar, borrar } = require('./por-hacer/todo')
const { colors } = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let lista = porHacer();
        for (let i of lista) {
            console.log("======================= ".green);
            console.log(`Tarea: ${i.descripcion} Completado: ${i.completado}`);
            console.log("======================= ".green);
        }
        break;
    case 'actualizar':
        let act = actualizar(argv.descripcion, argv.completado);
        console.log(act);
        break;
    case 'borrar':
        let eliminar = borrar(argv.descripcion);
        break;
    default:
        console.log('comando no es reconocido');
}