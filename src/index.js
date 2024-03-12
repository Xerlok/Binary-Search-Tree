/* eslint-disable */
import './styles.css';
import BinaryTree from './binaryTree';
import generateArray from './arrayGenerator';

// driver code (usage example)
const newTree = new BinaryTree();
const randomArray = generateArray(30)
newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
newTree.insert(6);
newTree.deleteItem(5);
newTree.prettyPrint(newTree.root);
