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

newTree.buildTree([4,4,55,4,3,2,6,7,8,87,65,54,32,12,34,45,7]);
newTree.insert(6);
newTree.deleteItem(5);
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
console.log("The tree is balanced: " + newTree.isBalanced(newTree.root));
newTree.prettyPrint(newTree.root);
