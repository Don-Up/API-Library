### Common Event Types in JavaScript

<audio src="..\..\mp3\JavaScript even.mp3"></audio>

JavaScript events allow interaction with the DOM. Here are some commonly used event types:

1. **`click`**: Triggered when an element is clicked.  
2. **`input`**: Fires when the value of an input/textarea changes.  
3. **`change`**: Fires when an input/textarea/`<select>` value is changed and loses focus.  
4. **`load`**: Fires when the entire page, including resources (images, scripts), is fully loaded.  
5. **`DOMContentLoaded`**: Fires when the DOM is fully loaded, but before images and sub-resources are loaded.  
6. **`mouseover`**: Fires when the mouse hovers over an element.

> **常见事件类型**  
>
> <audio src="..\..\mp3\JavaScript 中的事件.mp3"></audio>
>
> JavaScript 中的事件允许与 DOM 交互。以下是常用的事件类型：  
>
> 1. **`click`**：在元素被点击时触发。  
> 2. **`input`**：在输入框/文本区域的值发生变化时触发。  
> 3. **`change`**：在输入框/文本区域/`<select>` 值改变并失去焦点时触发。  
> 4. **`load`**：在页面及其资源（如图片、脚本）完全加载后触发。  
> 5. **`DOMContentLoaded`**：在 DOM 完全加载，但资源（如图片）未加载时触发。  
> 6. **`mouseover`**：鼠标悬停在元素上时触发。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了常见的JavaS.mp3"></audio>

#### **`click` Event**
```javascript
document.querySelector("#btn").addEventListener("click", () => {
  console.log("Button clicked!");
});
```

#### **`input` vs. `change` Events**
```javascript
const input = document.querySelector("#textInput");

// Fires on every input change (real-time)
input.addEventListener("input", () => {
  console.log("Input value:", input.value);
});

// Fires when input loses focus after a change
input.addEventListener("change", () => {
  console.log("Input changed:", input.value);
});
```

#### **`load` and `DOMContentLoaded` Events**
```javascript
// Fires when all resources are loaded
window.addEventListener("load", () => {
  console.log("Page fully loaded");
});

// Fires when only the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
});
```

#### **`mouseover` Event**
```javascript
document.querySelector("#hoverElement").addEventListener("mouseover", () => {
  console.log("Mouse is over the element!");
});
```

---

### Key Notes:

<audio src="..\..\mp3\1.  Use __`DOMC.mp3"></audio>

1. Use **`DOMContentLoaded`** for scripts that manipulate the DOM without waiting for other resources.  
2. Prefer **`input`** for real-time changes and **`change`** for finalized input changes.  
3. Avoid heavy tasks in **`load`** to improve page performance.