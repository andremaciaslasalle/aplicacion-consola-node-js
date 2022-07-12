const { creaArchivoChido } = require('./helpers/multiplicar');
const argv = require("./config/yargs");
const fs = require('fs');
const colors = require('colors/safe');
console.clear();
/*
Leer parámetros consola sin yargs
const [,,arg3="base=1"] = process.argv;
const [,base=1] = arg3.split("=");

crearArchivo(base);
crearArchivoPromesa(base)
    .then(nombreArchivo => console.log(nombreArchivo,"creado"))
    .catch(error => console.log(error));
*/
creaArchivoChido(argv.base,argv.list,argv.hasta)
    .then(nombreArchivo => {
        let final = "------------------------------\n";
        final = final+`     ${nombreArchivo} creado\n`;
        final= final+"------------------------------\n";
        console.log(colors.cyan(final));
    }
        )
    .catch(error => console.log(error));