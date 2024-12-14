##  What is Prototypal Inheritance? How does it work?

原型继承是一种 JavaScript 的继承机制，允许对象通过其原型链从另一个对象继承属性和方法。每个对象都有一个内部链接到另一个对象的引用，称为原型（`prototype`）。当访问对象的属性时，JavaScript 首先在对象本身中查找，如果找不到，就会沿着原型链向上查找，直到找到该属性或到达原型链的末尾（通常是 `null`）。这种机制使得对象可以共享行为，减少内存消耗，同时提高代码复用性。

------

### 翻译中的主要问题：

1. **"an JavaScript inheritance mechanism"** 应改为 **"a JavaScript inheritance mechanism"**，因“JavaScript”以辅音音素开头。
2. **"search"** 应改为 **"searches"**，因为主语是单数第三人称 "JavaScript"。
3. **"propeties"** 是拼写错误，应改为 **"properties"**。
4. **"the propotype's end"** 中的拼写错误，应为 **"the prototype's end"**。

------

### 修正前后的对比：

Prototypal Inheritance is an JavaScript inheritance mechanism that allows objects to inherit propeties and methods from another object via the prototype chain.

> Prototypal Inheritance is a JavaScript inheritance mechanism that allows objects to inherit properties and methods from another object via the prototype chain.

Each object has an internal link called prototype that points to another object.

> Each object has an internal link called a prototype that points to another object.

When accessing an object's properties, JavaScript first search in the object itself, if not found, it will continue searching up along the prototype chain, until finding the property or reaching the propotype's end (typically is null).

> When accessing an object's properties, JavaScript first searches in the object itself. If not found, it continues searching up along the prototype chain until it finds the property or reaches the prototype's end (typically null).

------

### 修正后的版本：

<audio src="..\mp3\Prototypal Inhe.mp3"></audio>

Prototypal Inheritance is a JavaScript inheritance mechanism that allows objects to inherit properties and methods from another object via the prototype chain. Each object has an internal link called a prototype that points to another object. When accessing an object's properties, JavaScript first searches in the object itself. If not found, it continues searching up along the prototype chain until it finds the property or reaches the prototype's end (typically null). This mechanism allows objects to share behaviors, reduce memory overhead, and improve code reusability.



## explain `this` keyword in JavaScript

`this` 关键字在 JavaScript 中是一个动态绑定的引用，取决于函数的调用方式。

1. 在全局作用域或普通函数中，`this` 通常指向全局对象（浏览器中是 `window`）。
2. 在严格模式下，`this` 在普通函数中会是 `undefined`。
3. 在对象的方法中调用时，`this` 指向调用该方法的对象。
4. 使用构造函数时，`this` 指向新创建的实例对象。
5. 使用箭头函数时，`this` 继承自定义该函数时的上下文。
    理解 `this` 的关键在于弄清调用它的上下文环境。

### 翻译中的主要问题：

1. **"depend on"** 应改为 **"depends on"**，因主语是单数第三人称 "The `this` keyword"。
2. **"regular functions"** 前多余一个空格，应删除。
3. **"`window` in the browser"** 应改为 **"`window` in browsers"**，使表达更加通用。
4. **"the contructor function"** 拼写错误，应为 **"the constructor function"**。
5. **"extends the context when customizing the function"** 表达不够清晰，建议改为 **"inherits the context of its surrounding scope"**。

------

### 修正前后的对比：

The `this` keyword in JavaScript is a dynamic-bind reference depend on how to invoke the function.

> The `this` keyword in JavaScript is a dynamic-bind reference that depends on how the function is invoked.

In the global scope or regular functions,  `this` typically points to the global object ( `window` in the browser).

> In the global scope or regular functions, `this` typically points to the global object (`window` in browsers).

In strict mode, `this` is `undefined` in regular functions.

> In strict mode, `this` is `undefined` in regular functions.

In an object's methods, `this` refers to the object which calls the method.

> In an object's methods, `this` refers to the object that calls the method.

In the contructor function, `this` refers to the newly created instance object.

> In the constructor function, `this` refers to the newly created instance object.

In the arrow function, `this` extends the context when customizing the function.

> In the arrow function, `this` inherits the context of its surrounding scope.

------

### 修正后的版本：

<audio src="..\mp3\The `this` keyw.mp3"></audio>

The `this` keyword in JavaScript is a dynamic-bind reference that depends on how the function is invoked.

1. In the global scope or regular functions, `this` typically points to the global object (`window` in browsers).
2. In strict mode, `this` is `undefined` in regular functions.
3. In an object's methods, `this` refers to the object that calls the method.
4. In the constructor function, `this` refers to the newly created instance object.
5. In the arrow function, `this` inherits the context of its surrounding scope.

