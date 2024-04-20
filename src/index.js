/* eslint-disable */
import './styles.css';
import BinaryTree from './binaryTree';
import generateArray from './arrayGenerator';

// driver code (usage example)
const newTree = new BinaryTree();
const randomArray = generateArray(20);
let result = [];

function printNodesData(node) {
    result.push(node.data);
}

newTree.buildTree(randomArray);
console.log("The tree is balanced: " + newTree.isBalanced(newTree.root));
newTree.levelOrder(newTree.root, printNodesData);
console.log("Level order is: " + result);
result = [];
newTree.inOrder(newTree.root, printNodesData);
console.log("In order is: " + result);
result = [];
newTree.preOrder(newTree.root, printNodesData);
console.log("Pre order is: " + result);
result = [];
newTree.postOrder(newTree.root, printNodesData);
console.log("Post Order is: " + result);
result = [];
newTree.insert(101);
newTree.insert(102);
newTree.insert(103);
newTree.insert(104);
newTree.insert(105);
newTree.insert(106);
newTree.insert(107);
console.log("Inserting extra nodes... ");
console.log("The tree is balanced: " + newTree.isBalanced(newTree.root));
newTree.rebalance(newTree);
console.log("Rebalancing... ");
console.log("The tree is balanced: " + newTree.isBalanced(newTree.root));
newTree.levelOrder(newTree.root, printNodesData);
console.log("Level order is: " + result);
result = [];
newTree.inOrder(newTree.root, printNodesData);
console.log("In order is: " + result);
result = [];
newTree.preOrder(newTree.root, printNodesData);
console.log("Pre order is: " + result);
result = [];
newTree.postOrder(newTree.root, printNodesData);
console.log("Post Order is: " + result);
result = [];
console.log("Height is: " + newTree.height(newTree.root));
console.log("Depth is: " + newTree.depth(newTree.root));
newTree.prettyPrint(newTree.root);
