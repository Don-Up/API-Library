## [94. implement your own `Object.create` | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-your-own-Object-create)

这道题要求实现一个 `myObjectCreate` 函数，功能类似于 JavaScript 的 `Object.create()` 方法，用于创建一个新对象，并将其原型设置为指定的对象 `proto`。需要注意的是：不需要支持 `Object.create()` 的第二个参数 `propertiesObject`，且如果传入的参数 `proto` 不是对象（或者为 `null`），需要抛出一个错误。此外，禁止使用 `Object.create()` 或 `Object.setPrototypeOf()`。

解题方案首先检查参数 `proto` 是否是一个对象或非 `null`，因为在 JavaScript 中，只有对象（或 `null`）才能作为另一个对象的原型；如果 `proto` 是非对象类型，则抛出错误。实现的关键在于如何设置新对象的原型：通过创建一个空对象 `obj`，然后直接设置其内部的原型属性 `__proto__` 为 `proto`。虽然直接操作 `__proto__` 是一种不推荐的方式，但在这里可以用来模拟 `Object.create()` 的基本功能。最后，返回这个新的对象 `obj`。这种方式能够简单地实现 `Object.create()` 的核心功能，且避免了使用禁止的内置方法。实现的时间复杂度为 O(1)，非常高效。



```js
/**
 * @param {any} proto
 * @return {object}
 */
// function myObjectCreate(proto) {
//   function Constructor() {}
//   Constructor.prototype = proto.prototype || proto
//   return new Constructor();
// }

/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  if (typeof proto !== 'object' || proto === null) throw new Error('');
  const obj = {};
  obj.__proto__ = proto;
  return obj;
}
```

