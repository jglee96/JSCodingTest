const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < arr.length; i += 1) {
  let min_idx = i;
  for (let j = i + 1; j < arr.length; j += 1) {
    if (arr[min_idx] > arr[j]) min_idx = j;
  }
  [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
}

console.log(arr);
