### Transition Delay in TailwindCSS

**Transition Delay**: TailwindCSS provides utilities to control the **delay** before a transition starts. This is useful when you want to delay the beginning of an animation or transition effect. The delay is specified in milliseconds and can be combined with other transition properties like duration and timing function.

#### Common Transition Delay Classes:
- **`delay-75`**: 75ms delay.
- **`delay-150`**: 150ms delay.
- **`delay-300`**: 300ms delay for a slower start.
- **`delay-1000`**: 1-second delay.

> **过渡延迟**：TailwindCSS 提供了控制 **过渡延迟** 的工具类，用于定义过渡效果开始前的等待时间。延迟时间以毫秒为单位，可以与其他过渡属性一起使用。

#### React Example with JSX Comments:

```jsx
{/* 300ms delay before the background color transition */}
<div className="transition-colors duration-500 delay-300 bg-blue-500 hover:bg-red-500 p-4 text-white">
  Hover to change background color (300ms delay)
</div>

{/* 1 second delay before opacity transition */}
<div className="transition-opacity duration-500 delay-1000 opacity-100 hover:opacity-50 p-4 bg-green-500 text-white">
  Hover to change opacity (1 second delay)
</div>
```

In this React example:
- **`delay-300`** sets a 300ms delay before the background color transition starts.
- **`delay-1000`** introduces a 1-second delay before the opacity transition begins.