module.exports = (data) => {
  const tower = new Tower(data);
  return tower.bottomNode.name;
}

class Tower {
  constructor(data) {
    this.nodes = data.split('\n').map(node => new Node(node));
  }

  nodeIsChild(potentialChildNode) {
    return this.nodes.find(
      node => node.children.includes(potentialChildNode.name)
    );
  }

  get bottomNode() {
    return this.nodes.find((node) =>
      node.hasChildren && !this.nodeIsChild(node)
    );
  }
}

class Node {
  constructor(nodeString) {
    this.data = nodeString;
    this.name = this.data.split(' ')[0].trim();

    this.weight = this.data.split('(')[1].split(')')[0]; // lol
    if (this.data.includes('->')) {
      this.children = this.data.split('->')[1].split(',').map(s => s.trim());
    } else {
      this.children = [];
    }
  }

  get hasChildren() {
    return !!this.children.length
  }
}