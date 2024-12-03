### `Object.freeze()` and Immutability in JavaScript

<audio src="C:\Users\10691\Downloads\__`Object.freez.mp3"></audio>

**`Object.freeze()`** makes an object **immutable** by preventing any changes to its properties or structure. Once an object is frozen:  

1. Properties cannot be added, deleted, or modified.  
2. The object itself cannot be restructured.  
3. It creates a shallow freeze, meaning nested objects can still be modified.  

**Immutability** helps maintain predictable state and prevents unintended side effects, especially in functional programming.

> **`Object.freeze()` 和不可变性**：
>
> <audio src="C:\Users\10691\Downloads\`Object.freeze(.mp3"></audio>
>
> **`Object.freeze()`** 使对象**不可变**，禁止修改对象的属性或结构：  
>
> 1. 无法添加、删除或更改属性。  
> 2. 对象本身无法被重新结构化。  
> 3. 它是浅冻结，嵌套对象仍然可以被修改。  
> **不可变性**有助于维护可预测的状态，避免意外的副作用，尤其是在函数式编程中。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了 `Object.mp3"></audio>

#### **Using `Object.freeze()`**
```javascript
const obj = { name: "Alice", age: 25 };
Object.freeze(obj);

obj.name = "Bob"; // No effect
obj.city = "New York"; // No effect
delete obj.age; // No effect

console.log(obj); // { name: "Alice", age: 25 }
```

#### **Shallow Freeze**
```javascript
const obj = { name: "Alice", nested: { age: 25 } };
Object.freeze(obj);

obj.nested.age = 30; // Allowed: Nested objects are not frozen by default
console.log(obj.nested.age); // 30
```

#### **Deep Freeze (Custom Function)**
```javascript
function deepFreeze(object) {
  Object.freeze(object);
  Object.keys(object).forEach((key) => {
    if (typeof object[key] === "object" && object[key] !== null) {
      deepFreeze(object[key]); // Recursively freeze nested objects
    }
  });
}

const obj = { name: "Alice", nested: { age: 25 } };
deepFreeze(obj);

obj.nested.age = 30; // No effect
console.log(obj.nested.age); // 25
```

---

### Key Notes:
1. **`Object.freeze()`** enforces immutability at the top level (shallow freeze).  
2. For true immutability, **deep freezing** is required.  
3. Frozen objects help prevent accidental changes in shared state.  
4. Use in scenarios where data consistency is critical, such as Redux state management.