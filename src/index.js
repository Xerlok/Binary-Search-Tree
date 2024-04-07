/* eslint-disable */
import './styles.css';
import BinaryTree from './binaryTree';
import generateArray from './arrayGenerator';

// driver code (usage example)
const newTree = new BinaryTree();
const randomArray = generateArray(20);
console.log(randomArray);
newTree.buildTree(randomArray);
newTree.insert(6);
newTree.deleteItem(5);
newTree.prettyPrint(newTree.root);
console.log(newTree.levelOrder());
