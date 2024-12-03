## [154. Two-way binding | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/two-way-binding)

这道题要求实现一个双向绑定函数 `model(state, element)`，用于将一个对象 `state` 的 `value` 属性与一个 HTML 输入框元素 `element` 的值进行绑定。双向绑定的效果是：1）当 `state.value` 改变时，输入框的值 `element.value` 会自动更新；2）当用户修改输入框的值并触发 `change` 事件时，`state.value` 会同步更新为输入框的新值。输入参数是一个包含 `value` 属性的对象 `state` 和一个 HTML 输入框元素 `element`，函数没有返回值。

解题方案分为两步：第一步，初始化状态，将输入框的值与 `state.value` 同步；第二步，实现双向绑定。通过 `Object.defineProperty` 重写 `state.value` 的 `getter` 和 `setter` 方法，使得 `state.value` 的读取直接返回输入框的当前值，而设置 `state.value` 时会同步更新输入框的值。然后为输入框绑定 `change` 事件监听器，当用户修改输入框内容时，将新值写入 `state.value`，从而触发其 `setter` 方法，完成同步更新。这样的实现确保数据流在对象和 DOM 元素之间保持一致。时间复杂度为 O(1)，因为绑定和更新都是即时的；空间复杂度也为 O(1)，因为仅使用了少量额外的存储。这种基于 `Object.defineProperty` 和事件监听器的双向绑定方式简单高效，适用于简单的场景。

```js
/**
 * @param {{value: string}} state
 * @param {HTMLInputElement} element
 */
function model(state, element) {
  // 1. initialized the element value with state value
  element.value = state.value
  // 2. Two conditions: 
  // (1) Update the state value, then it will also update element value with new state value
  // (2) Update input element value, then it will also update state value with element value
  Object.defineProperty(state, 'value', {
    get() { return element.value },
    set(new_value) { element.value = new_value; return }
  })
  element.addEventListener('change', (event) => {
    // this will update state value then `state's` setter method will update input value
    state.value = event.target.value;
  })
}
```

