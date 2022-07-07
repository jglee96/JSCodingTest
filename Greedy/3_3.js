const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const size_string = input[0];
  const N = parseInt(size_string.substr(0, 1));
  const M = parseInt(size_string.substr(2, 1));

  const cards = new Array(N);
  for (let i = 0; i < cards.length; i += 1) {
    cards[i] = new Array(M);
  }

  for (let i = 1; i < input.length; i += 1) {
    for (let j = 0; j < input[i].length; j += 2) {
      cards[i - 1][j / 2] = parseInt(input[i].substr(j, 1));
    }
  }

  const min_list = [];
  cards.forEach((value) => {
    min_list.push(Math.min(...value));
  });
  const result = Math.max(...min_list);

  console.log(result);
  process.exit();
});
