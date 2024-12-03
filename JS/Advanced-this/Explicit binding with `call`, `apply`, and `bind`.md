### Explicit Binding: `call`, `apply`, and `bind`

<audio src="C:\Users\10691\Downloads\__Explicit bind.mp3"></audio>

**Explicit binding** allows you to manually set the value of `this` in a function using **`call`**, **`apply`**, or **`bind`**:

1. **`call`**:
   - Calls a function immediately with a specified `this` value and arguments passed individually.

2. **`apply`**:
   - Similar to `call`, but arguments are passed as an array.

3. **`bind`**:
   - Returns a new function with the specified `this` value. It does not invoke the function immediately.

> **显式绑定：`call`、`apply` 和 `bind`**  
>
> <audio src="C:\Users\10691\Downloads\显式绑定 允许你通过 `cal.mp3"></audio>
>
> **显式绑定** 允许你通过 **`call`**、**`apply`** 或 **`bind`** 手动设置函数的 `this` 值：  
>
> 1. **`call`**：立即调用函数，`this` 设置为指定值，参数单独传递。  
> 2. **`apply`**：与 `call` 类似，但参数以数组形式传递。  
> 3. **`bind`**：返回一个绑定了指定 `this` 的新函数，不会立即调用。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了JavaScri (8).mp3"></audio>

#### **Using `call`**
```javascript
function greet(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}

const person = { name: "Alice" };
greet.call(person, "Hello"); // Logs: "Hello, I'm Alice"
```

#### **Using `apply`**
```javascript
function introduce(greeting, age) {
  console.log(`${greeting}, I'm ${this.name} and I'm ${age} years old.`);
}

const person = { name: "Bob" };
introduce.apply(person, ["Hi", 25]); // Logs: "Hi, I'm Bob and I'm 25 years old."
```

#### **Using `bind`**
```javascript
function sayAge() {
  console.log(`I am ${this.age} years old.`);
}

const user = { age: 30 };

const boundFunction = sayAge.bind(user); // Returns a new function
boundFunction(); // Logs: "I am 30 years old."
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1.  __`call`__ .mp3"></audio>

1. **`call`** and **`apply`** invoke the function **immediately**.  
2. **`apply`** is useful when arguments are in an array.  
3. **`bind`** returns a new function and is often used for event listeners or delayed executions.