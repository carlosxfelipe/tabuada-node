const { createATextFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

const colors = require("colors");

console.clear();

createATextFile(argv.b, argv.l)
  .then((nomeArquivo) => console.log(nomeArquivo.green, "criado"))
  .catch((err) => console.log(err));
