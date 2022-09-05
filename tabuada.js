const { createATextFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

createATextFile(argv.b, argv.l)
  .then((nomeArquivo) => console.log(nomeArquivo, "criado"))
  .catch((err) => console.log(err));
