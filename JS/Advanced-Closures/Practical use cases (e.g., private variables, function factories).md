### Practical Use Cases of Closures

<audio src="..\..\mp3\Closures are wi.mp3"></audio>

Closures are widely used in JavaScript for powerful and flexible coding patterns.

#### **1. Private Variables**:
Closures allow creating "private" variables that can't be accessed directly from outside a function.

#### **2. Function Factories**:
Closures can generate reusable functions with specific configurations.

#### **3. Event Handlers**:
Closures maintain access to variables when handling events.

#### **4. Memoization**:
Store and reuse previously computed results for performance optimization.

> **闭包的实际应用**  
>
> <audio src="..\..\mp3\闭包在 JavaScript .mp3"></audio>
>
> 闭包在 JavaScript 中广泛使用，提供强大且灵活的编码模式：  
>
> #### **1. 私有变量**：闭包允许创建“私有”变量，外部无法直接访问。  
> #### **2. 函数工厂**：通过闭包生成特定配置的可复用函数。  
> #### **3. 事件处理器**：闭包在处理事件时保留对变量的访问。  
> #### **4. 记忆化**：存储并重用先前计算的结果以优化性能。

---

### Code Examples:

#### **1. Private Variables**
```javascript
function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      console.log("Count:", count);
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // Logs: Count: 1
console.log(counter.getCount()); // Logs: 1
```

---

#### **2. Function Factories**
```javascript
function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2); // Multiplier set to 2
console.log(double(5)); // Logs: 10
const triple = createMultiplier(3); // Multiplier set to 3
console.log(triple(5)); // Logs: 15
```

---

#### **3. Event Handlers**
```javascript
function attachEventHandlers() {
  let count = 0;

  document.querySelector("#btn").addEventListener("click", () => {
    count++;
    console.log("Button clicked", count, "times");
  });
}

attachEventHandlers();
```

---

#### **4. Memoization**
```javascript
function memoize(fn) {
  const cache = {};

  return function (key) {
    if (cache[key]) {
      console.log("Returning from cache:", key);
      return cache[key];
    }
    const result = fn(key);
    cache[key] = result; // Store in cache
    return result;
  };
}

const square = memoize((n) => n * n);
console.log(square(4)); // Logs: 16
console.log(square(4)); // Logs: Returning from cache: 4
```

---

### Key Notes:
1. Closures are ideal for encapsulating state and creating modular, reusable code.  
2. Use closures carefully to avoid memory leaks with long-lived references.  
3. Private variables and function factories are great for clean, maintainable code.