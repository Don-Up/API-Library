### Custom Events in JavaScript

<audio src="C:\Users\10691\Downloads\Custom events a.mp3"></audio>

Custom events allow you to define and trigger your own events in JavaScript. They are created using the **`CustomEvent`** constructor.

#### **Steps**:
1. **Create a custom event** using `new CustomEvent(eventName, options)`.  
   - `eventName`: Name of the event.  
   - `options`: An object with a `detail` property to pass additional data.
2. **Dispatch the event** using `element.dispatchEvent(event)`.  
3. **Listen for the event** using `addEventListener`.

> **自定义事件**  
>
> <audio src="C:\Users\10691\Downloads\JavaScript 中可以定.mp3"></audio>
>
> JavaScript 中可以定义和触发自己的事件，使用 **`CustomEvent`** 构造函数实现。  
>
> #### **步骤**：  
> 1. **创建自定义事件**：使用 `new CustomEvent(eventName, options)`。  
>    - `eventName`：事件名称。  
>    - `options`：对象，包含 `detail` 属性可传递附加数据。  
> 2. **触发事件**：使用 `element.dispatchEvent(event)`。  
> 3. **监听事件**：使用 `addEventListener`。

---

### Code Example:

#### **Creating and Dispatching a Custom Event**

<audio src="C:\Users\10691\Downloads\这段代码展示了如何创建和触发自.mp3"></audio>

```javascript
// Create a custom event named "myCustomEvent" with data
const myEvent = new CustomEvent("myCustomEvent", {
  detail: { message: "Hello, this is a custom event!" },
});

// Add an event listener for "myCustomEvent"
document.addEventListener("myCustomEvent", (event) => {
  console.log("Custom event triggered:", event.detail.message);
});

// Dispatch the custom event
document.dispatchEvent(myEvent); // Logs: "Custom event triggered: Hello, this is a custom event!"
```

#### **Passing and Accessing Data**

<audio src="C:\Users\10691\Downloads\这段代码展示了如何为某个DOM.mp3"></audio>

```javascript
const button = document.querySelector("#myButton");

// Listen for the custom event
button.addEventListener("customClick", (event) => {
  console.log("Custom data:", event.detail.value);
});

// Trigger the event with custom data
button.dispatchEvent(
  new CustomEvent("customClick", { detail: { value: 42 } })
);
// Logs: "Custom data: 42"
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1.  Use __`deta.mp3"></audio>

1. Use **`detail`** in the options to pass data with custom events.  
2. Custom events can bubble by setting `{ bubbles: true }` in options.  
3. They can be canceled using `event.preventDefault()` if `{ cancelable: true }` is set.