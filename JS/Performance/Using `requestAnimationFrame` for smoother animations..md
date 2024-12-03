### Using `requestAnimationFrame` for Smoother Animations

<audio src="C:\Users\10691\Downloads\1.  Definition. (5).mp3"></audio>

1. **Definition**:  
   - `requestAnimationFrame()` schedules a function to update animations before the next screen repaint (~60 times/second).  
   - Provides smoother, CPU-efficient animations compared to `setInterval` or `setTimeout`.

2. **Benefits**:  
   - Automatically syncs with the display's refresh rate.  
   - Stops updates when the tab is inactive, saving resources.

3. **Usage**:  
   - Continuously call `requestAnimationFrame` inside an animation loop.  
   - Use a timestamp for precise timing.

> **使用 `requestAnimationFrame` 实现平滑动画**  
>
> <audio src="C:\Users\10691\Downloads\定义：  `requestAn.mp3"></audio>
>
> 1. **定义**：  
>    - `requestAnimationFrame()` 在下次屏幕重绘前调用指定的回调函数（约每秒60次）。  
>    - 比 `setInterval` 或 `setTimeout` 提供更平滑、更高效的动画。  
> 2. **优点**：  
>    - 自动与显示器刷新率同步。  
>    - 当标签页不活动时暂停更新，节省资源。  
> 3. **用法**：  
>    - 在动画循环中连续调用 `requestAnimationFrame`。  
>    - 使用时间戳实现精确计时。

---

### Code Example:

#### **Smooth Animation with `requestAnimationFrame`**
```javascript
const box = document.getElementById("box"); // A div with id "box"
let position = 0;

function animate(timestamp) {
  position += 2; // Move 2px per frame
  box.style.transform = `translateX(${position}px)`; // Update position

  if (position < 500) {
    requestAnimationFrame(animate); // Continue the animation
  }
}

requestAnimationFrame(animate); // Start the animation
```

#### **Using Timestamp for Time-Based Animations**
```javascript
const box = document.getElementById("box");
let start = null;

function animate(timestamp) {
  if (!start) start = timestamp; // Initialize start time
  const elapsed = timestamp - start; // Calculate elapsed time

  const position = Math.min(elapsed / 10, 500); // Move smoothly, max at 500px
  box.style.transform = `translateX(${position}px)`;

  if (position < 500) {
    requestAnimationFrame(animate); // Continue animation
  }
}

requestAnimationFrame(animate); // Start animation
```

---

### Key Notes:
1. **`requestAnimationFrame`** syncs with the browser’s refresh rate, ensuring smooth animations.  
2. Use **timestamps** for time-based motion, adapting to frame rate variations.  
3. Always include a stopping condition to avoid infinite loops.