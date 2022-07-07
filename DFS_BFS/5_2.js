const queue = [];

queue.push(5);
queue.push(2);
queue.push(3);
queue.push(7);
queue.shift();
queue.push(1);
queue.push(4);
queue.shift();

// 순서는 상황따라 사용
console.log(queue);
console.log(queue.reverse());
