const fs = require('fs');
const colors = require('colors/safe');
/* const crearArchivo = (base) =>{
    console.log("====================");
    console.log("    Tabla del:",base);
    console.log("====================");
    let salida = "";
    for (let i=1;i<=10;i++){
        salida = salida+`${base} X ${i} = ${base*i}`;
        if(i!=10) salida=salida+"\n";
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`,salida);
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
} */

/* const crearArchivoPromesa = (base) => {
    return new Promise((resolve,reject) => {
        console.log("====================");
        console.log("    Tabla del:",base);
        console.log("====================");
        let salida = "";
        for (let i=1;i<=10;i++){
            salida = salida+`${base} X ${i} = ${base*i}`;
            if(i!=10) salida=salida+"\n";
        }
        console.log(salida);
        try{
            fs.writeFileSync(`tabla-${base}.txt`,salida);
            resolve(`tabla-${base}.txt`);
        }catch(error){
            reject(error);
        }

    });
} */

const creaArchivoChido = async(base=1,listar=false,hasta=10) => {
    try{
        let salida = "";
        for (let i=1;i<=hasta;i++){
            salida = salida+`${base} X ${i} = ${base*i}`;
            if(i!=hasta) salida=salida+"\n";
        }
        if(listar){
            console.log("=============================");
            console.log("       Tabla del:",base);
            console.log("=============================");
            console.log(colors.green(salida));
        } 
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;
    }catch(error){
        throw error;
    }
}

module.exports = {
    //crearArchivo,
    //crearArchivoPromesa
    creaArchivoChido
}

