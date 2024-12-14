### Event Handling in JavaScript

<audio src="..\..\mp3\Event handling .mp3"></audio>

Event handling in JavaScript allows interaction with the DOM by responding to user actions (e.g., clicks, keypresses). Important concepts include:

#### **1. `addEventListener`**:
- Attaches an event listener to an element.  
- Syntax: `element.addEventListener(event, handler, options)` where `options` can control event propagation (bubbling or capturing).  

#### **2. Event Propagation**:
- **Bubbling**: Events propagate from the target element **upward** to its ancestors.  
- **Capturing**: Events propagate from the root **downward** to the target element.  
- Controlled using the `capture` option in `addEventListener`.  

#### **3. Event Delegation**:
- Use a parent element to listen for events on its children.  
- Efficient for dynamically generated elements.

#### **4. Removing Event Listeners**:
- Use `removeEventListener` to detach a listener.

> **事件处理（`addEventListener`、事件委托、冒泡、捕获）**  
> JavaScript 的事件处理允许通过响应用户操作（如点击、按键）与 DOM 交互。主要概念包括：  
> #### **1. `addEventListener`**：
>
> <audio src="..\..\mp3\`addEventListen.mp3"></audio>
>
> - 将事件监听器附加到元素上。  
> - 语法：`element.addEventListener(event, handler, options)`，其中 `options` 可控制事件传播（冒泡或捕获）。  
> #### **2. 事件传播**：
>
> <audio src="..\..\mp3\事件传播：- 冒泡（Bubbl.mp3"></audio>
>
> - **冒泡（Bubbling）**：事件从目标元素向上传播到其祖先元素。  
> - **捕获（Capturing）**：事件从根元素向下传播到目标元素。  
> - 使用 `addEventListener` 的 `capture` 选项控制传播。  
> #### **3. 事件委托**：
>
> <audio src="..\..\mp3\事件委托：- 使用父元素监听子.mp3"></audio>
>
> - 使用父元素监听子元素的事件，适合动态生成的元素。  
> #### **4. 移除事件监听器**：
>
> <audio src="..\..\mp3\移除事件监听器：- 使用 `r.mp3"></audio>
>
> - 使用 `removeEventListener` 解除监听。

---

### Code Examples:

#### **Basic `addEventListener`**
```javascript
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

#### **Event Propagation: Bubbling and Capturing**

<audio src="..\..\mp3\这段代码展示了JavaScri.mp3"></audio>

```javascript
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Bubbling (default behavior)
parent.addEventListener("click", () => console.log("Parent clicked!"), false);
child.addEventListener("click", () => console.log("Child clicked!"), false);

// Capturing
parent.addEventListener("click", () => console.log("Parent clicked (capturing)!"), true);

// Clicking the child logs:
// Parent clicked (capturing)!
// Child clicked!
// Parent clicked!
```

#### **Event Delegation**

<audio src="..\..\mp3\这段代码展示了事件委托的用法，.mp3"></audio>

```javascript
const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`You clicked on ${event.target.textContent}`);
  }
});

// Handles clicks on dynamically added <li> elements
const newItem = document.createElement("li");
newItem.textContent = "New Item";
list.appendChild(newItem);
```

#### **Removing an Event Listener**

<audio src="..\..\mp3\这段代码展示了如何通过Java (4).mp3"></audio>

```javascript
function logClick() {
  console.log("Button clicked!");
}

const button = document.querySelector("#myButton");
button.addEventListener("click", logClick);
button.removeEventListener("click", logClick); // Removes the listener
```

---

### Key Notes:
1. **Bubbling** is the default event propagation. Use `{ capture: true }` for capturing phase.  
2. **Event delegation** improves performance and handles dynamic elements effectively.  
3. Always use **`removeEventListener`** to prevent memory leaks for long-lived elements.  
4. Use `event.target` to identify the element that triggered the event.