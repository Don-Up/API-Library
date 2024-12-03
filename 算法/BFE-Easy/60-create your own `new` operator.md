## [60. create your own `new` operator | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/create-your-own-new-operator)

这道题要求实现一个 `myNew` 函数，它的功能与 JavaScript 中的 `new` 操作符相同，用于创建一个新的对象实例，但不能直接使用 `new` 操作符。`myNew` 接收一个构造函数 `constructor` 和参数数组 `args`，返回一个基于该构造函数的新对象实例。需要注意的是，构造函数可以显式返回一个对象作为结果，如果没有显式返回对象，则默认返回新创建的实例。

<audio src="C:\Users\10691\Downloads\这道题要求实现一个myNew函.mp3"></audio>

```js
/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
  // 1. A new object is created, inheriting from constructor's prototype.
  var that = Object.create(constructor.prototype);
  // 2. The constructor function is called with the specified arguments,
  //    and with this bound to the newly created object.
  var obj =  constructor.apply(that, args);
  
  // 3. The object (not null, false, 3.1415 or other primitive types) returned by the constructor function becomes the result of the whole new expression.
  //    If the constructor function doesn't explicitly return an object, 
  //    the object created in step 1 is used instead (normally constructors don't return a value, but they can choose to do so if they want to override the normal object creation process).
  if(obj && typeof obj === 'object')
  {
    return obj;
  }
  else
  {
    return that;
  }
}
```

<audio src="C:\Users\10691\Downloads\解题方案分为三个步骤模拟new.mp3"></audio>