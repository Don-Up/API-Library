## [89. Next Right Sibling | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/Next-Right-Sibiling)

这道题要求在一个 DOM 树中找到指定目标元素的下一个右兄弟节点（Next Right Sibling）。右兄弟节点是指在同一层级中，目标元素右侧的下一个节点。需要注意的是，右兄弟节点不一定有相同的父节点，若目标元素没有右兄弟节点，则返回 `null`。输入是 DOM 树的根节点 `root` 和目标元素 `target`，输出是目标元素的下一个右兄弟节点或 `null`。

![img](https://cdn.bfe.dev/bfe/img/I8ncH1ncdGaBXV3nwPH061w1MmdqNR9p_1169x546_1597852405395.png)

<audio src="..\..\mp3\这道题要求在一个DOM树中找到.mp3"></audio>

```js

/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
  if (!root) {
    return null;
  }
  const queue = [root, null];
  while(queue.length) {
    const node = queue.shift();
    if (node === target) {
      return queue.shift();
    } else if (node === null && queue.length) {
      queue.push(null);
    } else {
      queue.push(...node.children);
    }
  }
  return null;
}
```

<audio src="..\..\mp3\解题方案使用广度优先搜索（BF.mp3"></audio>

