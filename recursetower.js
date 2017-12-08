module.exports = (data) => {
  const tower = new Tower(data);
  return tower.bottomNode;
}

class Tower {
  constructor(data) {
    this.nodes = data.split('/n').map(node => new Node(node));
  }

  nodeIsChild(potentialChildNode) {
    return this.nodes.find(
      node => otherNode.children.includes(potentialChildNode)
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
    this.name = this.data.split(' ')[0];

    this.weight = this.data.split('(')[1].split(')')[0]; // lol
    if (this.data.includes('->')) {
      this.children = this.data.split('->')[1].split(',');
    } else {
      this.children = [];
    }
  }

  get hasChildren() {
    return !!this.children.length
  }
}