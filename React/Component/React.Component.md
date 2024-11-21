### `React.Component` in React

**`React.Component`**: This is the base class in React used to create **class components**. It allows you to manage component **state** and use **lifecycle methods** (e.g., `componentDidMount`, `componentDidUpdate`). Class components must define a `render()` method that returns JSX, which describes the UI. While functional components with hooks are now preferred, `React.Component` is still used when lifecycle control or state logic complexity is needed.

#### Key Points:
- Supports **state** and **lifecycle methods**.
- Requires a `render()` method to return JSX.

> **`React.Component`**：这是 React 中用于创建类组件的基类。它允许管理组件状态和使用生命周期方法（如 `componentDidMount` 和 `componentDidUpdate`）。虽然现在推荐使用带钩子的函数组件，但在需要复杂状态逻辑或生命周期控制时，仍可使用 `React.Component`。

#### Example with Comments:

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // Lifecycle method: called after component mounts
  componentDidMount() {
    console.log('Component mounted');
  }

  // Method to update state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method must return JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```

In this example:
- **`state`** is initialized in the constructor.
- **`componentDidMount`** is a lifecycle method that runs after the component has been rendered.
- **`render()`** returns JSX to display the UI.