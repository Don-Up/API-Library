### Error Boundaries in React

**Error Boundaries**: These are React components that **catch JavaScript errors** in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app. Error boundaries only catch errors during **rendering**, **lifecycle methods**, and **constructor** of child components, not in event handlers. To create an error boundary, a class component must implement **`componentDidCatch`** and **`getDerivedStateFromError`**.

<audio src="C:\Users\10691\Downloads\__Error Boundar.mp3"></audio>

#### Key Points:
- Catch errors in **rendering** and **lifecycle methods**.

- Display a **fallback UI** instead of crashing the app.

- <audio src="C:\Users\10691\Downloads\- Catch errors .mp3"></audio>

> **Error Boundaries**：这是 React 组件，用于捕获其子组件树中的 JavaScript 错误，记录这些错误，并显示备用 UI，而不是让整个应用崩溃。错误边界只捕获渲染、生命周期方法和构造函数中的错误。
>
> <audio src="C:\Users\10691\Downloads\Error Boundarie.mp3"></audio>

#### Example with Comments:

<audio src="C:\Users\10691\Downloads\这段代码展示了如何使用 Rea (12).mp3"></audio>

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

  // Log the error
  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // Fallback UI
    }
    return this.props.children; // Normal rendering
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
- **`ErrorBoundary`** catches the error thrown by **`BuggyComponent`** and displays a fallback message instead of crashing the app.

- <audio src="C:\Users\10691\Downloads\__`ErrorBoundar.mp3"></audio>