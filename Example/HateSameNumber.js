function solution(arr) {
  var answer = [];

  answer = arr.filter(
    (value, index) => index === 0 || value !== arr[index - 1]
  );

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
