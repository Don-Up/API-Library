## [15. implement a simple DOM wrapper to support method chaining like jQuery | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-a-simple-DOM-wrapper-to-support-method-chaining-like-jQuery)

这道题要求实现一个简单的 `$` 函数包装器，用于给 HTML 元素提供链式调用的能力。目标是封装一个对象，该对象有一个 `css` 方法，可以接受 CSS 属性和对应的值，并将这些样式应用到指定的元素上。最重要的是，每次调用 `css` 方法后应该返回该包装器本身，以实现链式调用功能。输入是一个 HTML 元素 `el`，输出是一个包装器对象，通过其 `css` 方法能够对元素设置样式并支持链式调用。

解题方案是通过返回一个自定义对象，该对象包含 `css` 方法。`css` 方法内部使用 JavaScript 的 `style` 属性动态设置元素的样式，访问样式属性时通过方括号语法（`el.style[property]`）以支持动态属性名。为了实现链式调用，`css` 方法在设置完样式后直接返回当前对象（`this`），从而允许多个 `css` 方法连续调用。整个逻辑简单清晰，时间复杂度为 O(1)（每次调用只设置一个样式属性），空间复杂度为 O(1)（没有额外存储）。这种实现方式是 jQuery 链式调用的基本原理之一，非常适合构建简单的链式接口。

```js
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function(property, value) {
      el.style[property] = value;
      return this;
    }
  }
}
```

