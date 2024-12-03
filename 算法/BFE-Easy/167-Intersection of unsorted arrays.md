## [167. Intersection of unsorted arrays | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/array-intersect)

这道题要求实现一个函数 `getIntersection`，用于找出两个数组的交集（即同时存在于两个数组中的元素）。输入是两个可能未排序且可能含有重复元素的数组 `arr1` 和 `arr2`，输出是一个数组，包含交集中的元素，要求输出不含重复元素，且顺序无要求。

解题方案使用了 `Set` 数据结构来去重并高效查找元素。首先将两个数组分别转换为集合 `a` 和 `b`，这样集合中的元素自然去除了重复项。然后通过过滤，将集合 `a` 中的每个元素检查是否存在于集合 `b` 中，保留那些存在于 `b` 中的元素，最终返回交集作为数组。整个过程利用了集合的高效查找特性，时间复杂度为 O(n + m)，其中 `n` 和 `m` 分别是两个数组的长度，因为需要遍历两个数组并构建集合。空间复杂度为 O(n + m)，因为需要存储两个集合。这个方法简洁高效，充分利用了集合的特性，适用于处理数组交集问题。

```js
/**

@param {any[]} arr1
@param {any[]} arr2
@returns {any[]}
*/
function getIntersection(arr1, arr2) {
    let a = new Set(arr1);
    let b = new Set(arr2);
    return [...a].filter(a => b.has(a));
}
```

