## [140. Virtual DOM III - Functional Component | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/virtual-DOM-III-Functional-Component)

这道题要求在之前实现的 `createElement` 和 `render` 函数基础上，支持自定义的**函数式组件**（Functional Components）。函数式组件是一个函数，接受一个包含 `props` 的对象作为参数，其中 `props` 包含 `children`、`className` 等属性，函数返回一个虚拟 DOM（通过调用 `createElement` 构造）。目标是让自定义函数式组件（如 `Title`, `Button` 等）和内置 HTML 标签（如 `div`, `p` 等）一样可以通过 `createElement` 和 `render` 使用，从而实现更加灵活的虚拟 DOM 树结构。

解题方案的核心是扩展 `createElement`，使其能够区分传入的 `type` 是内置 HTML 标签（字符串）还是自定义函数式组件（函数）。如果 `type` 是函数，则直接调用该函数，将 `props` 和 `children` 作为参数传入，并返回由函数生成的虚拟 DOM 结构；否则，按照之前的逻辑创建一个包含 `type` 和 `props` 的虚拟 DOM 对象。在 `render` 函数上无需修改，因为函数式组件最终会返回标准的虚拟 DOM 结构，`render` 会递归解析并生成实际的 HTML 元素。这样，通过为函数式组件提供标准化的接口（接收 `props` 和返回虚拟 DOM），实现了对其的支持，同时保持代码简洁和高效。时间复杂度仍然是 O(n)，其中 `n` 是虚拟 DOM 树中节点的数量，因每个节点被访问一次并递归渲染。此设计逻辑清晰，能够很好地扩展和支持复杂的组件化结构。

```js
/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 * type FunctionComponent = (props: object) => MyElement
 */
/**
 * @param { string | FunctionComponent } type - valid HTML tag name or Function Component
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  if (typeof type === 'function') {
    return type({ ...props, children });
  }
  return {
    type, 
    props: {
      ...props,
      children,
    }
  }
}
/**
 * @param { MyElement }
 * @returns { HTMLElement } 
 */
function render(json) {
  if (typeof json === 'string') {
    return document.createTextNode(json);
  }
  const {type, props: { children, ...attrs}} = json;
  const node = document.createElement(type);
  for(let [attr, value] of Object.entries(attrs)) {
    node[attr] = value;
  }
  const childrenArr = Array.isArray(children) ? children : [children];
  for (let child of childrenArr) {
    node.append(render(child));
  }
  return node;
}
```

