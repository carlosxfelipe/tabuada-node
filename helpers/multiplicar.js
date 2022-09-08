const fs = require("fs");

const colors = require("colors");

const addLeadingzero = (num) => (num >= 10 ? num : `0${num}`);

const createATextFile = async (base = 5, listar = false) => {
  try {
    let output = "";

    for (let i = 1; i <= 10; i++) {
      output += `${addLeadingzero(base)} x ${addLeadingzero(
        i
      )} = ${addLeadingzero(base * i)}\n`;
    }

    if (listar) {
      console.log(`${"Tabuada de".yellow} ${colors.yellow(base)}`);
      console.log(output);
    }

    fs.writeFileSync(`tabuada-de-${base}.txt`, output);

    return `tabuada-de-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createATextFile,
};
