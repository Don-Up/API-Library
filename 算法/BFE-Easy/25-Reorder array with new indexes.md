## [25. Reorder array with new indexes | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/reorder-array-with-new-indexes)

这道题要求根据一个索引数组 `newOrder` 来重新排列数组 `items`，使得 `items[i]` 被移动到 `newOrder[i]` 指定的新索引位置。输入包括两个数组：`items` 是需要重新排序的数组，`newOrder` 是目标索引数组，两者长度相同，且输入始终有效（不需要处理边界情况）。函数不返回结果，而是直接对 `items` 进行原地修改。例如，`items = ['A', 'B', 'C', 'D', 'E', 'F']` 和 `newOrder = [1, 5, 4, 3, 2, 0]`，排序后 `items` 应变为 `['F', 'A', 'E', 'D', 'C', 'B']`。

<audio src="..\..\mp3\这道题要求根据一个索引数组 `.mp3"></audio>

```js
/**
 * @param { any[] } items
 * @param { number[] } newOrder
 * @returns {void}
 */
function sort(items, newOrder) {
   // keep swaping, until all elements are updated
   
   for (let i = 0; i < newOrder.length; i++) {
     while (newOrder[i] !== i) {
       const to = newOrder[i];
       [newOrder[i], newOrder[to]] = [newOrder[to], newOrder[i]];
       [items[i], items[to]] = [items[to], items[i]]
     }
   }
}
```

<audio src="..\..\mp3\解题方案通过循环和交换实现原地.mp3"></audio>