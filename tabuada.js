const { createATextFile } = require("./helpers/multiplicar");

console.clear();

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "A base tem que ser um número";
    }
    return true;
  }).argv;

console.log(argv);

createATextFile(argv.b, argv.l)
  .then((nomeArquivo) => console.log(nomeArquivo, "criado"))
  .catch((err) => console.log(err));
