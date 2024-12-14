### Singleton Pattern in JavaScript

<audio src="..\..\mp3\Definition_  A  (3).mp3"></audio>

1. **Definition**:  
   - A design pattern ensuring only **one instance** of a class or object exists throughout the application.  
   - Useful for managing shared resources (e.g., configs, database connections).  

2. **Implementation**:  
   - Use a **closure** or a **static class property** to store the single instance.  
   - Return the existing instance if it already exists.

3. **Modern Alternative**:  
   - Use ES6 **modules** (their nature ensures a single instance across imports).

> **单例模式**  
>
> <audio src="..\..\mp3\定义：  一种设计模式，确保整.mp3"></audio>
>
> 1. **定义**：  
>    - 一种设计模式，确保整个应用程序中只有**一个实例**。  
>    - 适用于管理共享资源（如配置、数据库连接）。  
> 2. **实现**：  
>    - 使用**闭包**或**静态类属性**存储单一实例。  
>    - 如果实例已存在，则返回该实例。  
> 3. **现代替代方案**：  
>    - 使用 ES6 **模块**（模块特性保证实例唯一性）。

---

### Code Examples:

#### **Singleton with Closure**

<audio src="..\..\mp3\这段代码展示了单例模式的实现，.mp3"></audio>

```javascript
const Singleton = (function () {
  let instance;

  function createInstance() {
    return { message: "I am the only instance" };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true (same instance)
```

#### **Singleton with Class**

<audio src="..\..\mp3\这段代码展示了通过ES6类实现.mp3"></audio>

```javascript
class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance; // Return existing instance
    }
    Singleton.instance = this; // Create new instance
    this.message = "I am the only instance";
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true (same instance)
```

#### **ES6 Module Singleton**

<audio src="..\..\mp3\这段代码展示了使用ES模块实现.mp3"></audio>

```javascript
// singleton.js
const instance = { message: "I am the only instance" };
export default instance;

// main.js
import instance1 from "./singleton.js";
import instance2 from "./singleton.js";
console.log(instance1 === instance2); // true (module ensures single instance)
```

---

### Key Notes:

<audio src="..\..\mp3\1. __Singleton_.mp3"></audio>

1. **Singleton** ensures a single instance across the app.  
2. Use **closures** or **class static properties** in older environments.  
3. Prefer **ES modules** for modern applications—they natively handle single-instance behavior.