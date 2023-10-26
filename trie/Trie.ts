class TrieNode extends Map {
  isEnded: boolean;
  constructor() {
    super();
    this.isEnded = false;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode;
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.has(char)) {
        const newNode = new TrieNode;
        node.set(char, newNode);
      }
      node = node.get(char)
    }
    node.isEnded = true;
  }

  search(word: string): boolean {
    let node = this.root; 
    for (const char of word) {
      if (!node.has(char)) {
        return false;
      }
      node = node.get(char)
    }

    return node.isEnded === true;
  }

  startsWith(prefix: string): boolean {
    let node = this.root; 
    for (const char of prefix) {
      if (!node.has(char)) {
        return false;
      }
      node = node.get(char)
    }

    return true;
  }
}