const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map((v) => Number(v));
  const list = input[1].split(" ").map((v) => Number(v));

  let start = 0,
    end = Math.max(...list),
    target = M;
  let answer = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let total = 0;
    list.forEach((v) => {
      if (v > mid) total += v - mid;
    });

    if (total < target) end = mid - 1;
    else {
      answer = mid;
      start = mid + 1;
    }
  }

  console.log(answer);
});
