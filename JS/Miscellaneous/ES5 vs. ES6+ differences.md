### ES5 vs. ES6+ Differences

<audio src="..\..\mp3\__ES5__ (2009) .mp3"></audio>

**ES5** (2009) introduced foundational features like **strict mode** and array methods (`forEach`, `map`). **ES6+** (2015 onward) brought modern syntax and features for better readability, performance, and modularity, including:

1. **`let`/`const`** (block-scoped) vs. `var` (function-scoped).  
2. **Arrow functions**: Shorter syntax, lexical `this`.  
3. **Classes**: Cleaner OOP syntax.  
4. **Modules**: `import/export` for modular code.  
5. **Promises/Async**: Simplified async programming.  
6. **Template literals**: `${expression}` in strings.

> **ES5 vs. ES6+ 区别**  
>
> <audio src="..\..\mp3\ES5（2009）引入了基础特.mp3"></audio>
>
> **ES5**（2009）引入了基础特性，如 **严格模式** 和数组方法（`forEach`、`map`）。**ES6+**（2015 及以后）带来了更现代的语法和特性，提高了代码可读性、性能和模块化：  
>
> 1. **`let`/`const`**（块级作用域） vs. `var`（函数级作用域）。  
> 2. **箭头函数**：更短的语法，词法绑定 `this`。  
> 3. **类**：更清晰的面向对象语法。  
> 4. **模块化**：使用 `import/export`。  
> 5. **Promises/Async**：简化异步编程。  
> 6. **模板字符串**：字符串中支持 `${expression}`。

---

### Code Examples:

<audio src="..\..\mp3\这段代码对比了ES5和ES6+.mp3"></audio>

#### **ES5**
```javascript
var name = "Alice"; // function-scoped
function greet() {
  console.log("Hello " + name); // String concatenation
}
greet();

var numbers = [1, 2, 3];
var doubled = numbers.map(function (num) { // Anonymous function
  return num * 2;
});
console.log(doubled); // [2, 4, 6]
```

#### **ES6+**
```javascript
const name = "Alice"; // block-scoped
const greet = () => console.log(`Hello ${name}`); // Template literals + arrow function
greet();

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // Arrow function
console.log(doubled); // [2, 4, 6]
```

---

### Key Notes:

<audio src="..\..\mp3\1. __ES6+__ imp.mp3"></audio>

1. **ES6+** improves syntax clarity and enables modern features like classes, async/await, and modules.  
2. Use **transpilers** like Babel for ES6+ compatibility in older environments.  
3. ES6+ is now the standard for modern JavaScript development.