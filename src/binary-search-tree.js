const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.top = null
  }
  root() {
    return this.top;
  }

  add(data) {
    let node = new Node(data);

    if (!this.top) {
      this.top = node;
      return;
    }
    
    let currentNode = this.top;

    while (currentNode) {
      if (currentNode.data > node.data) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    if (!this.top) return false;

    let queue = [this.top];
    
    while (queue.length) {
      let result = queue.shift();

      if (result.data == data) return true;

      if (result.left) queue.push(result.left);
      if (result.right) queue.push(result.right);
    }
    return false;
  }

  find(data) {
    if (!this.top) return null;
    if (this.top.data == data) return this.top;
    let queue = [this.top];
    
    while (queue.length) {
      let result = queue.shift();

      if (result.data == data) return result;

      if (result.left) queue.push(result.left);
      if (result.right) queue.push(result.right);
    }
    return null;
  }

  remove(data) {
    this.top = removeNode(this.top, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        } else {
          let maxFromLeft = node.left;
          while (maxFromLeft.right) {
            maxFromLeft = maxFromLeft.right;
          }
          node.data = maxFromLeft.data;
          node.left = removeNode(node.left, data);
          return node;
        };
      };
    };
  }

  min() {
    if (!this.top) return null;

    let currentNode = this.top;

    while (currentNode.left) {
      currentNode = currentNode.left;
    };

    return currentNode.data;
  }

  max() {
    if (!this.top) return null;

    let currentNode = this.top;

    while (currentNode.right) {
      currentNode = currentNode.right;
    };

    return currentNode.data;
  };
}

module.exports = {
  BinarySearchTree
};