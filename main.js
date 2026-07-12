// simple graph using adjacency list
class Graph {
    constructor(directed = false) {
      this.adj = {};
      this.directed = directed;
    }
  
    // add vertex
    addVertex(v) {
      if (!this.adj[v]) {
        this.adj[v] = [];
      }
    }
  
    // add edge
    addEdge(v1, v2) {
      this.addVertex(v1);
      this.addVertex(v2);
  
      this.adj[v1].push(v2);
  
      if (!this.directed) {
        this.adj[v2].push(v1);
      }
    }
  
    // remove edge
    removeEdge(v1, v2) {
      this.adj[v1] = this.adj[v1].filter(v => v !== v2);
  
      if (!this.directed) {
        this.adj[v2] = this.adj[v2].filter(v => v !== v1);
      }
    }
  
    // check edge
    hasEdge(v1, v2) {
      return this.adj[v1] && this.adj[v1].includes(v2);
    }
  
    // print graph
    print() {
      for (let v in this.adj) {
        console.log(v + " -> " + this.adj[v].join(", "));
      }
    }
  
    // DFS
    dfs(start) {
      let visited = {};
      let result = [];
  
      const go = (v) => {
        visited[v] = true;
        result.push(v);
  
        for (let n of this.adj[v]) {
          if (!visited[n]) {
            go(n);
          }
        }
      };
  
      go(start);
      console.log("DFS:", result.join(" -> "));
    }
  
    // BFS
    bfs(start) {
      let visited = {};
      let queue = [start];
      let result = [];
  
      visited[start] = true;
  
      while (queue.length > 0) {
        let v = queue.shift();
        result.push(v);
  
        for (let n of this.adj[v]) {
          if (!visited[n]) {
            visited[n] = true;
            queue.push(n);
          }
        }
      }
  
      console.log("BFS:", result.join(" -> "));
    }
  }
  
  
  // ===== TEST =====
  let g = new Graph(false); // undirected
  
  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  
  g.print();
  
  g.dfs("A");
  g.bfs("A");