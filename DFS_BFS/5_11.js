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
  input.shift();
  const map = new Array(N);
  input.forEach(
    (str, index) => (map[index] = str.split("").map((v) => Number(v)))
  );
  // console.log(map);

  function isValid(y, x) {
    return y > -1 && y < N && x > -1 && x < M;
  }

  function check(y, x, queue, map, before) {
    if (isValid(y, x) && map[y][x] === 1) {
      queue.push({ y, x });
      map[y][x] += before;
    }
  }

  function bfs({ y, x }) {
    const queue = [{ y, x }];
    // console.log(y, x);
    map[y][x] = 1;
    while (queue.length !== 0) {
      const v = queue.shift();
      const before = map[v.y][v.x];
      // 상
      const uy = v.y - 1;
      const ux = v.x;
      check(uy, ux, queue, map, before);
      // 하
      const dy = v.y + 1;
      const dx = v.x;
      check(dy, dx, queue, map, before);
      // 좌
      const ly = v.y;
      const lx = v.x + 1;
      check(ly, lx, queue, map, before);
      // 우
      const ry = v.y;
      const rx = v.x - 1;
      check(ry, rx, queue, map, before);
    }
  }

  bfs({ y: 0, x: 0 });
  console.log(map[N - 1][M - 1]);

  process.exit();
});
