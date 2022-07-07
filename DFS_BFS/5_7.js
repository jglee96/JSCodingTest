const graph = new Array(3);

for (let i = 0; i < graph.length; i += 1) {
  graph[i] = new Array();
}

graph[0].push({ node: 1, dist: 7 });
graph[0].push({ node: 2, dist: 5 });

graph[1].push({ node: 0, dist: 7 });

graph[2].push({ node: 0, dist: 5 });

console.log(graph);
