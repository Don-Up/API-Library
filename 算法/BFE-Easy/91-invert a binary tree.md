## [91. invert a binary tree | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/invert-a-binary-tree)

这道题要求对一个二叉树进行翻转操作，也就是将每个节点的左子节点和右子节点交换。输入是一个二叉树的根节点 `node`，输出是翻转后的二叉树的根节点。翻转后，二叉树的结构与原始树是镜像对称的。

![img](https://cdn.bfe.dev/bfe/img/12BVC9SRg5VfcADGpAjNN6ONgh8BlrDC_1068x546_1597951636139.png)

<audio src="..\..\mp3\这道题要求对一个二叉树进行翻转.mp3"></audio>

```js
// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }
/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  if (!node) return null;
  [node.left, node.right] = [invert(node.right), invert(node.left)];
  return node;
}
```

<audio src="..\..\mp3\解题方案使用递归的方式来实现翻.mp3"></audio>