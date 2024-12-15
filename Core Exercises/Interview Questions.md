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

# what is the difference between `block` and `inline`?

### 翻译中的主要问题:

1. "to display elements" 应改为 "for displaying elements"，因 "to" 在此处不符合语法习惯。
2. "their primary differences as follow" 应改为 "their primary differences are as follows"，需补充系动词并改为复数形式。
3. "not take up a line exclusively" 应改为 "do not take up a line exclusively"，缺少助动词。
4. "be arranged with adjacent elements in a same row" 应改为 "are arranged with adjacent elements in the same row"，需使用正确的动词形式并将 "a same row" 改为 "the same row"。

------

### 修正前后的对比:

In CSS, `block` and `inline` are two common types to display elements, their primary differences as follow:

> In CSS, `block` and `inline` are two common types for displaying elements, and their primary differences are as follows:

1. `block` elements:

- take up a line exclusively, fill the parent's width.

> - take up a line exclusively and fill the parent's width.

- width, height, padding, border and margin can be set normally.
   （未改动）
- common `block` elements include `div`, `p`,  `h1`, etc.
   （未改动）

1. `inline` elements:

- not take up a line exclusively, be arranged with adjacent elements in a same row.

> - do not take up a line exclusively and are arranged with adjacent elements in the same row.

- can only be set with horizontal sizes (e.g. `width` and `margin-left`), disallow direct setting of height and vertical margin.

> - can only have horizontal sizes (e.g., `width` and `margin-left`) set and do not allow direct setting of height or vertical margin.

- common `inline` elements include `span`, `a` and `strong`, etc.

> - common `inline` elements include `span`, `a`, and `strong`.

Additionally, `inline-block` is a combination of both, can be arranged in a same row and be set with width and height.

> Additionally, `inline-block` is a combination of both. It can be arranged in the same row and have its width and height set.

Proper choice of types is conducive to implement flexible layouts.

> Proper selection of types helps in implementing flexible layouts.

------

### 修正后的版本:

<audio src="../../../../Downloads/In CSS, `block`.mp3"></audio>

在CSS中，`block`和`inline`是两种常见的元素显示类型，它们的主要区别如下：

1. **`block`元素**：
   - 独占一行，占满父容器的宽度。
   - 宽度、高度、内边距、边框和外边距都可以正常设置。
   - 常见的`block`元素包括`div`、`p`、`h1`等。
2. **`inline`元素**：
   - 不独占一行，与相邻的元素在同一行内排列。
   - 仅能设置水平尺寸（如`width`和`margin-left`），不能直接设置高度或垂直外边距。
   - 常见的`inline`元素包括`span`、`a`、`strong`等。

此外，`inline-block`是两者的结合，既可排列在一行，也可设置宽高。正确选择类型有助于实现灵活布局。

In CSS, `block` and `inline` are two common types for displaying elements, and their primary differences are as follows:

1. `block` elements:

- take up a line exclusively and fill the parent's width.
- width, height, padding, border, and margin can be set normally.
- common `block` elements include `div`, `p`, and `h1`.

1. `inline` elements:

- do not take up a line exclusively and are arranged with adjacent elements in the same row.
- can only have horizontal sizes (e.g., `width` and `margin-left`) set and do not allow direct setting of height or vertical margin.
- common `inline` elements include `span`, `a`, and `strong`.

Additionally, `inline-block` is a combination of both. It can be arranged in the same row and have its width and height set. Proper selection of types helps in implementing flexible layouts.



## How HTTP works ? What is HTTP/2?

### 翻译中的主要问题

1. **拼写错误**：`Procotol` 应为 `Protocol`，`multipl` 应为 `multiple`。
2. **表达问题**：`it bases on the request-response model` 改为更地道的 `it is based on the request-response model`。
3. **术语翻译**：`server pushing` 更常用的表达是 `server push`。
4. **语法与流畅性**：`To improve performance, you can use mechanisms like Cookie or Session to store states` 中，`Cookie` 和 `Session` 应复数化，`to store states` 可调整为 `for state management`。

------

### 修正前后的对比

#### 修正前：

HTTP(Hyper Text Transfer Procotol) is an application-layer protocol for communication between the client-side and the server. It bases on the request-response model, the client sends requests (e.g. the browser requests a webpage), the server provides responses based on requests (e.g. returning HTML files).

HTTP is stateless, this means each request is independent. To improve performance, you can use mechanisms like Cookie or Session to store states.

