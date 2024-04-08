// leer el JSON
const fs = require("fs");

const bicicletasJSON = fs.readFileSync("./bicicletas.json");

const bicicletas = JSON.parse(bicicletasJSON);
//console.log(bicicletas);

module.exports = bicicletas; //exportar JSON parseado
