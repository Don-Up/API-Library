### `Object.assign()` and Shallow Copying in JavaScript

<audio src="C:\Users\10691\Downloads\__`Object.assig.mp3"></audio>

**`Object.assign()`** is used to copy properties from one or more objects into a target object. It performs a **shallow copy**, meaning it copies only the first level of data. Nested objects or arrays are copied as references, not duplicates.

**Shallow Copy**: Changes to nested objects in the copied object will affect the original object, as they share the same reference.

> **`Object.assign()` 和浅拷贝**：
>
> <audio src="C:\Users\10691\Downloads\`Object.assign(.mp3"></audio>
>
> **`Object.assign()`** 用于将一个或多个对象的属性复制到目标对象中。它执行**浅拷贝**，即只复制第一层数据。  
> 对于嵌套对象或数组，复制的是引用而非独立副本。  
> **浅拷贝**：修改复制对象中的嵌套对象会影响原对象，因为它们共享相同的引用。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了 Object .mp3"></audio>

#### **Basic Usage of `Object.assign()`**
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = Object.assign({}, obj1, obj2);

console.log(merged); // { a: 1, b: 2, c: 3 }
```

#### **Shallow Copy Example**
```javascript
const obj = { name: "Alice", nested: { age: 25 } };
const copy = Object.assign({}, obj);

copy.nested.age = 30; // Modifies the nested object
console.log(obj.nested.age); // 30 (original object is affected)
```

#### **Avoiding Shallow Copy Issues with Deep Copy**
```javascript
const obj = { name: "Alice", nested: { age: 25 } };
// Perform a deep copy instead
const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.nested.age = 30;
console.log(obj.nested.age); // 25 (original object remains unchanged)
```

---

### Key Notes:
1. **`Object.assign()`** is ideal for merging objects or copying flat objects.  
2. It creates a **shallow copy**, so nested objects retain references to the original.  
3. Use **deep copy techniques** for nested or complex structures.  
4. When copying, the target object is modified in place.