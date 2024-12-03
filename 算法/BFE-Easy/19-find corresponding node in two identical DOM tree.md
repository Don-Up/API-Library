## [19. find corresponding node in two identical DOM tree | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree)

### 题干简述

这道题要求在两个相同的 DOM 树 `A` 和 `B` 中，找到一个节点 `a`（在树 `A` 中）的对应节点 `b`（在树 `B` 中）。两个节点是对应的意思是位置相同，即它们在各自树中相对于根节点的位置是相同的。输入是树的根节点 `rootA` 和 `rootB`，以及目标节点 `nodeA`（目标节点在树 `A` 中），输出是树 `B` 中对应的节点 `nodeB`。

### 解决方案

#### 方法 1：递归解决方案

递归地同时遍历两棵树，找到目标节点的对应节点。

```javascript
const findCorrespondingNodeRecursive = (rootA, rootB, target) => {
  if (rootA === target) return rootB;

  for (let i = 0; i < rootA.children.length; i++) {
    const result = findCorrespondingNodeRecursive(rootA.children[i], rootB.children[i], target);
    if (result) return result;
  }

  return null;
};
```

#### 方法 2：迭代解决方案

使用队列同时遍历两棵树（广度优先遍历），找到目标节点的对应节点。

```javascript
const findCorrespondingNodeIterative = (rootA, rootB, target) => {
  const queueA = [rootA];
  const queueB = [rootB];

  while (queueA.length > 0) {
    const currentA = queueA.shift();
    const currentB = queueB.shift();

    if (currentA === target) return currentB;

    for (let i = 0; i < currentA.children.length; i++) {
      queueA.push(currentA.children[i]);
      queueB.push(currentB.children[i]);
    }
  }

  return null;
};
```

#### 方法 3：利用 DOM API

如果我们利用 DOM 特性，可以直接通过 `Node` 的 `path` 或 `index` 信息找到对应节点。比如通过 `Node.parentNode` 和 `Node.childNodes` 获取相对路径。

```javascript
const findCorrespondingNodeWithPath = (rootA, rootB, target) => {
  const path = [];
  let current = target;

  // 记录从目标节点到根节点的路径
  while (current !== rootA) {
    const parent = current.parentNode;
    const index = Array.prototype.indexOf.call(parent.children, current);
    path.unshift(index);
    current = parent;
  }

  // 根据路径在树 B 中找到对应节点
  let result = rootB;
  for (const index of path) {
    result = result.children[index];
  }

  return result;
};
```

---

### 解题方案解析

#### 方法 1：递归
- **思路**：递归同时遍历两棵树，遇到目标节点时返回对应节点。
- **时间复杂度**：O(n)，其中 `n` 是树的节点数，因为需要遍历树的全部节点。
- **空间复杂度**：O(h)，其中 `h` 是树的高度，递归调用栈占用的空间。

#### 方法 2：迭代
- **思路**：使用队列同时遍历两棵树，找到对应节点时返回。
- **时间复杂度**：O(n)，因为每个节点都需要访问一次。
- **空间复杂度**：O(w)，其中 `w` 是树的最大宽度，队列占用的空间。

#### 方法 3：利用 DOM API
- **思路**：记录目标节点到根节点的路径，然后根据路径在另一棵树中找到对应的节点。
- **时间复杂度**：O(h)`，其中 `h` 是树的高度，因为需要从目标节点回溯到根节点，然后再沿路径遍历。
- **空间复杂度**：O(h)，因为需要存储路径信息。

---

### 总结

- **递归** 和 **迭代** 适用于一般的树结构，逻辑清晰，时间复杂度相同，递归需要占用调用栈空间，而迭代需要额外的队列空间。
- **利用 DOM API** 是专门针对 DOM 树的优化方案，通过直接记录路径来减少遍历操作，性能更优，特别是当目标节点离根节点较近时。
- 对于深度较小但宽度大的树，**方法 3** 最优；对于深度较大的树，**方法 2（迭代）** 更优。