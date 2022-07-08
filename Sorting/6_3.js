function quick_sort(arr) {
  if (arr.length <= 1) return arr;
  const p = arr[0];
  const tail = arr.slice(1);

  const left = tail.filter((value) => value <= p);
  const right = tail.filter((value) => value > p);

  return [...quick_sort(left), p, ...quick_sort(right)];
}

const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

console.log(quick_sort(arr));
