/* eslint-disable class-methods-use-this */
/* eslint-disable radix */
/* eslint-disable */
import TreeNode from './treeNode';
import sortArray from './sortArray';
import Queue from './queue';

export default class BinaryTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  buildTree(array) {
    const arr = sortArray(array);
    const arrStart = 0;
    const arrEnd = arr.length - 1;

    this.root = this.createBST(arr, arrStart, arrEnd);
  }

  // recursively create a BST from a sorted array
  createBST(arr, start, end) {
    if (start > end) { return null; }

    const middle = parseInt((start + end) / 2);
    const newNode = new TreeNode(arr[middle]);

    newNode.leftNode = this.createBST(arr, start, middle - 1); // recursion is black magic
    newNode.rightNode = this.createBST(arr, middle + 1, end);

    return newNode;
  }

  insert(data, node = this.root) {
    let currentNode = node;

    if (this.root === null) {
      throw new Error('The tree is empty!');
    }

    if (data > currentNode.data) {
      if (currentNode.rightNode === null) {
        currentNode.rightNode = new TreeNode(data);
        return;
      }
      currentNode = currentNode.rightNode;
      this.insert(data, currentNode);
    } else if (data < currentNode.data) {
      if (currentNode.leftNode === null) {
        currentNode.leftNode = new TreeNode(data);
        return;
      }
      currentNode = currentNode.leftNode;
      this.insert(data, currentNode);
    }
  }

  deleteItem(data) {
    const node = this.find(data);
    if (node === null) { return; }
    const { currentNode } = node;
    const { previousNode } = node;

    if (currentNode.leftNode === null && currentNode.rightNode === null) {
      if (previousNode === null) { this.root = null; }
      if (previousNode.leftNode === currentNode) {
        previousNode.leftNode = null;
      } else { previousNode.rightNode = null; }
    } else if (currentNode.leftNode !== null && currentNode.rightNode === null) {
      if (previousNode === null) { this.root = currentNode.leftNode; }
      if (previousNode.leftNode === currentNode) {
        previousNode.leftNode = currentNode.leftNode;
      } else { previousNode.rightNode = currentNode.leftNode; }
    } else if (currentNode.rightNode !== null && currentNode.leftNode === null) {
      if (previousNode === null) { this.root = currentNode.rightNode; }
      if (previousNode.leftNode === currentNode) {
        previousNode.leftNode = currentNode.rightNode;
      } else { previousNode.rightNode = currentNode.rightNode; }
    } else if (currentNode.rightNode !== null && currentNode.leftNode !== null) {
      if (currentNode.rightNode.leftNode === null) {
        currentNode.data = currentNode.rightNode.data;
        currentNode.rightNode = currentNode.rightNode.rightNode;
      } else {
        const inheritingChild = this.findSmallestChildNode(currentNode.rightNode);
        currentNode.data = inheritingChild.node.data;
        inheritingChild.previousNode.leftNode = inheritingChild.node.rightNode;
      }
    }
  }

  findSmallestChildNode(startNode) {
    let node = startNode;
    let previousNode = null;

    while (node.leftNode !== null) {
      previousNode = node;
      node = node.leftNode;
    }

    return { node, previousNode };
  }

  find(data) {
    if (this.root === null) { throw new Error('The tree is empty!'); }

    let currentNode = this.root;
    let previousNode = null;

    while (data !== currentNode.data) {
      if (data < currentNode.data) {
        previousNode = currentNode;
        currentNode = currentNode.leftNode;
        if (currentNode === null) { return null; }
      } else if (data > currentNode.data) {
        previousNode = currentNode;
        currentNode = currentNode.rightNode;
        if (currentNode === null) { return null; }
      }
    }

    return { currentNode, previousNode };
  }

  /**
   * Traverses a BST in a breadth level and executes a function on each if provided.
   * @param {*} rootNode - Starting node of a tree.
   * @param {*} callback - If a callback is not provided returns array of values.
   * @returns
   */
  levelOrder(node, callback) {
    const result = [];
    const queue = new Queue();

    if (node === null) { throw new Error('The tree is empty!'); }

    queue.enqueue(node);
    while (!queue.isEmpty()) {
      const currentNode = queue.peek();
      if (callback) {
        callback(currentNode);
      } else {
        result.push(currentNode.data);
      }
      queue.dequeue();
      if (currentNode.leftNode) { queue.enqueue(currentNode.leftNode); }
      if (currentNode.rightNode) { queue.enqueue(currentNode.rightNode); }
    }

    return result;
  }

  inOrder(node, callback) {
    if (node === null) {
      return;
    }

    this.inOrder(node.leftNode, callback);
    callback(node);
    this.inOrder(node.rightNode, callback);
  }

  preOrder(node, callback) {
    if (node === null) {
      return;
    }
  
    callback(node); // Process the current node first
    this.preOrder(node.leftNode, callback);
    this.preOrder(node.rightNode, callback);
  }

  postOrder(node, callback) {
    if (node === null) {
      return;
    }
  
    this.postOrder(node.leftNode, callback);
    this.postOrder(node.rightNode, callback);
    callback(node); // Process the current node last
  }

  height(node) {
    if (node === null) { return 0; }

    let leftHeight = this.height(node.leftNode);
    let rightHeight = this.height(node.rightNode);

    if (rightHeight > leftHeight) { return (rightHeight + 1); }
    else { return (leftHeight + 1); }
  }

  depth(node) {
    if (node == null) { return 0; }
    else {
      // compute the depth of each subtree
      let lDepth = this.depth(node.leftNode);
      let rDepth = this.depth(node.rightNode);

      // use the larger one
      if (lDepth > rDepth) { return (lDepth + 1); }
      else { return (rDepth + 1); }
    }
  }

  isBalanced(node) {
    if (node === null) { return null; }

    let leftHeight = this.height(node.leftNode);
    let rightHeight = this.height(node.rightNode);

    let heightDifference = Math.abs(leftHeight - rightHeight);
    if (heightDifference > 1) { return false; }

    this.isBalanced(node.leftNode);
    this.isBalanced(node.rightNode);
    return true;
  }

  rebalance(tree) {
    this.buildTree(this.levelOrder(tree.root));
  }

  // print tree in the console
  prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) { return; }

    if (node.rightNode !== null) {
      this.prettyPrint(node.rightNode, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }

    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

    if (node.leftNode !== null) {
      this.prettyPrint(node.leftNode, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}
