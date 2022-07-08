const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input[0]);
  input.shift();

  const list = input.map((value) => {
    const pair = value.split(" ");
    return {
      name: pair[0],
      score: Number(pair[1]),
    };
  });

  const sorted = list.sort((a, b) => {
    return a.score - b.score;
  });

  console.log(sorted.map((value) => value.name));
});
