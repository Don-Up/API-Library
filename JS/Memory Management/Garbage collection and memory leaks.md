### Garbage Collection and Memory Leaks in JavaScript

<audio src="..\..\mp3\__Garbage Colle.mp3"></audio>

**Garbage Collection (GC)** is the process of automatically reclaiming memory by removing unused objects. JavaScript uses algorithms like **mark-and-sweep**, where reachable objects (via variables, functions, closures, etc.) are "marked" and retained, while unreachable ones are cleared.

**Memory Leaks** occur when objects that are no longer needed remain reachable, preventing them from being garbage collected. Common causes include:

1. **Global Variables**:
   - Unused global variables persist for the program's lifetime.

2. **Uncleared Timers**:
   - `setInterval` or `setTimeout` references not cleared will retain objects.

3. **Closures**:
   - Functions holding unnecessary references to outer variables can prevent garbage collection.

4. **DOM Elements**:
   - Detached DOM nodes still referenced in code.

> **垃圾回收和内存泄漏**  
>
> <audio src="..\..\mp3\垃圾回收 (Garbage C.mp3"></audio>
>
> **垃圾回收 (Garbage Collection, GC)** 是通过自动移除未使用的对象来回收内存的过程。JavaScript 使用 **标记清除 (mark-and-sweep)** 算法，将可达对象（通过变量、函数、闭包等）“标记”并保留，而移除无法访问的对象。  
> **内存泄漏** 指不再需要的对象仍然可达，阻止其被垃圾回收。常见原因包括：  
>
> 1. **全局变量**：未使用的全局变量始终存在于内存中。  
> 2. **未清除的定时器**：未清除的 `setInterval` 或 `setTimeout` 保留引用。  
> 3. **闭包**：函数中保留了对外部变量的多余引用。  
> 4. **DOM 元素**：被引用的已移除 DOM 节点。

---

### Code Examples:

#### **Memory Leak: Uncleared Timer**

<audio src="..\..\mp3\这段代码展示了`setInte.mp3"></audio>

```javascript
let leak = {};
setInterval(() => {
  leak.data = new Array(1000).fill("leak"); // Retains memory
}, 1000);

// Solution: Clear the timer
const intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);
clearInterval(intervalId); // Prevents memory leak
```

---

#### **Memory Leak: Detached DOM Nodes**

<audio src="..\..\mp3\这段代码展示了因DOM节点被移.mp3"></audio>

```javascript
const div = document.createElement("div");
document.body.appendChild(div);

// Later detached, but still referenced
document.body.removeChild(div);

// Solution: Remove references
let detachedNode = document.getElementById("example");
detachedNode = null; // Allows garbage collection
```

---

### Key Notes:

<audio src="..\..\mp3\1. Garbage coll.mp3"></audio>

1. Garbage collection frees memory by cleaning unreachable objects.  
2. Memory leaks degrade performance and can cause crashes in long-running applications.  
3. Always clear timers, remove event listeners, and manage object references carefully.