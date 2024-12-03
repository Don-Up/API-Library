## [118. Virtual DOM II - createElement | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/virtual-dom-II-createElement)

这道题要求实现一个简单的 `createElement` 和 `render` 函数，类似于 React 的 `React.createElement` 和 `ReactDOM.render`，用于创建虚拟 DOM 并将其渲染为实际的 HTML 元素。`createElement` 接受三个参数：`type` 表示 HTML 标签名称，`props` 是元素的属性，如 `className` 或 `href`，`children` 是子节点，可以是字符串（表示文本节点）或自定义的虚拟 DOM 元素。`render` 函数接收由 `createElement` 构造的虚拟 DOM JSON 表示，递归地创建和组装实际的 HTML 元素并返回。

解题方案分为两部分：第一部分是 `createElement`，它构造并返回一个表示虚拟 DOM 的 JSON 对象，其结构包含 `type`（HTML 标签名）和 `props`（属性和子节点）。子节点通过 `...children` 收集，作为 `props.children` 存储。第二部分是 `render`，它递归地将虚拟 DOM 转为真实 DOM 元素。如果当前节点是字符串，则创建文本节点；如果是 JSON 对象，则通过 `document.createElement` 创建对应的 HTML 元素，并设置属性（如 `className` 和 `href`）；然后递归处理子节点，将其渲染为实际 DOM，并附加到当前节点中。最终返回生成的 DOM 元素。这种实现的时间复杂度是 O(n)，其中 n 是虚拟 DOM 的总节点数，因为每个节点都被访问一次；空间复杂度取决于递归调用栈的深度。这个实现是对 React 虚拟 DOM 和渲染机制的简化版本，可以帮助理解基本工作原理。

```js
/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 */
/**
 * @param { string } type - valid HTML tag name
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    }
  }
}
/**
 * @param {object} valid JSON presentation
 * @return {HTMLElement} 
 */
function render(json) {
  // create the top level emlement
  // recursively append the children
  // textnode
  if (typeof json === 'string') {
    return document.createTextNode(json)
  }
  
  // element
  const {type, props: {children, ...attrs}} = json
  const element = document.createElement(type)
  
  for (let [attr, value] of Object.entries(attrs)) {
    element[attr] = value
  }
  
  const childrenArr = Array.isArray(children) ? children : [children]
  
  for (let child of childrenArr) {
    element.append(render(child))
  }
  
  return element
}
```

