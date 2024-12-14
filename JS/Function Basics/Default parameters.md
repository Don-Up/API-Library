### Default Parameters in JavaScript

<audio src="..\..\mp3\Default paramet.mp3"></audio>

Default parameters allow functions to assign default values to parameters if no value is provided or if the value is `undefined`. Introduced in ES6, this simplifies handling optional parameters.

Syntax: `function(parameter = defaultValue)`.  
Default values can be constants, expressions, or even other function calls.

> **默认参数**：
>
> <audio src="..\..\mp3\默认参数允许函数在参数未传递或.mp3"></audio>
>
> 默认参数允许函数在参数未传递或传递值为 `undefined` 时，使用默认值。ES6 引入该功能，简化了处理可选参数的逻辑。
> 语法为：`function(参数 = 默认值)`。默认值可以是常量、表达式或函数调用。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了 JavaScr (4).mp3"></audio>

#### Basic Example:
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // "Hello, Guest!" (default value used)
greet("Alice"); // "Hello, Alice!" (provided value used)
```

#### Default Parameter as Expression:
```javascript
function add(a = 0, b = a * 2) {
  return a + b;
}

console.log(add()); // 0 (a = 0, b = 0 * 2)
console.log(add(3)); // 9 (a = 3, b = 3 * 2)
console.log(add(3, 4)); // 7 (a = 3, b = 4)
```

#### Default Parameter Using a Function:
```javascript
function getDefault() {
  return 42;
}

function calculate(value = getDefault()) {
  console.log(value);
}

calculate(); // 42 (default function used)
calculate(10); // 10 (provided value used)
```

---

### Key Notes:
1. Default parameters work only when the argument is `undefined`, not `null`.
2. They make code concise by removing the need for manual checks like `param = param || defaultValue`.