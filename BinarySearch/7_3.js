const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function binary_search(array, target, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (array[mid] === target) return true;
    else if (array[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return false;
}

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const list = input[0].split(" ").map((v) => Number(v));
  const req = input[1].split(" ").map((v) => Number(v));

  list.sort();

  const answer = [];
  req.forEach((v) => {
    answer.push(binary_search(list, v, 0, list.length - 1));
  });

  console.log(answer);
});
