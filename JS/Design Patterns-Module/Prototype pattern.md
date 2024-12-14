### Prototype Pattern in JavaScript

<audio src="..\..\mp3\Definition_  A  (2).mp3"></audio>

1. **Definition**:  
   - A design pattern where objects are created by cloning an existing object (prototype).  
   - Allows sharing of methods and properties across instances via the prototype chain.

2. **Implementation**:  
   - Use **`Object.create()`** to create new objects that inherit from a prototype.  
   - Define shared methods on the prototype to save memory.

3. **Benefits**:  
   - Promotes code reuse.  
   - Efficient memory usage by sharing properties and methods.

> **原型模式**  
>
> <audio src="..\..\mp3\定义：  一种设计模式，通过克.mp3"></audio>
>
> 1. **定义**：  
>    - 一种设计模式，通过克隆一个已有对象（原型）创建新对象。  
>    - 借助原型链在实例之间共享方法和属性。  
> 2. **实现**：  
>    - 使用 **`Object.create()`** 创建继承自原型的新对象。  
>    - 在原型上定义共享方法以节省内存。  
> 3. **优点**：  
>    - 促进代码复用。  
>    - 通过共享属性和方法，提升内存使用效率。

---

### Code Examples:

#### **Basic Prototype Pattern**

<audio src="..\..\mp3\这段代码展示了如何使用`Obj.mp3"></audio>

```javascript
const carPrototype = {
  drive() {
    console.log(`Driving a ${this.make} car.`);
  },
};

const car1 = Object.create(carPrototype); // Create an object inheriting from carPrototype
car1.make = "Toyota";
car1.drive(); // "Driving a Toyota car."

const car2 = Object.create(carPrototype);
car2.make = "Honda";
car2.drive(); // "Driving a Honda car."
```

#### **Prototype with Constructor Functions*

<audio src="..\..\mp3\这段代码展示了使用构造函数和原.mp3"></audio>

```javascript
function Car(make) {
  this.make = make;
}

Car.prototype.drive = function () {
  console.log(`Driving a ${this.make} car.`);
};

const car1 = new Car("Toyota");
car1.drive(); // "Driving a Toyota car."

const car2 = new Car("Honda");
car2.drive(); // "Driving a Honda car."
```

---

### Key Notes:

<audio src="..\..\mp3\1. Use __`Objec (1).mp3"></audio>

1. Use **`Object.create()`** for simple prototype-based inheritance.  
2. Use **constructor functions** or **classes** for structured instantiation with shared prototypes.  
3. The prototype pattern avoids duplication, improving memory efficiency and scalability.