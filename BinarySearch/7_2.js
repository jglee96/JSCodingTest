function binary_search_recursive(array, target, start, end) {
  if (start > end) return;

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === target) return mid;
  else if (array[mid] > target)
    return binary_search_recursive(array, target, start, mid - 1);
  else return binary_search_recursive(array, target, mid + 1, end);
}

function binary_search_loop(array, target, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (array[mid] === target) return mid;
    else if (array[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
}

const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log(binary_search_recursive(array, 5, 0, array.length - 1));
console.log(binary_search_loop(array, 5, 0, array.length - 1));
