/* eslint-disable */
import './styles.css';
import BinaryTree from './binaryTree';
import sortArray from './sortArray';

const newTree = new BinaryTree();
newTree.buildTree(sortArray([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 234, 45, 5, 66, 567, 8888, 234, 121, 111, 789]));
newTree.insert(6);
newTree.insert(566);
newTree.insert(10);
newTree.insert(565);
newTree.insert(564);
newTree.insert(563);
newTree.insert(562);
newTree.prettyPrint(newTree.root);
console.log(newTree.root);
