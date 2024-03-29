/* eslint-disable class-methods-use-this */
/* eslint-disable radix */
/* eslint-disable */
import TreeNode from './treeNode';
import sortArray from './sortArray';

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
    let node = this.find(data);
    let currentNode = node.currentNode;
    let previousNode = node.previousNode;

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
      } else if (data > currentNode.data) {
        previousNode = currentNode;
        currentNode = currentNode.rightNode;
      }
    }

    if (currentNode === null) { throw new Error('No such data!'); }

    return {currentNode, previousNode};
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
