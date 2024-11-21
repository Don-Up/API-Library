### Transition Duration in TailwindCSS

**Transition Duration**: TailwindCSS provides utilities to control the **duration** of transitions, which defines how long a transition takes to complete. You can specify durations in milliseconds, enabling smooth animations for properties like opacity, color, or transforms.

#### Common Transition Duration Classes:
- **`duration-75`**: 75 milliseconds.
- **`duration-150`**: 150 milliseconds (default).
- **`duration-300`**: 300 milliseconds for a slower effect.
- **`duration-1000`**: 1 second for longer transitions.

> **过渡持续时间**：TailwindCSS 提供了控制 **过渡持续时间** 的工具类，用于定义动画过渡的时长。你可以为属性的变化设置不同的持续时间，以实现平滑的动画效果。

#### React Example with JSX Comments:

```jsx
{/* 300ms transition duration for background color */}
<div className="transition-colors duration-300 bg-blue-500 hover:bg-red-500 p-4 text-white">
  Hover to change background color (300ms)
</div>

{/* 1000ms transition duration for opacity */}
<div className="transition-opacity duration-1000 opacity-100 hover:opacity-50 p-4 bg-green-500 text-white">
  Hover to change opacity (1 second)
</div>
```

In this React example:
- **`duration-300`** sets a 300ms transition for changing the background color.
- **`duration-1000`** sets a 1-second transition for opacity changes.