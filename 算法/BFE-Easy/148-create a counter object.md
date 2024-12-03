## [148. create a counter object | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/create-a-counter-object)

这道题要求实现一个 `createCounter` 函数，用于创建一个对象，这个对象有一个 `count` 属性。每次访问 `count` 属性时，其值会递增，初始值为 0。同时，`count` 属性的值不能被手动修改（即不可被重新赋值）。输入是无参数，输出是一个对象，包含只能递增的 `count` 属性。

解题方案是利用对象的访问器属性（`getter`）来动态计算 `count` 的值，而不是直接存储一个固定值。首先在 `createCounter` 函数中定义一个私有变量 `counter`，初始值设为 -1（这样第一次访问时会返回 0）。然后返回一个对象，该对象使用 `get` 定义了 `count` 属性，每次访问时会将 `counter` 自增 1 并返回当前值。由于 `count` 是通过 `get` 定义的，只能读取，无法直接赋值修改，从而满足题目中“不能被手动改变”的要求。这种方法利用了 JavaScript 的访问器特性，逻辑清晰且简单，时间和空间复杂度均为 O(1)。

```js
function createCounter() {
  let counter = -1;
  return {
    get count() {
      counter += 1;
      return counter;
    }
  }
}
```

