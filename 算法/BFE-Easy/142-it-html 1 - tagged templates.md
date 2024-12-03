## [142. lit-html 1 - tagged templates | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/lit-html-1-tagged-templates)

这道题要求实现两个函数 `html` 和 `render`，用于模仿 `lit-html` 的基本功能。`html` 是一个模板函数，用于将模板字符串和动态数据合并成一个完整的 HTML 字符串；`render` 用于将生成的 HTML 字符串插入到指定的 DOM 容器中。当前需求只实现最基本的功能，并不需要考虑 `lit-html` 的高效更新机制，`html` 可以直接返回拼接后的完整 HTML 字符串，而 `render` 只需将该字符串设置为容器的 `innerHTML`。

解题方案如下：`html` 函数使用模板字符串标签函数的特性，它接受两个参数：一个是模板字符串的静态部分数组 `strs`，另一个是动态插值部分组成的数组 `keys`。通过 `Array.map()` 遍历 `strs`，将静态字符串和对应的动态插值部分拼接起来，如果某个索引的动态数据不存在，则默认插入空字符串。最终将所有拼接结果通过 `join('')` 组合成完整的 HTML 字符串并返回。`render` 函数则非常简单，将 `html` 函数生成的字符串作为 `innerHTML` 插入到指定容器的 DOM 中。整体时间复杂度为 O(n)，其中 n 是模板字符串的总长度。这种实现方式逻辑清晰，满足题目要求，为后续实现高效的 DOM 更新机制打下基础。



```js
const html = (strs, ...keys) =>
  strs.map((str, i) => `${str}${keys[i] ?? ''}`).join('')

const render = (result, container) => {
  container.innerHTML = result
}
```

