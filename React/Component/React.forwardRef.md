### `React.forwardRef` in React

**`React.forwardRef`**: This function allows you to pass a **ref** from a parent component to a child component, giving the parent direct access to a child’s **DOM element** or **component instance**. Normally, refs can only be attached to DOM elements, but `React.forwardRef` lets functional components support refs. It’s useful for controlling focus, animations, or measuring DOM elements in child components.

<audio src="../../../../Downloads/__%60React.forwar.mp3"></audio>

#### Key Points:
- Passes a **ref** to a child component.
- Useful for **DOM access** in functional components.

> **`React.forwardRef`**：此函数允许您将 ref 从父组件传递到子组件，使父组件能够直接访问子组件的 DOM 元素或组件实例。通常，ref 只能附加到 DOM 元素，但 `React.forwardRef` 允许函数组件支持 ref。
>
> <audio src="../../../../Downloads/%60React.forwardR.mp3"></audio>

#### Example with Comments:

<audio src="../../../../Downloads/%E8%BF%99%E6%AE%B5%E4%BB%A3%E7%A0%81%E5%B1%95%E7%A4%BA%E4%BA%86%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20Rea%20(19).mp3"></audio>

```jsx
import React, { forwardRef } from 'react';

// Functional component with forwarded ref
const MyInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />  // The ref is attached to the input element
));

export default function ParentComponent() {
  const inputRef = React.useRef(null);

  const focusInput = () => {
    inputRef.current.focus();  // Access the input DOM element directly
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

In this example:
- **`forwardRef`** allows the parent to access the **input** element in the child component via **`inputRef`**.