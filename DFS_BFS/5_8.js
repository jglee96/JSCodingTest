function dfs(graph, v, visited) {
    // 현재 노드 방문 처리
    visited[v] = true;
    console.log(v, " ");
    graph[v].forEach(node => {
        if (visited[node] === false) dfs(graph, node, visited);
    });
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
    [1, 7]
];

const visited = new Array(9);
visited.fill(false, 0, visited.length);

dfs(graph, 1, visited);