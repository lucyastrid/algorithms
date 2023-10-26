class UnionFind {
  parent: number[];
  count: number;

  constructor(n: number) {
    this.count = n;
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    } 
  }

  find(p: number): number {
    const parent = this.parent;

    while (p !== parent[p]) {
      // path compression
      parent[p] = parent[parent[p]];

      // move to parent
      p = parent[p];  
    }

    return p;
  }

  union(p: number, q: number): void {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootP === rootQ) return;

    const parent = this.parent;
    parent[rootP] = rootQ;
    this.count--;
  }

}