### ES6 Classes and `extends` in JavaScript

<audio src="..\..\mp3\__ES6 Classes__.mp3"></audio>

**ES6 Classes** provide a cleaner, more syntactic way to create objects and implement inheritance. The **`extends`** keyword is used to create a child class that inherits properties and methods from a parent class.  

The child class can:  
1. Use **`super()`** to call the parent class's constructor.  
2. Override or extend parent methods.  

Classes and `extends` enable object-oriented programming (OOP) in JavaScript.

> **ES6 类与 `extends`**：
>
> <audio src="..\..\mp3\ES6 类提供了一种更简洁的语.mp3"></audio>
>
> **ES6 类**提供了一种更简洁的语法来创建对象和实现继承。  
> **`extends`** 用于创建子类，使其继承父类的属性和方法：  
>
> 1. 子类通过 **`super()`** 调用父类构造函数。  
> 2. 子类可以重写或扩展父类的方法。  
> 类和 `extends` 支持 JavaScript 的面向对象编程。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了 JavaScr (13).mp3"></audio>

#### **Basic Class Inheritance**
```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Calls Parent's constructor
    this.age = age;
  }
  greet() {
    super.greet(); // Calls Parent's greet method
    console.log(`I am ${this.age} years old.`);
  }
}

const child = new Child("Alice", 10);
child.greet();
// Output:
// "Hello, I am Alice"
// "I am 10 years old."
```

#### **Extending Built-In Classes**
```javascript
class CustomArray extends Array {
  first() {
    return this[0]; // Adds a method to get the first element
  }
}

const arr = new CustomArray(1, 2, 3);
console.log(arr.first()); // 1
console.log(arr.length); // 3 (inherits Array properties)
```

---

### Key Notes:
1. **`extends`** enables inheritance from classes or built-in objects.  
2. **`super()`** is required in a child class constructor to call the parent constructor.  
3. Child classes can override and extend parent methods and properties.  
4. Classes are syntactic sugar over JavaScript's prototype-based inheritance.