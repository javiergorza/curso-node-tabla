const { crearArchivo } =  require ('./helpers/multiplicar');
const argv = require ('./config/yargs');


console.clear();

// *** Antes de Yargs *** //
//const [ , , arg3 = 'base=5'] = process.argv;
//const [,base = 5] = arg3.split('=');
//console.log(base);

//console.log(process.argv);
//console.log(argv);
console.log('Base de yargs :', argv.b, argv.l);





//const base = 5;

crearArchivo(argv.b, argv.l)
    .then ( nombreArchivo => console.log (nombreArchivo, 'creado'))
    .catch ( err => console.log (err));
