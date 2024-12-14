### Nullish Coalescing (`??`) and Optional Chaining (`?.`) in JavaScript

<audio src="..\..\mp3\- Nullish Coale.mp3"></audio>

- **Nullish Coalescing (`??`)**: Returns the **right-hand value** if the left-hand value is `null` or `undefined`; otherwise, it returns the left-hand value. It’s useful for providing default values.  

- **Optional Chaining (`?.`)**: Safely accesses nested object properties or methods. If the value before `?.` is `null` or `undefined`, it stops and returns `undefined` instead of throwing an error.

> **空值合并 (`??`) 和可选链 (`?.`)**：
>
> <audio src="..\..\mp3\- 崆值合并：当左侧值是 `n.mp3"></audio>
>
> - **`??`**：当左侧值是 `null` 或 `undefined` 时，返回右侧值；否则返回左侧值。适合设置默认值。
> - **`?.`**：安全访问嵌套对象属性或方法。如果 `?.` 前的值是 `null` 或 `undefined`，则返回 `undefined`，而不会抛出错误。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了 JavaScr (3).mp3"></audio>

#### **Nullish Coalescing (`??`)**
```javascript
let name = null;
let defaultName = "Guest";
console.log(name ?? defaultName); // "Guest" (because name is null)

let age = 0;
console.log(age ?? 18); // 0 (because 0 is not null or undefined)
```

#### **Optional Chaining (`?.`)**
```javascript
// Accessing nested properties
const user = { name: "Alice", address: { city: "Wonderland" } };
console.log(user?.address?.city); // "Wonderland"
console.log(user?.contact?.phone); // undefined (no error)

// Optional method call
const obj = { greet: () => "Hello" };
console.log(obj.greet?.()); // "Hello"
console.log(obj.sayGoodbye?.()); // undefined (no error)
```

---

### Key Notes:
1. **`??`** handles only `null` or `undefined`, unlike `||` which treats falsy values (`0`, `""`, etc.) as false.
2. **`?.`** prevents runtime errors when accessing deeply nested properties or undefined methods.
3. Use **`?.`** with caution to avoid hiding bugs caused by unexpected `null`/`undefined` values.