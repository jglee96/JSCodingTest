const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < arr.length; i += 1) {
  for (let j = i; j > 0; j -= 1) {
    if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    else break;
  }
}

console.log(arr);
