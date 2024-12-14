### Creating Objects in JavaScript

<audio src="..\..\mp3\JavaScript prov.mp3"></audio>

JavaScript provides multiple ways to create objects:

1. **Object Literal (`{}`)**: Simplest way to create objects with key-value pairs.  
2. **`Object.create`**: Creates an object with a specified prototype.  
3. **Constructor Functions**: Functions used with `new` to create instances.  
4. **`class` Syntax**: ES6 feature to define blueprint-like classes for objects.

> **创建对象**：
>
> <audio src="..\..\mp3\JavaScript 提供多种.mp3"></audio>
>
> JavaScript 提供多种方法创建对象：  
>
> 1. **对象字面量（`{}`）**：最简单方式，用键值对创建对象。  
> 2. **`Object.create`**：通过指定原型创建对象。  
> 3. **构造函数**：使用 `new` 调用的函数，用于创建实例。  
> 4. **`class` 语法**：ES6 引入，用于定义对象的类蓝图。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了 JavaScr (8).mp3"></audio>

#### **Object Literal**
```javascript
const obj = { name: "Alice", age: 25 };
console.log(obj.name); // "Alice"
```

#### **`Object.create`**
```javascript
const proto = { greet() { return "Hello!"; } };
const obj = Object.create(proto);
obj.name = "Bob";
console.log(obj.greet()); // "Hello!" (inherited from proto)
```

#### **Constructor Function**
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person("Charlie", 30);
console.log(person.name); // "Charlie"
```

#### **Class Syntax**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
}
const person = new Person("Diana", 28);
console.log(person.greet()); // "Hello, Diana!"
```

---

### Key Notes:
1. **Object literal** is quick and straightforward for simple objects.  
2. **`Object.create`** allows prototype-based inheritance.  
3. **Constructor functions** are pre-ES6 and rely on `new`.  
4. **`class`** is syntactic sugar for constructor functions, making OOP cleaner.