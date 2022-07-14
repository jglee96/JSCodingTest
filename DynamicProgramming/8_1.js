function fibo(x) {
  if (x === 1 || x === 2) return 1;
  return fibo(x - 1) + fibo(x - 2);
}

const d = Array.from({ length: 100 }, () => 0);

function fibo_recursive(x) {
  if (x === 1 || x === 2) return 1;

  if (d[x] != 0) return d[x];

  d[x] = fibo_recursive(x - 1) + fibo_recursive(x - 2);
  return d[x];
}

function fibo_loop(x) {
  const m = Array.from({ length: 100 }, () => 0);
  m[1] = 1;
  m[2] = 1;
  for (let i = 3; i < x + 1; i += 1) {
    m[i] = m[i - 1] + m[i - 2];
  }

  return m[x];
}

// console.log(fibo(99));
console.log(fibo_recursive(99));
console.log(fibo_loop(99));
