### `useLayoutEffect` in React

**`useLayoutEffect`**: This React Hook is similar to `useEffect`, but it fires **synchronously** after all **DOM mutations** and **before the browser paints**. It’s ideal for operations that need to **measure or manipulate the DOM** immediately, such as animations or layout calculations. Unlike `useEffect`, which runs asynchronously, `useLayoutEffect` blocks the render until the effect is completed, ensuring the DOM is in the desired state before the user sees it.

#### Key Points:
- Runs **synchronously** after DOM changes, before the screen is updated.
- Useful for **DOM measurements** or **layout adjustments**.

> **`useLayoutEffect`**：这个钩子与 `useEffect` 类似，但它在所有 DOM 变更后**同步**执行，并且在浏览器绘制之前运行。适用于需要立即测量或操作 DOM 的场景，如动画或布局调整。

#### Example with Comments:

```jsx
import React, { useLayoutEffect, useRef, useState } from 'react';

export default function MyComponent() {
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Use useLayoutEffect to measure the height of the div after render
  useLayoutEffect(() => {
    const divHeight = divRef.current.getBoundingClientRect().height;
    setHeight(divHeight); // Set the height after measuring
  }, []); // Runs once after the initial render

  return (
    <div>
      <div ref={divRef} style={{ padding: '20px', backgroundColor: 'lightblue' }}>
        Hello, measure my height!
      </div>
      <p>Measured height: {height}px</p>
    </div>
  );
}
```

In this example:
- **`useLayoutEffect`** measures the **height** of a `<div>` after it has been rendered, ensuring the measurement happens **before the browser paints** the screen.