HTTP/2 is the upgraded version of HTTP. It solves inefficient issues in HTTP/1.1 by using binary to transfer data, supporting multiplex which can handle multipl requests and responses in a single connection. Additionally, HTTP/2 also supports header compression and server pushing, significantly improving web load times and user experience.

------

#### 修正后：

HTTP (Hypertext Transfer Protocol) is an application-layer protocol for communication between the client and server. It is based on the request-response model, where the client sends requests (e.g., a browser requesting a webpage), and the server provides responses (e.g., returning HTML files).

HTTP is stateless, meaning each request is independent. For state management, mechanisms like Cookies or Sessions can be used.

HTTP/2 is an upgraded version of HTTP. It addresses inefficiencies in HTTP/1.1 by using binary data transfer and supporting multiplexing, allowing multiple requests and responses to be processed over a single connection. Additionally, HTTP/2 supports header compression and server push, significantly improving web load times and user experience.

HTTP（超文本传输协议）是一种用于客户端和服务器之间通信的应用层协议。它基于请求-响应模型，客户端发送请求（如浏览器请求网页），服务器根据请求提供响应（如返回HTML文件）。HTTP是无状态的，这意味着每次请求都是独立的。为了改善性能，可使用Cookie或Session等机制来存储状态。

HTTP/2是HTTP协议的升级版本，解决了HTTP/1.1中效率较低的问题。它采用二进制格式传输数据，支持多路复用，即同一连接中可以同时处理多个请求和响应。此外，HTTP/2还支持头部压缩和服务器推送功能，大幅提升了网页加载速度和用户体验。

------

<audio src="../../../../Downloads/HTTP (Hypertext.mp3"></audio>



## How does HTTPS work?

### 修正内容

**主要问题**：

1. 语言表达：
   - “encrypting transferring data”语义重复，建议更精炼。
   - “to prevent information from stealing or tampering”语法不够准确，改为更符合英文表达习惯的“to prevent data theft or tampering”。
   - “Its working principle is as follow”需改为“as follows”。
2. 句式和用词：
   - “TLS/SSL handshakes”建议调整为单数形式“TLS/SSL handshake”，更符合技术文档用法。
   - “a symmetric key is generated and encrypted by the server's public key and then sent to the server”缺少清晰度，可分解为更具体的描述。
   - “is the key to security communication”建议改为“is essential for secure communication”。

------

### 修正前后对比

#### 修正前：

HTTPS (Hyper Text Transfer Protocol Security) is the secure version of HTTP for encrypting transferring data to prevent information from stealing or tampering. Its working principle is as follow:

1. TLS/SSL handshakes: the client sends a request to the server which returns its digital certificate containing a public key for authentication.
2. Exchanging secret key: when the certificate is verified by the client, a symmetric key is generated and encrypted by the server's public key and then sent to the server.
3. Encrypted data transmission: both sides encrypt communication data using shared symmetric secret key, thereby improving data confidentiality and integrity.

HTTPS protects user privacy and prevents intermediary attack using encryption and authentication, is the key to security communication in modern network.

#### 修正后：

HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, designed to encrypt data transfers and prevent data theft or tampering. Its working principles are as follows:

1. **TLS/SSL handshake**: The client sends a request to the server, which responds with its digital certificate containing a public key for authentication.
2. **Key exchange**: After verifying the certificate, the client generates a symmetric key, encrypts it using the server's public key, and sends it back to the server.
3. **Encrypted data transmission**: Both parties use the shared symmetric key to encrypt and decrypt data, ensuring confidentiality and integrity.

By combining encryption and authentication, HTTPS protects user privacy, prevents man-in-the-middle attacks, and is essential for secure communication in modern networks.

<audio src="../../../../Downloads/HTTPS (Hypertex.mp3"></audio>

------

HTTPS（超文本传输安全协议）是HTTP的安全版本，用于在客户端和服务器之间加密传输数据，以防止信息被窃取或篡改。其工作原理如下：

1. **TLS/SSL握手**：客户端向服务器发起请求，服务器返回其数字证书（包含公钥）以证明身份。
2. **密钥交换**：客户端验证证书合法性后，生成一个对称密钥，并用服务器的公钥加密后发送给服务器。
3. **数据加密传输**：双方通过共享的对称密钥加密通信数据，从而确保数据机密性和完整性。

HTTPS通过加密和身份验证，保护用户隐私并防止中间人攻击，是现代网络中安全通信的关键。