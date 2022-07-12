const argv = require ('yargs')
    .option('b', {
        alias:'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la table de multiplicar'
    })
    .option('l', {
        alias:'listar',
        type:'boolean',
        default: false,
        describe: 'Parametro que sirve para listar la tabla'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un nro'
        }
        return true;
    })
    .argv;

module.exports = argv;