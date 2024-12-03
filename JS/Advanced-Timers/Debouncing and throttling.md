### Debouncing and Throttling in JavaScript

<audio src="C:\Users\10691\Downloads\Debouncing and .mp3"></audio>

**Debouncing** and **throttling** optimize performance by controlling how often a function is executed, especially during high-frequency events like scrolling or typing.

1. **Debouncing**:
   - Ensures a function executes **after a delay** since the last call.
   - Useful for reducing calls on events like resizing or searching.

2. **Throttling**:
   - Ensures a function executes **at regular intervals** regardless of event frequency.
   - Useful for limiting executions like scroll or resize events.

> **防抖和节流**  
>
> <audio src="C:\Users\10691\Downloads\防抖 和 节流 优化了函数的执.mp3"></audio>
>
> **防抖** 和 **节流** 优化了函数的执行频率，在滚动、输入等高频事件中尤为重要：  
>
> 1. **防抖（Debouncing）**：  
>    - 确保函数在**最后一次调用后的延迟**时间内只执行一次。  
>    - 适合减少输入搜索或窗口调整大小事件的调用次数。  
> 2. **节流（Throttling）**：  
>    - 确保函数以**固定时间间隔**执行，无论事件触发有多频繁。  
>    - 适合限制滚动或窗口调整大小的执行频率。

---

### Code Examples:

#### **Debouncing**

<audio src="C:\Users\10691\Downloads\防抖是一种优化技术，用于限制高.mp3"></audio>

```javascript
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId); // Clear previous timer
    timeoutId = setTimeout(() => func.apply(this, args), delay); // Set new timer
  };
}

const onSearch = debounce(() => {
  console.log("Searching...");
}, 500);

document.getElementById("searchInput").addEventListener("input", onSearch);
```

---

#### **Throttling**

<audio src="C:\Users\10691\Downloads\节流是一种优化技术，用于限制某.mp3"></audio>

```javascript
function throttle(func, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const onScroll = throttle(() => {
  console.log("Scrolling...");
}, 1000);

window.addEventListener("scroll", onScroll);
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1.  __Debouncin.mp3"></audio>

1. **Debouncing** waits for the event to stop before executing the function.  
2. **Throttling** ensures the function runs at fixed intervals during frequent events.  
3. Use debouncing for **final actions** (e.g., search) and throttling to **reduce load** (e.g., scroll).