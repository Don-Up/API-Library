### Object Properties and Methods in JavaScript

<audio src="C:\Users\10691\Downloads\__Object Proper.mp3"></audio>

**Object Properties**: Key-value pairs representing data stored in an object. Keys can be strings or symbols, while values can be any type (e.g., numbers, strings, functions). Access properties using **dot notation** (`obj.key`) or **bracket notation** (`obj['key']`).  

**Object Methods**: Functions assigned as values to an object’s properties, enabling object-specific behavior. Use `this` inside methods to refer to the object itself.

> **对象属性与方法**：
>
> <audio src="C:\Users\10691\Downloads\对象属性：对象中的键值对，用于.mp3"></audio>
>
> **对象属性**：对象中的键值对，用于存储数据。键可以是字符串或符号，值可以是任意类型。属性访问方式：**点语法**（`obj.key`）或**括号语法**（`obj['key']`）。  
> **对象方法**：作为对象属性的函数，用于定义对象的行为。方法中可以使用 `this` 指代当前对象。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了 JavaScr (10).mp3"></audio>

#### **Object Properties**
```javascript
const person = {
  name: "Alice", // Property with string value
  age: 30,       // Property with number value
};

console.log(person.name); // "Alice" (dot notation)
console.log(person["age"]); // 30 (bracket notation)

// Adding a new property
person.country = "USA";
console.log(person.country); // "USA"
```

#### **Object Methods**
```javascript
const person = {
  name: "Bob",
  greet() { // Method
    console.log(`Hello, my name is ${this.name}`); // Uses `this` to access properties
  },
};

person.greet(); // "Hello, my name is Bob"
```

#### **Dynamic Property Names**
```javascript
const propName = "favoriteColor";
const person = {
  [propName]: "blue", // Dynamic property name
};

console.log(person.favoriteColor); // "blue"
```

---

### Key Notes:
1. Use **dot notation** for static property names and **bracket notation** for dynamic ones.
2. **`this`** in methods refers to the object calling the method.
3. Properties and methods can be added or modified dynamically.