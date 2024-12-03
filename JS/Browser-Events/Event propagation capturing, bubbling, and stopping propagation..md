### Event Propagation: Capturing, Bubbling, and Stopping Propagation

**Event propagation** determines how events travel through the DOM. It occurs in three phases:

1. **Capturing (Capture Phase)**: The event moves from the root down to the target element.  
2. **Target Phase**: The event reaches the target element.  
3. **Bubbling (Bubble Phase)**: The event moves back up from the target to the root.

#### **Stopping Propagation**:
1. **`event.stopPropagation()`**: Stops the event from propagating further in **bubbling** or **capturing** phases.  
2. **`event.stopImmediatePropagation()`**: Stops the event and prevents other listeners on the same element.

> **事件传播：捕获、冒泡与停止传播**  
> **事件传播** 决定事件如何在 DOM 中扩散，分为三个阶段：  
> 1. **捕获阶段（Capturing）**：事件从根节点向目标元素下传。  
> 2. **目标阶段（Target Phase）**：事件到达目标元素。  
> 3. **冒泡阶段（Bubbling）**：事件从目标元素向上返回到根节点。  
> #### **停止传播**：  
> 1. **`event.stopPropagation()`**：阻止事件在捕获或冒泡阶段进一步传播。  
> 2. **`event.stopImmediatePropagation()`**：停止事件传播，并阻止当前元素上的其他监听器。

---

### Code Examples:

#### **Capturing and Bubbling**
```javascript
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Capturing (set third argument to true)
parent.addEventListener(
  "click",
  () => console.log("Parent capturing"),
  true
);

// Bubbling (default behavior)
parent.addEventListener("click", () => console.log("Parent bubbling"));
child.addEventListener("click", () => console.log("Child clicked"));
```

**Output when clicking the child**:
- Parent capturing  
- Child clicked  
- Parent bubbling  

#### **Stopping Propagation**
```javascript
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", () => console.log("Parent clicked"));
child.addEventListener("click", (event) => {
  console.log("Child clicked");
  event.stopPropagation(); // Stops event from reaching parent
});
```

**Output when clicking the child**:
- Child clicked  

---

### Key Notes:
1. **Bubbling** is the default phase; use `{ capture: true }` for capturing.  
2. Use **`stopPropagation`** to prevent parent listeners from firing.  
3. Avoid overusing propagation stopping to maintain flexibility in event handling.