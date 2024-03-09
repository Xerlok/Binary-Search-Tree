/* eslint-disable */
import './styles.css';
import BinaryTree from './binaryTree';
import sortArray from './sortArray';

const newTree = new BinaryTree();

newTree.buildTree(sortArray([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));
