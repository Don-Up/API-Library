### Observer Pattern in JavaScript

<audio src="..\..\mp3\Definition_  A  (1).mp3"></audio>

1. **Definition**:  
   - A design pattern where an object (subject) maintains a list of dependents (observers) and notifies them of state changes.  
   - Commonly used in event systems and reactive programming.

2. **Implementation**:  
   - The **subject** manages observers (add, remove, notify).  
   - **Observers** subscribe to the subject to receive updates.

3. **Benefits**:  
   - Promotes loose coupling between components.  
   - Simplifies event-driven architectures.

> **观察者模式**  
>
> <audio src="..\..\mp3\定义：  一种设计模式，对象（.mp3"></audio>
>
> 1. **定义**：  
>    - 一种设计模式，对象（主题）维护一个依赖列表（观察者），并在状态变化时通知它们。  
>    - 常用于事件系统和响应式编程。  
> 2. **实现**：  
>    - **主题**管理观察者（添加、移除、通知）。  
>    - **观察者**订阅主题以接收更新。  
> 3. **优点**：  
>    - 促进组件之间的松耦合。  
>    - 简化事件驱动的架构。

---

### Code Example:

#### **Implementation of Observer Pattern**

<audio src="..\..\mp3\这段代码展示了观察者模式的实现.mp3"></audio>

```javascript
// Subject
class Subject {
  constructor() {
    this.observers = []; // List of observers
  }

  // Add an observer
  subscribe(observer) {
    this.observers.push(observer);
  }

  // Remove an observer
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Notify all observers
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

// Observer
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received update:`, data);
  }
}

// Usage
const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Event 1"); // Observer 1 and Observer 2 receive notification
subject.unsubscribe(observer1);
subject.notify("Event 2"); // Only Observer 2 receives notification
```

---

### Key Notes:

<audio src="..\..\mp3\1. The __subjec.mp3"></audio>

1. The **subject** handles adding/removing observers and notifying them.  
2. Observers implement an **update** method to respond to notifications.  
3. The pattern is widely used in frameworks like **React** (hooks) and **Vue** (reactivity).