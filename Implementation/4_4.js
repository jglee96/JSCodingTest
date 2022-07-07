const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map((str) => parseInt(str));
  let [A, B, currentDirection] = input[1]
    .split(" ")
    .map((str) => parseInt(str));
  const map = input
    .slice(2)
    .map((str) => str.split(" ").map((pos) => parseInt(pos)));

  const directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const record = new Array(N);
  for (let i = 0; i < record.length; i += 1) {
    record[i] = Array.from({ length: M }, () => 0);
  }

  let cnt = 1;
  record[B][A] = 1;

  const isValid = (y, x) => {
    if (y > -1 && y < N && x > -1 && x < M && map[y][x] === 0) return true;
    else return false;
  };

  while (true) {
    const beforeDirection = currentDirection;
    // 반시계 방향으로 돌면서 확인
    for (let i = currentDirection + 1; i < currentDirection + 5; i += 1) {
      const next = directions[i % 4];
      const y = B + next[0];
      const x = A + next[1];
      if (isValid(y, x) && record[y][x] === 0) {
        currentDirection = i % 4;
        B = y;
        A = x;
        record[y][x] = 1;
        cnt += 1;
      } else continue;
    }

    // 다 돌았는데 갈 곳이 없는 경우
    if (beforeDirection === currentDirection) {
      const back = directions[(beforeDirection + 2) % 4];
      const backY = B + back[0];
      const backX = A + back[1];
      if (isValid(backY, backX)) {
        B = backY;
        A = backX;
      } else {
        break;
      }
    }
  }
  console.log(cnt);

  process.exit();
});
