### `React.createRef` in React

**`React.createRef`**: This function creates a **ref** object that can be attached to React elements, allowing you to directly access DOM elements or component instances. The ref object has a **`current`** property, which stores the reference to the DOM node or component instance. It's commonly used in **class components** for actions like focusing an input or manipulating DOM elements directly.

<audio src="../../../../Downloads/__`React.create (2).mp3"></audio>

#### Key Points:
- Creates a **ref** object to access DOM or component instances.
- The ref object has a `.current` property.

> **`React.createRef`**：此函数创建一个 `ref` 对象，可附加到 React 元素，以便直接访问 DOM 元素或组件实例。`ref` 对象具有 `.current` 属性，用于存储对 DOM 节点或组件实例的引用。
>
> <audio src="../../../../Downloads/`React.createRe.mp3"></audio>

#### Example with Comments:

<audio src="../../../../Downloads/这段代码展示了如何在 Reac (2).mp3"></audio>

<audio src="../../../../Downloads/This code demon (8).mp3"></audio>

```jsx
import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Create a ref object
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    // Access the input element using the ref
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} placeholder="Enter text" />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}
```

In this example:
- **`React.createRef`** creates a ref for the input element, and **`this.inputRef.current.focus()`** is used to programmatically focus the input field.