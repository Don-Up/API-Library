### `componentDidMount` in React

**`componentDidMount`**: This is a React class component **lifecycle method** that gets called once, immediately after the component has been rendered to the DOM. It is typically used for **side effects** such as **fetching data**, **setting up subscriptions**, or **interacting with the DOM** (e.g., measuring elements). This method only runs once during the component's lifecycle, making it ideal for initialization tasks.

#### Key Points:
- Called **once** after the component is mounted.
- Used for **data fetching**, **DOM manipulation**, or **subscriptions**.

> **`componentDidMount`**：这是 React 类组件的生命周期方法，在组件挂载到 DOM 后立即调用一次。常用于执行副作用操作，如数据获取、设置订阅或与 DOM 交互等。

#### Example with Comments:

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    // Fetch data after component is mounted
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => console.log(data));
      
    // Example: Accessing DOM element
    console.log('Component mounted');
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default MyComponent;
```

In this example:
- **`componentDidMount`** fetches data from an API immediately after the component is mounted and logs it to the console.