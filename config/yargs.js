const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "É a base da tabuada de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Mostra a tabuada em console",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "A base tem que ser um número";
    }
    return true;
  }).argv;

module.exports = argv;
