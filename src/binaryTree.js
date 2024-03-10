/*eslint-disable*/
import TreeNode from './treeNode'

export default class BinaryTree {
  constructor() {
    this.root = null
    this.size = 0;
  }
  
  buildTree(arr) {
    let arrStart = arr[0];
    let arrEnd = arr.length-1;
    this.root = this.createBST(arr, arrStart, arrEnd);
  }

  createBST(arr, start, end) {
    if (start > end) { return null; }
    const middle = parseInt((start + end) / 2);
    let newNode = new TreeNode(arr[middle]);
    newNode.leftNode = this.createBST(arr, start, middle-1);
    newNode.rightNode = this.createBST(arr, middle+1, end);
    return newNode;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
      if (node === null) {
        return;
      }
      if (node.rightNode !== null) {
        this.prettyPrint(node.rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      if (node.leftNode !== null) {
        this.prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
  }
}
