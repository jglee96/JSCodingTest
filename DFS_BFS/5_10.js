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

  function check(y, x, queue, map) {
    if (isValid(y, x) && map[y][x] === 0) {
      queue.push({ y, x });
      map[y][x] = 1;
    }
  }

  function bfs({ y, x }) {
    const queue = [{ y, x }];
    map[y][x] = 1;
    while (queue.length !== 0) {
      const v = queue.shift();
      // 상
      const uy = v.y - 1;
      const ux = v.x;
      check(uy, ux, queue, map);
      // 하
      const dy = v.y + 1;
      const dx = v.x;
      check(dy, dx, queue, map);
      // 좌
      const ly = v.y;
      const lx = v.x + 1;
      check(ly, lx, queue, map);
      // 우
      const ry = v.y;
      const rx = v.x - 1;
      check(ry, rx, queue, map);
    }
  }

  let cnt = 0;
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      if (map[i][j] === 0) {
        cnt += 1;
        bfs({ y: i, x: j });
      }
    }
  }

  console.log(cnt);

  process.exit();
});
