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

  const d = Array.from({ length: 30001 }, () => 0);

  for (let i = 2; i < N + 1; i += 1) {
    // 1을 빼는 경우
    d[i] = d[i - 1] + 1;
    // 2로 나누는 경우
    if (i % 2 === 0) d[i] = Math.min(d[i], d[Math.floor(i / 2)] + 1);
    // 3으로 나누는 경우
    if (i % 3 === 0) d[i] = Math.min(d[i], d[Math.floor(i / 3)] + 1);
    // 5로 나누는 경우
    if (i % 5 === 0) d[i] = Math.min(d[i], d[Math.floor(i / 5)] + 1);
  }

  console.log(d[N]);

  process.exit();
});
