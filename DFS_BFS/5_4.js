function recursive_function(i) {
  if (i === 100) return;
  else {
    console.log(
      `${i} 번째 재귀 함수에서 ${i + 1} 번째 재귀 함수를 호출합니다.`
    );
    recursive_function(i + 1);
    console.log(`${i} 번째 재귀 함수를 종료합니다.`);
  }
}

recursive_function(1);
