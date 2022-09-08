const argv = require("yargs")
  .option("b", {
    alias: "multiplicador",
    type: "number",
    demandOption: true,
    describe: "Trata-se do Multiplicador (primeiro fator)",
  })
  .option("m", {
    alias: "multiplicando",
    type: "number",
    default: 10,
    describe: "Trata-se do Multiplicando (segundo fator)",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Lista a tabuada em console",
  })
  .check((argv, options) => {
    if (isNaN(argv.multiplicador)) {
      throw "O multiplicador tem que ser um número";
    }
    return true;
  }).argv;

module.exports = argv;
