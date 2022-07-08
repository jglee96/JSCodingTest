const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, K] = input[0].split(" ").map((v) => Number(v));
  input.shift();

  const [A, B] = input.map((list) => list.split(" ").map((v) => Number(v)));

  A.sort();
  B.sort().reverse();

  for (let i = 0; i < K; i += 1) {
    if (A[i] < B[i]) [A[i], B[i]] = [B[i], A[i]];
    else break;
  }

  console.log(A.reduce((prev, current) => prev + current));
});
