const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, K] = input[0].split(" ");

  let count = 0;
  while (N > 1) {
    if (N % K === 0) {
      N /= K;
      count += 1;
    } else {
      const q = N % K;
      N -= q;
      count += q;
    }
  }
  console.log(count);
  process.exit();
});
