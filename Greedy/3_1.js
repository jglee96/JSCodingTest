const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let N = Number(line);

  let count = 0;
  const coin_types = [500, 100, 50, 10];

  coin_types.forEach((value) => {
    count += parseInt(N / value);
    N %= value;
  });
  console.log(count);

  rl.close();
}).on("close", function () {
  process.exit();
});
