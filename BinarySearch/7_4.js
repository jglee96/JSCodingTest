const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const list = input[0].split(" ").map((v) => Number(v));
  const req = input[1].split(" ").map((v) => Number(v));

  const set = new Set(list);

  const answer = [];
  req.forEach((v) => {
    if (set.has(v)) answer.push(true);
    else answer.push(false);
  });

  console.log(answer);
});
