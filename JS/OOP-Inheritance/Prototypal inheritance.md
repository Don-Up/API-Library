### Prototypal Inheritance in JavaScript

<audio src="..\..\mp3\__Prototypal in.mp3"></audio>

**Prototypal inheritance** allows objects to inherit properties and methods from other objects via the prototype chain. Each object has an internal reference to its prototype, accessible via `__proto__` (deprecated, use `Object.getPrototypeOf`).  

Inheritance enables reusing functionality without duplicating code. Modifications to the prototype affect all objects inheriting from it.

> **原型继承**：
>
> <audio src="..\..\mp3\JavaScript 的原型继.mp3"></audio>
>
> JavaScript 的**原型继承**使对象可以通过原型链继承其他对象的属性和方法。每个对象都有一个内部引用指向其原型，通过 `__proto__`（已弃用，推荐使用 `Object.getPrototypeOf`）访问。  
> 原型继承支持代码复用，对原型的修改会影响所有继承它的对象。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了 JavaScr (11).mp3"></audio>

#### **Basic Prototypal Inheritance**
```javascript
const parent = {
  greet() {
    console.log("Hello from parent!");
  },
};

const child = Object.create(parent); // Creates an object inheriting from `parent`
child.greet(); // "Hello from parent!" (inherited method)
console.log(Object.getPrototypeOf(child) === parent); // true
```

#### **Using `__proto__` (Deprecated)**
```javascript
const parent = { greet: () => console.log("Hello!") };
const child = {};
child.__proto__ = parent; // Set prototype (not recommended)
child.greet(); // "Hello!"
```

#### **Prototype Chain**
```javascript
const grandparent = { sayHi: () => console.log("Hi from grandparent!") };
const parent = Object.create(grandparent);
const child = Object.create(parent);

child.sayHi(); // "Hi from grandparent!" (inherited through chain)
console.log(Object.getPrototypeOf(child) === parent); // true
console.log(Object.getPrototypeOf(parent) === grandparent); // true
```

---

### Key Notes:
1. Use `Object.create` to set prototypes instead of `__proto__`.  
2. Access an object’s prototype with `Object.getPrototypeOf(object)`.  
3. Prototypes allow sharing properties/methods without duplicating them.  
4. Be cautious with prototype chain lookups for performance reasons.