const { leerInput } = require('./helpers/inquirer');

const main = async () => {
    const msj = await leerInput('Hola: ');
    console.log(msj);
    
};

main();
