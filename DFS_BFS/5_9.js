function bfs(graph, start, visited) {
  const queue = [start];
  visited[start] = true;
  while (queue.length !== 0) {
    const v = queue.shift();
    console.log(v);
    graph[v].forEach((node) => {
      if (visited[node] === false) {
        queue.push(node);
        visited[node] = true;
      }
    });
  }
}

graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = new Array(9);
visited.fill(false, 0, visited.length);

bfs(graph, 1, visited);
