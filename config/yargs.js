const argv = require('yargs')
    .option("b",{
        alias:"base",
        type:"number",
        demandOption:true,
        describe:"Es la base de la tabla de multiplicar"
    })
    .option("l",{
        alias:"list",
        type:"boolean",
        default:false,
        describe:"Muestra la tabla en consola"
    })
    .option("h",{
        alias:"hasta",
        type:"number",
        default:10,
        describe:"Es el límite hasta donde se imprimirá la tabla"
    })
    .check( (argv,options) => {
        if(isNaN(argv.b)){
            throw "La base tiene que ser un número.";
        }
        if(isNaN(argv.hasta)){
            throw "El límite tiene que ser un número.";
        }
        return true;
    })
    .argv;

module.exports = argv;