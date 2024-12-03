### `React.StrictMode` in React  

**`React.StrictMode`** is a development tool in React to help identify potential issues in your application. It activates additional checks and warnings for its descendants, such as detecting unsafe lifecycle methods, unexpected side effects, and deprecated APIs. It only runs in development mode and does not impact production builds.  

1. **Use Case**:  
   - Debug and ensure React components follow best practices.  

2. **Key Features**:  
   - Detects side effects in rendering.  
   - Warns about legacy code.  

3. **Usage**:  
   - Wrap components with `<React.StrictMode>` in your app.  

> **React.StrictMode 在 React 中的作用** 
>
>  <audio src="C:\Users\10691\Downloads\React.StrictMod.mp3"></audio>
> **`React.StrictMode`** 是 React 的一个开发工具，用于帮助识别应用中的潜在问题。它会对其子组件启用额外的检查和警告，例如检测不安全的生命周期方法、意外的副作用以及被废弃的 API。它仅在开发模式下运行，不影响生产环境的构建。  
>
> 1. **使用场景**：  
>    - 调试和确保 React 组件遵循最佳实践。  
> 2. **主要功能**：  
>    - 检测渲染中的副作用。  
>    - 警告遗留代码的使用。  
> 3. **用法**：  
>    - 在应用中使用 `<React.StrictMode>` 包裹组件。  

---

### Code Examples:

#### **Basic Usage**
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- **What it does**:  
  - Warns about deprecated lifecycle methods (e.g., `componentWillMount`).  
  - Checks for unexpected side effects (e.g., modifying state outside `useEffect`).  

---

#### **Detecting Side Effects**
```javascript
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Intentional side effect in render
  console.log('Rendering: Side effect detected!');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default function App() {
  return (
    <React.StrictMode>
      <Example />
    </React.StrictMode>
  );
}
```

- **Warning**: React will notify if side effects (e.g., `console.log`) are performed during rendering.  

---

#### **Detecting Deprecated APIs**
```javascript
import React from 'react';

class LegacyComponent extends React.Component {
  componentWillMount() {
    console.log('This lifecycle method is deprecated!');
  }

  render() {
    return <div>Legacy Component</div>;
  }
}

export default function App() {
  return (
    <React.StrictMode>
      <LegacyComponent />
    </React.StrictMode>
  );
}
```

- **Warning**: React will warn about the use of `componentWillMount`, which is deprecated.  

---

### Key Notes:  
1. **Development-Only**: `StrictMode` runs checks only in development mode.  
2. **Best Practices**: Encourages modern React patterns like using `useEffect` instead of legacy lifecycle methods.  
3. **Double Rendering**: Triggers double rendering to detect side effects in components.  

#### Example of Double Rendering Check:
```javascript
function TestComponent() {
  React.useEffect(() => {
    console.log('Effect executed');
  }, []);

  console.log('Rendering component');
  return <div>Test Component</div>;
}

function App() {
  return (
    <React.StrictMode>
      <TestComponent />
    </React.StrictMode>
  );
}

// Logs:
// Rendering component
// Rendering component (StrictMode renders twice in dev)
// Effect executed
```