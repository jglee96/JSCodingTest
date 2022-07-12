const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const target = Number(input[0]);
  const list = input[1].split(" ").map((v) => Number(v));

  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === target) {
      console.log(i + 1);
      break;
    }
  }
});
