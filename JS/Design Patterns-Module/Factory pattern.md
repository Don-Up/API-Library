### Factory Pattern in JavaScript

<audio src="..\..\mp3\__Definition___.mp3"></audio>

1. **Definition**:  
   - A design pattern that provides a way to create objects without specifying the exact class or constructor.  
   - Useful for creating similar objects with shared logic or dynamic configurations.

2. **Implementation**:  
   - Use a **function** or **class** to encapsulate object creation logic.  
   - Can return different types of objects based on input.

3. **Benefits**:  
   - Promotes code reuse and flexibility.  
   - Decouples object creation from implementation.

> **工厂模式**  
>
> <audio src="..\..\mp3\1, 定义：     - 一种.mp3"></audio>
>
> 1. **定义**：  
>    - 一种设计模式，通过工厂方法创建对象，而无需指定确切的类或构造函数。  
>    - 适用于创建具有相似逻辑或动态配置的对象。  
> 2. **实现**：  
>    - 使用**函数**或**类**封装对象创建逻辑。  
>    - 可根据输入返回不同类型的对象。  
> 3. **优点**：  
>    - 提高代码复用性和灵活性。  
>    - 将对象创建与实现解耦。

---

### Code Examples:

#### **Simple Factory Function**

<audio src="..\..\mp3\这段代码展示了一个简单的工厂函.mp3"></audio>

```javascript
function createUser(type) {
  if (type === "admin") {
    return { role: "admin", permissions: ["read", "write", "delete"] };
  } else {
    return { role: "user", permissions: ["read"] };
  }
}

const admin = createUser("admin");
const user = createUser("user");
console.log(admin); // { role: "admin", permissions: ["read", "write", "delete"] }
console.log(user); // { role: "user", permissions: ["read"] }
```

#### **Factory with Class**

<audio src="..\..\mp3\这段代码展示了一个使用`Car.mp3"></audio>

```javascript
class CarFactory {
  static createCar(type) {
    if (type === "sedan") {
      return { type: "sedan", doors: 4 };
    } else if (type === "suv") {
      return { type: "suv", doors: 5 };
    }
    return null;
  }
}

const sedan = CarFactory.createCar("sedan");
const suv = CarFactory.createCar("suv");
console.log(sedan); // { type: "sedan", doors: 4 }
console.log(suv); // { type: "suv", doors: 5 }
```

---

### Key Notes:

<audio src="..\..\mp3\1. __Factory fu.mp3"></audio>

1. **Factory functions** encapsulate object creation logic.  
2. Use **conditionals** or **dynamic inputs** to create flexible object types.  
3. Factory pattern is ideal for creating objects with shared logic or variable configurations.