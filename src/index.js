/* eslint-disable */
import './styles.css';
import BinaryTree from './binaryTree';
import generateArray from './arrayGenerator';

// driver code (usage example)
const newTree = new BinaryTree();
const randomArray = generateArray(20);

function printNodesData(node) {
  if (node) {
    const result = [];
    result.push(node.data);
    console.log(result);
  }
}

newTree.buildTree([4,4,55,4,3,2,6,7,8,87,65,54,32,12,34,45,7]);
newTree.insert(6);
newTree.deleteItem(5);
newTree.levelOrder(newTree.root, (node) => printNodesData(node));
newTree.inOrder(newTree.root, (node) => printNodesData(node));
newTree.prettyPrint(newTree.root);
