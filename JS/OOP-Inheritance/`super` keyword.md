### `super` Keyword in JavaScript

<audio src="C:\Users\10691\Downloads\The __`super`__.mp3"></audio>

The **`super`** keyword refers to the **parent class** (or prototype) and is used in classes:  

1. **In a constructor**: Calls the parent class's constructor (`super()`), ensuring the child class inherits properties.  
2. **In methods**: Accesses or overrides methods from the parent class.  

It is typically used in ES6 `class` syntax for inheritance.

> **`super` 关键字**:
>
> <audio src="C:\Users\10691\Downloads\`super` 关键字指向父类.mp3"></audio>
>
> **`super`** 关键字指向**父类**（或原型），在 `class` 中使用：  
>
> 1. **构造函数中**：调用父类的构造函数（`super()`），以继承父类属性。  
> 2. **方法中**：访问或重写父类的方法。  
> 它常用于 ES6 的类继承。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了 JavaScr (12).mp3"></audio>

#### **Using `super()` in Constructor**
```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Calls the Parent constructor
    this.age = age;
  }
}

const child = new Child("Alice", 10);
console.log(child.name); // "Alice"
console.log(child.age); // 10
```

#### **Using `super` to Access Parent Methods**
```javascript
class Parent {
  greet() {
    console.log("Hello from Parent!");
  }
}

class Child extends Parent {
  greet() {
    super.greet(); // Calls the Parent's greet method
    console.log("Hello from Child!");
  }
}

const child = new Child();
child.greet();
// Output:
// "Hello from Parent!"
// "Hello from Child!"
```

#### **Accessing Parent Properties**
```javascript
class Parent {
  constructor() {
    this.value = 42;
  }
}

class Child extends Parent {
  getValue() {
    return super.value; // Access parent property
  }
}

const child = new Child();
console.log(child.getValue()); // 42
```

---

### Key Notes:
1. **`super()`** must be called in a subclass constructor before accessing `this`.  
2. Use `super.methodName()` to call parent methods explicitly.  
3. Enables clean inheritance and property/method overriding.