const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  /*
   * 00시 00분 00초부터 23시 59분 59초까지 24 * 60 * 60 = 86400 < 10000 가지임
   * 따라서 모두 확인해도 성능 문제가 없음
   */
  const N = parseInt(input[0]);

  let count = 0;
  for (let h = 0; h <= N; h += 1) {
    for (let m = 0; m < 60; m += 1) {
      for (let s = 0; s < 60; s += 1) {
        const t = `${h}${m}${s}`;
        if (t.indexOf("3") !== -1) count += 1;
      }
    }
  }
  console.log(count);
  process.exit();
});
