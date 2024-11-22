### `React.PureComponent` in React

**`React.PureComponent`**: This is a base class similar to `React.Component`, but it implements **shallow comparison** on `props` and `state` in its `shouldComponentUpdate` method. This means that a `PureComponent` will only re-render if **props** or **state** changes by reference. It helps optimize performance by preventing unnecessary renders. However, it should be used only when the component's props and state are simple and do not involve deep structures like nested objects.

<audio src="../../../../Downloads/__`React.PureCo (1).mp3"></audio>

#### Key Points:
- Automatically performs **shallow comparison**.
- Prevents **unnecessary re-renders** for performance optimization.

> **`React.PureComponent`**：这是与 `React.Component` 类似的基类，但它在 `shouldComponentUpdate` 方法中实现了对 `props` 和 `state` 的浅比较。只有当 `props` 或 `state` 发生引用变化时，`PureComponent` 才会重新渲染，适用于简单的 props 和状态结构。
>
> <audio src="../../../../Downloads/`React.PureComp.mp3"></audio>

#### Example with Comments:

<audio src="../../../../Downloads/这段代码展示了如何使用 Rea (20).mp3"></audio>

<audio src="../../../../Downloads/This code demon (1).mp3"></audio>

```jsx
import React, { PureComponent } from 'react';

class MyComponent extends PureComponent {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('Rendered');
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
- **`MyComponent`** will only re-render if `state.count` or `props` changes by reference, optimizing performance.