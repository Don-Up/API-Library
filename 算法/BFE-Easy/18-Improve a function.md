## [18. Improve a function | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/improve-a-function)

这道题的目标是实现一个函数 `excludeItems`，用来从一个对象数组 `items` 中移除满足 `excludes` 条件的对象。`items` 是一个包含至少三个属性的对象数组，`excludes` 是一个由键值对对象组成的数组，表示需要排除的条件。函数需要返回过滤后的数组，其中不包含满足 `excludes` 条件的对象。

### 功能分析
原始的 `excludeItems` 函数遍历 `excludes` 数组，对于 `excludes` 中的每对键值对 `{k, v}`，逐一过滤 `items`，移除其中键 `k` 的值等于 `v` 的对象。最终返回不满足任何 `excludes` 条件的剩余对象数组。

### 是否按预期工作？
原函数并没有按预期工作，因为 `items.filter(item => item[pair.k] === item[pair.v])` 的逻辑是错误的。这段代码检查的是 `item[pair.k]` 是否与 `item[pair.v]` 相等，而不是与 `pair.v` 相等。正确的逻辑应该是 `item[pair.k] !== pair.v`。因此，原函数无法正确过滤数据。

### 时间复杂度分析
原始实现的时间复杂度为 **O(n * m)**，其中 `n` 是 `items` 的长度，`m` 是 `excludes` 的长度。每次遍历 `excludes` 都需要对 `items` 数组进行一次过滤，导致嵌套循环。

### 优化后的实现及时间复杂度
优化后的方法通过使用 `Map` 和 `Set` 来预处理 `excludes`，将其转换为一个快速查找的数据结构 `excludeMap`，其中键是属性名，值是需要排除的值的集合。这样，过滤 `items` 时，可以一次性检查每个对象是否满足任何排除条件，从而避免多次遍历 `excludes`。

优化后步骤：
1. 遍历 `excludes` 数组，构建一个 `Map`，键为属性名，值为需要排除的值的 `Set`。这一步的时间复杂度为 **O(m)**。
2. 遍历 `items`，对于每个对象，只需检查其属性是否满足 `excludeMap` 中的条件。这一步的时间复杂度为 **O(n * k)**，其中 `k` 是对象的属性个数。

优化后的总体时间复杂度为 **O(m + n * k)**，相比原始的 **O(n * m)**，性能显著提升，特别是在 `excludes` 长度较大时。

### 优化方案简述
通过预处理 `excludes` 为 `Map`，将重复的条件检查转化为常数时间的查找操作，从而减少遍历次数。最终过滤 `items` 时只需一次遍历，并使用 `every` 方法高效检查所有属性是否满足排除条件。该方法逻辑清晰、性能高效，适用于大规模数据过滤场景。

```js
/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  // m k n
  // n * m
  
  // change exclude to Map<key, Set<value>>
  // m * k * 1
  
  // preprocess excludes array
  // avoid multiple for loop on items
  
  const excludeMap = new Map()
  for (let {k, v} of excludes) {
    if (!excludeMap.has(k)) {
      excludeMap.set(k, new Set())
    }
    excludeMap.get(k).add(v)
  }
  
  return items.filter(item => {
    return Object.keys(item).every(
      key => !excludeMap.has(key) || !excludeMap.get(key).has(item[key])
    )
  })
}

```

