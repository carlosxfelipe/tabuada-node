const fs = require("fs");

const colors = require("colors");

const addLeadingzero = (num) => (num >= 10 ? num : `0${num}`);

const createATextFile = async (
  multiplicador = 1,
  listar = false,
  multiplicando = 10
) => {
  try {
    let output = "";
    let outputConsole = "";

    for (let i = 1; i <= multiplicando; i++) {
      output += `${addLeadingzero(multiplicador)} x ${addLeadingzero(
        i
      )} = ${addLeadingzero(multiplicador * i)}\n`;

      outputConsole += `${addLeadingzero(multiplicador)} ${
        "x".yellow
      } ${addLeadingzero(i)} ${"=".yellow} ${addLeadingzero(
        multiplicador * i
      )}\n`;
    }

    if (listar) {
      console.log(`${"Tabuada de".blue} ${colors.blue(multiplicador)}`);
      console.log(outputConsole);
    }

    fs.writeFileSync(`./output/tabuada-de-${multiplicador}.txt`, output);

    return `tabuada-de-${multiplicador}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createATextFile,
};
