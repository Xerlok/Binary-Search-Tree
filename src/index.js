/* eslint-disable */
import './styles.css';
import BinaryTree from './binaryTree';
import sortArray from './sortArray';

const newTree = new BinaryTree();
console.log(sortArray([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 234, 45, 5, 66, 567, 8888, 234, 121, 111, 789]));
newTree.buildTree(sortArray([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 234, 45, 5, 66, 567, 8888, 234, 121, 111, 789]));
newTree.prettyPrint(newTree.root);
console.log(newTree.root);
