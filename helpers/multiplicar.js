const fs = require("fs");

const colors = require("colors");

const addLeadingzero = (num) => (num >= 10 ? num : `0${num}`);

const createATextFile = async (
  multiplicador = 5,
  listar = false,
  multiplicando = 10
) => {
  try {
    let output = "";

    for (let i = 1; i <= multiplicando; i++) {
      output += `${addLeadingzero(multiplicador)} x ${addLeadingzero(
        i
      )} = ${addLeadingzero(multiplicador * i)}\n`;
    }

    if (listar) {
      console.log(`${"Tabuada de".yellow} ${colors.yellow(multiplicador)}`);
      console.log(output);
    }

    fs.writeFileSync(`tabuada-de-${multiplicador}.txt`, output);

    return `tabuada-de-${multiplicador}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createATextFile,
};
