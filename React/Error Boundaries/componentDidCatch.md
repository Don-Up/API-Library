### `componentDidCatch` in React

**`componentDidCatch`**: This lifecycle method is part of **error boundaries** and is invoked when a descendant component throws an error. It provides two arguments: the **error** and an **info object** containing details about where the error occurred (e.g., component stack trace). Unlike `getDerivedStateFromError`, which updates the state, `componentDidCatch` is used to perform **side effects** like logging errors to an external service.

#### Key Points:
- Catches errors thrown by child components.
- Used for **logging errors** or performing side effects.

> **`componentDidCatch`**：这是错误边界的生命周期方法，当子组件抛出错误时被调用。它提供两个参数：错误对象和包含错误发生位置信息的对象，通常用于记录错误或执行副作用。

#### Example with Comments:

```jsx
import React, { Component } from 'react';

// Error Boundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state when an error is caught
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log the error details
  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Error info:", info.componentStack); // Stack trace
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // Fallback UI
    }
    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error('I crashed!'); // Simulated error
}

export default function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
```

In this example:
- **`componentDidCatch`** logs the error and the component stack when **`BuggyComponent`** crashes.