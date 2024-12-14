## [3. implement Array.prototype.flat() | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-Array-prototype.flat)

这道题要求实现一个自定义的 flat 函数，用来将嵌套数组按照指定的深度展开。输入包括一个数组 arr 和一个可选的整数参数 depth，默认值为 1，表示展开一层嵌套。函数的返回值是一个新的数组，它是输入数组展开后的结果。例如，flat([1, [2], [3, [4]]], 1) 会返回 [1, 2, 3, [4]]，而 flat([1, [2], [3, [4]]], 2) 会返回 [1, 2, 3, 4]。

<audio src="..\..\mp3\这道题要求实现一个自定义的 f.mp3"></audio>

```js
// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
/**
 * @param { Array } arr
 * @param { number } depth
 */
function flat(arr, depth = 1) {
  return depth ?
    arr.reduce((acc, curr) => {
      return [...acc, ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr])];
    }, []) : arr;
}
```

<audio src="..\..\mp3\解题方案使用递归和数组的 re.mp3"></audio>