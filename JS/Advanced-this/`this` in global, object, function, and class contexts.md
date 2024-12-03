### `this` in Different Contexts

The value of **`this`** in JavaScript depends on the execution context:

<audio src="C:\Users\10691\Downloads\1.  __Global Co.mp3"></audio>

1. **Global Context**:
   - In the browser, `this` refers to the global `window` object.
   - In strict mode, `this` is `undefined`.

2. **Object Context**:
   - Inside an object method, `this` refers to the object itself.

3. **Function Context**:
   - In regular functions, `this` refers to the global object (or `undefined` in strict mode).
   - In arrow functions, `this` is inherited from the outer lexical scope.

4. **Class Context**:
   - Inside class methods, `this` refers to the class instance.

> **`this` 在全局、对象、函数和类中的表现**  
>
> <audio src="C:\Users\10691\Downloads\全局上下文：  在浏览器中，`.mp3"></audio>
>
> **`this`** 的值取决于执行的上下文：  
>
> 1. **全局上下文**：  
>    - 在浏览器中，`this` 指向全局 `window` 对象。  
>    - 在严格模式下，`this` 是 `undefined`。  
> 2. **对象上下文**：  
>    - 在对象方法中，`this` 指向该对象。  
> 3. **函数上下文**：  
>    - 普通函数中，`this` 指向全局对象（严格模式下为 `undefined`）。  
>    - 箭头函数中，`this` 继承自外部词法作用域。  
> 4. **类上下文**：  
>    - 在类的方法中，`this` 指向类的实例。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了JavaScri (7).mp3"></audio>

#### **1. Global Context**
```javascript
console.log(this); // In browser: window, In strict mode: undefined

"use strict";
function globalFn() {
  console.log(this); // undefined in strict mode
}
globalFn();
```

#### **2. Object Context**
```javascript
const obj = {
  name: "Object",
  getName() {
    console.log(this.name); // `this` refers to obj
  },
};
obj.getName(); // Logs: "Object"
```

#### **3. Function Context**
```javascript
function regularFunction() {
  console.log(this); // Global object or undefined in strict mode
}
regularFunction();

const arrowFunction = () => {
  console.log(this); // Inherits `this` from outer scope
};
arrowFunction();
```

#### **4. Class Context**
```javascript
class MyClass {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name); // `this` refers to the class instance
  }
}
const instance = new MyClass("Class Instance");
instance.getName(); // Logs: "Class Instance"
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1.  __Arrow fun.mp3"></audio>

1. **Arrow functions** do not have their own `this`; they inherit it from their enclosing scope.  
2. In **strict mode**, `this` in functions is `undefined`.  
3. Use `bind`, `call`, or `apply` to manually set `this` in functions when needed.