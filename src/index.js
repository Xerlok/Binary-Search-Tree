/* eslint-disable */
import './styles.css';
import BinaryTree from './binaryTree';

// driver code (usage example)
const newTree = new BinaryTree();
newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 10, 12, 11, 15, 16, 25, 23, 45, 67, 66, 87, 99, 67, 6345, 324, 234, 45, 5, 66, 567, 8888, 234, 121, 111, 789]);
newTree.insert(24);
newTree.deleteItem(7);
newTree.prettyPrint(newTree.root);
