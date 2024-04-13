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
console.log(result);
result = [];
newTree.inOrder(newTree.root, printNodesData);
console.log(result);
result = [];
newTree.prettyPrint(newTree.root);
