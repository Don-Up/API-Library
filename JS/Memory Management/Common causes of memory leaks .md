### Common Causes of Memory Leaks

<audio src="C:\Users\10691\Downloads\1. Global Varia.mp3"></audio>

1. **Global Variables**:
   - Variables declared globally persist throughout the program's lifetime.

2. **Unremoved Event Listeners**:
   - Event listeners attached to DOM elements or objects but not removed keep references alive.

3. **Closures**:
   - Functions retaining references to outer scopes can hold unused objects in memory.

4. **Detached DOM Nodes**:
   - DOM nodes removed from the DOM tree but still referenced prevent garbage collection.

5. **Timers/Intervals**:
   - Unstopped `setInterval` or `setTimeout` hold objects in memory.

> **内存泄漏的常见原因**  
>
> <audio src="C:\Users\10691\Downloads\全局变量：  声明的全局变量在.mp3"></audio>
>
> 1. **全局变量**：  
>    - 声明的全局变量在程序运行期间一直存在内存中。  
> 2. **未移除的事件监听**：  
>    - 附加到 DOM 元素的事件监听器未移除，会保持对对象的引用。  
> 3. **闭包**：  
>    - 闭包中对外部作用域的引用会使未使用的对象无法回收。  
> 4. **脱离的 DOM 节点**：  
>    - 已从 DOM 树中移除但仍被引用的节点。  
> 5. **计时器/周期任务**：  
>    - 未清除的 `setInterval` 或 `setTimeout` 会保持对象引用。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\第一个示例中，直接赋值`lea.mp3"></audio>

#### **Global Variables**
```javascript
leak = {}; // Global variable persists in memory
```

#### **Unremoved Event Listeners**
```javascript
const button = document.getElementById("btn");
button.addEventListener("click", () => console.log("Clicked"));
// Solution: Remove listener
button.removeEventListener("click", handler);
```

#### **Detached DOM Nodes**
```javascript
let div = document.createElement("div");
document.body.appendChild(div);
document.body.removeChild(div); // Detached but still referenced
div = null; // Solution: Remove reference
```

#### **Closures**
```javascript
function createClosure() {
  const largeArray = new Array(1000).fill("data");
  return () => console.log(largeArray); // Retains reference
}
const closure = createClosure();
closure = null; // Solution: Remove reference
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. Careful mana.mp3"></audio>

1. Careful management of references prevents memory leaks.  
2. Always remove event listeners and clear timers when they’re no longer needed.  
3. Avoid unnecessary global variables.