The key to understanding `this` lies in figuring out the context environment where it is called.



##  what is Closure and how does it work?

闭包是 JavaScript 中的一种特性，它指的是函数可以“记住”并访问其定义时所在的词法作用域，即使该函数在其作用域之外执行。

闭包通过将函数与其词法环境绑定在一起实现。当一个内部函数访问其外部函数的变量时，就会形成闭包。
 例如：

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 输出 1
console.log(counter()); // 输出 2
```

在上述例子中，`inner` 函数即为闭包，因为它访问了 `outer` 函数中的 `count` 变量。闭包广泛用于数据隐藏和函数工厂中。

### 翻译中的主要问题：

1. **"means a function can remember"** 应改为 **"refers to a function's ability to remember"**，以使表述更精准。
2. **"its scope"** 可改为 **"that scope"**，以避免重复使用 "its" 引起歧义。
3. **"Closure can be implemented"** 改为 **"A closure is created"** 更符合上下文语义。
4. **"namely closure"** 用词不自然，应改为 **"a closure"**。
5. **"data privacy and function factory"** 应改为 **"data encapsulation and function factories"**，以更准确表达闭包的应用场景。

------

### 修正前后的对比：

Closure is a JavaScript feature that means a function can remember and access the lexical scope where it is defined, even if the function is executed outside its scope.

> Closure is a JavaScript feature that refers to a function's ability to remember and access the lexical scope where it is defined, even if the function is executed outside that scope.

Closure can be implemented by binding the function and its lexical environment. When an inner function accesses its outer function's variables, a closure takes shape.

> A closure is created by binding a function to its lexical environment. When an inner function accesses variables of its outer function, a closure is formed.

In the above example, the `inner` function is namely closure, as it accesses the `count` variable in the `outer` function.

> In the above example, the `inner` function is a closure because it accesses the `count` variable in the `outer` function.

Closure is widely used in data privacy and function factory.

> Closures are widely used in data encapsulation and function factories.

------

### 修正后的版本：

<audio src="..\mp3\Closure is a Ja.mp3"></audio>

Closure is a JavaScript feature that refers to a function's ability to remember and access the lexical scope where it is defined, even if the function is executed outside that scope.

A closure is created by binding a function to its lexical environment. When an inner function accesses variables of its outer function, a closure is formed.

In the above example, the `inner` function is a closure because it accesses the `count` variable in the `outer` function. Closures are widely used in data encapsulation and function factories.



## var vs let vs const

### 翻译中的主要问题：

1. **"three approaches to declare variables"** 应改为 **"three ways to declare variables"**，语义更自然。
2. **"variables and hoisting"** 应改为 **"mutability and hoisting"**，更贴近实际含义。
3. **"declared variables won't be hoisted"** 不完全正确，声明依然会被提升，但不会初始化，应改为 **"declared variables are hoisted but remain uninitialized"**。
4. **"needs to be initialized immediately after declaration"** 更常见表达为 **"must be initialized upon declaration"**。
5. **"reference addresses of objects and arrays are unchangeable"** 建议改为 **"the references to objects and arrays are immutable"**，更简洁精准。

------

### 修正前后的对比：

In JavaScript, `var`, `let` and `const` are three approaches to declare variables. They are different in scope, variables and hoisting.

> In JavaScript, `var`, `let`, and `const` are three ways to declare variables. They differ in scope, mutability, and hoisting.

declared variables won't be hoisted to the scope's top.

> declared variables are hoisted but remain uninitialized.

needs to be initialized immediately after declaration and can't be reassigned values.

> must be initialized upon declaration and cannot be reassigned.

Although reference addresses of objects and arrays are unchangeable, the content is changeable.

> Although the references to objects and arrays are immutable, their contents are mutable.

------

### 修正后的版本：

<audio src="..\mp3\In JavaScript,  (2).mp3"></audio>

在 JavaScript 中，`var`、`let` 和 `const` 是声明变量的三种方式，它们在作用域、可变性和提升行为上有所不同。

- **`var`**:
  1. 具有函数作用域，但没有块级作用域。
  2. 声明的变量会被提升，但值不会随之提升。
  3. 可以重新声明和赋值。
- **`let`**:
  1. 拥有块级作用域。
  2. 声明的变量不会提升到作用域顶部。
  3. 可以重新赋值，但不能重新声明。
- **`const`**:
  1. 拥有块级作用域。
  2. 声明后必须立即初始化，且不能重新赋值。
  3. 虽然对象和数组的引用地址不可变，但其内容可变。

推荐优先使用 `let` 和 `const`，以避免潜在的作用域问题。

In JavaScript, `var`, `let`, and `const` are three ways to declare variables. They differ in scope, mutability, and hoisting.

- **`var`:**
  1. Has function scope, not block scope.
  2. Declared variables are hoisted, but their values are not hoisted.
  3. Can be redeclared and reassigned.
- **`let`:**
  1. Has block scope.
  2. Declared variables are hoisted but remain uninitialized.
  3. Can be reassigned but cannot be redeclared.
- **`const`:**
  1. Has block scope.
  2. Must be initialized upon declaration and cannot be reassigned.
  3. Although the references to objects and arrays are immutable, their contents are mutable.

It's advisable to prioritize `let` and `const` to avoid potential scope issues.



## Map vs Object vs Set vs Array

在 JavaScript 中，`Map`、`Object`、`Set` 和 `Array` 是四种常见的数据结构，它们各有特点和适用场景：

- **`Object`**：用于键值对存储，键必须是字符串或符号。无法按插入顺序遍历键。
- **`Map`**：键可以是任意类型，提供按插入顺序遍历键值对的能力，适合频繁插入和检索。
- **`Array`**：有序集合，适合存储和操作一组值，通过索引访问元素。
- **`Set`**：存储唯一值的集合，适合去重操作，不允许重复元素。

选择哪种数据结构取决于具体需求，例如键值对存储用 `Map`，去重用 `Set`，有序列表用 `Array`。

### 翻译中的主要问题：

1. **"cases"** 应改为 **"use cases"**，更符合语义习惯。
2. **"keys must be a string or symbol and can't be iterated over in insertion order"** 语义不准确，应改为 **"keys must be strings or symbols, and iteration does not guarantee insertion order"**。
3. **"an orderly collection"** 应改为 **"an ordered collection"**，更符合自然表达。
4. **"is suitable for storing and operating a group of values"** 建议改为 **"suitable for storing and manipulating a collection of values"**，更准确流畅。
5. **"Choosing which structure depends on specific demands"** 改为 **"The choice of data structure depends on specific requirements"**，更正式。

------

### 修正前后的对比：

In JavaScript, `Map`, `Object`, `Set` and `Array` are four common data structures. They have their respective features and cases:

> In JavaScript, `Map`, `Object`, `Set`, and `Array` are four common data structures with distinct features and use cases.

`Object`: used for key-pair storage, keys must be a string or symbol and can't be iterated over in insertion order.

> `Object`: used for key-value storage, keys must be strings or symbols, and iteration does not guarantee insertion order.

`Array`: an orderly collection, is suitable for storing and operating a group of values, accessing elements by index.

> `Array`: an ordered collection, suitable for storing and manipulating a collection of values, accessed by index.

**Choosing which structure depends on specific demands.**

> The choice of data structure depends on specific requirements.

------

### 修正后的版本：

<audio src="..\mp3\In JavaScript,  (1).mp3"></audio>

In JavaScript, `Map`, `Object`, `Set`, and `Array` are four common data structures with distinct features and use cases:

1. **`Object`**: used for key-value storage. Keys must be strings or symbols, and iteration does not guarantee insertion order.
2. **`Map`**: keys can be of any type, supports iteration in insertion order, and is suitable for frequent insertion and retrieval.
3. **`Array`**: an ordered collection, suitable for storing and manipulating a collection of values, accessed by index.
4. **`Set`**: a collection for storing unique values, suitable for deduplication, and disallows duplicate elements.

The choice of data structure depends on specific requirements. For example, use `Map` for key-value storage, `Set` for deduplication, and `Array` for ordered lists.



## difference between `==` and `===`

在 JavaScript 中，`==` 和 `===` 是用于比较的操作符，但它们有显著差异：

- **`==` (宽松比较)**：在比较时会进行类型转换。如果两个值类型不同，JavaScript 会尝试将它们转换为相同类型再比较。例如，`'5' == 5` 返回 `true`，因为字符串 `'5'` 被转换成数字 `5` 后相等。
- **`===` (严格比较)**：不会进行类型转换，仅在值和类型都相同时返回 `true`。例如，`'5' === 5` 返回 `false`，因为一个是字符串，一个是数字。

通常建议使用 `===` 来避免潜在的类型转换错误，提高代码的可读性和可靠性。

### 翻译中的主要问题

1. "comparing" 应改为 "comparison" ，以保持句式一致性。
2. "return true only when both the value and the type are identical" 应改为 "returns `true` only when both the value and the type are identical" ，动词形式保持统一。
3. "enhancing code readability and reliability" 应改为 "to enhance code readability and reliability"，与前文结构保持一致。

------

### 修正前后的对比

In JavaScript, `==` and `===` are operators for comparison, but they have distinct differences:

- `==`(loose comparison): performs type conversion when comparing. If two values differ in types, JavaScript tries to convert them into the same type and then comparing.

  > performs type conversion when performing a comparison. If two values differ in types, JavaScript tries to convert them into the same type and then compares them.

- `===`(strict comparison): no type conversion is performed, return true only when both the value and the type are identical.

  > no type conversion is performed, and it returns `true` only when both the value and the type are identical.

It's usually advisable to use `===` to avoid potential type conversion errors, enhancing code readability and reliability.

> It's usually advisable to use `===` to avoid potential type conversion errors, to enhance code readability and reliability.

------

### 修正后的版本

In JavaScript, `==` and `===` are operators for comparison, but they have distinct differences:

- `==`(loose comparison): performs type conversion when performing a comparison. If two values differ in types, JavaScript tries to convert them into the same type and then compares them. For example, `'5' == 5` returns `true`, as `'5'` equals `5` after it is converted into a number.
- `===`(strict comparison): no type conversion is performed, and it returns `true` only when both the value and the type are identical. For example, `'5' === 5` returns `false`, as one is a string, the other is a number.
   It's usually advisable to use `===` to avoid potential type conversion errors, to enhance code readability and reliability.



## explain how different CSS `position` property works

CSS 的 `position` 属性用于定义元素在页面中的定位方式，其主要取值及作用如下：

1. **static**: 默认值，元素按照文档流正常排列，不受 `top`、`left` 等属性影响。
2. **relative**: 元素仍在文档流中，但可以通过 `top`、`left` 等属性相对于自身正常位置进行偏移。
3. **absolute**: 元素脱离文档流，位置相对于最近的非 `static` 祖先元素。
4. **fixed**: 元素脱离文档流，位置相对于视口（窗口），即使滚动页面也不会移动。
5. **sticky**: 元素在一定条件下表现为 `relative` 或 `fixed`，例如在滚动到某个阈值时固定在视口位置。

选择合适的 `position` 值可以实现灵活的布局效果，例如使用 `absolute` 实现弹出框，使用 `sticky` 制作滚动导航栏等。

### 翻译中的主要问题

1. "Its main values and roles as follow:" 中的 "as follow" 应为 "as follows"。
2. "are not effected using properties like" 中的 "effected" 应改为 "affected"。
3. "relative to the viewpoint" 中的 "viewpoint" 应为 "viewport"。
4. "ascrollable navigation bar" 缺少空格，应为 "a scrollable navigation bar"。  

------

### 修正前后的对比

CSS position property is used to define how elements are positioned in a page. Its main values and roles as follow:

> CSS position property is used to define how elements are positioned in a page. Its main values and roles as follows:

1. static: the default value, elements are normally positioned by document flow and are not effected using properties like `top` and `left`.

> static: the default value, elements are normally positioned by document flow and are not affected using properties like `top` and `left`.

1. fixed: elements are separated from the document flow and are positioned relative to the viewpoint (window), no movement even if the page scrolls.

> fixed: elements are separated from the document flow and are positioned relative to the viewport (window), no movement even if the page scrolls.

1. sticky: elements behave `relative` or `fixed` under certain conditions. For example, an element will be fixed at a viewport position when the page scrolls to a certain threshold value.

> sticky: elements behave `relative` or `fixed` under certain conditions. For example, an element will be fixed at a viewport position when the page scrolls to a certain threshold value.

Choosing a proper `position` value can implement flexible layout effects. For example, using `absolute` to implement a popover, using `sticky` to make ascrollable navigation bar, etc.

> Choosing a proper `position` value can implement flexible layout effects. For example, using `absolute` to implement a popover, using `sticky` to make a scrollable navigation bar, etc.

------

### 修正后的版本

<audio src="..\mp3\CSS position pr.mp3"></audio>

CSS position property is used to define how elements are positioned in a page. Its main values and roles as follows:

1. **static**: the default value, elements are normally positioned by document flow and are not affected using properties like `top` and `left`.
2. **relative**: elements are still in the document flow, but can be shifted compared to their normal position using properties like `top` and `left`.
3. **absolute**: elements are separated from the document flow and are positioned relative to the nearest non-static ancestor element.
4. **fixed**: elements are separated from the document flow and are positioned relative to the viewport (window), no movement even if the page scrolls.
5. **sticky**: elements behave as `relative` or `fixed` under certain conditions. For example, an element will be fixed at a viewport position when the page scrolls to a certain threshold value.

Choosing a proper `position` value can i·mplement flexible layout effects. For example, using `absolute` to implement a popover, using `sticky` to make a scrollable navigation bar, etc.

###### 

###### 