### `componentDidUpdate` in React

**`componentDidUpdate`**: This React lifecycle method is invoked **after every re-render** caused by changes in **props** or **state**. It provides access to the **previous props** and **previous state**, enabling you to perform actions based on changes, such as **fetching new data** or **interacting with the DOM**. To avoid infinite loops, always compare the current and previous values before updating state or triggering side effects.

<audio src="C:\Users\10691\Downloads\__`componentDid (4).mp3"></audio>

#### Key Points:
- Called **after every re-render**.

- Use it to respond to **prop** or **state changes**.

- Compare previous and current values to avoid infinite loops.

- <audio src="C:\Users\10691\Downloads\- Called __afte.mp3"></audio>

> **`componentDidUpdate`**：这是 React 的生命周期方法，在每次组件因 props 或 state 变化而重新渲染后调用。可以根据变化执行操作，如数据获取或 DOM 交互，需比较前后值以避免无限循环。
>
> <audio src="C:\Users\10691\Downloads\componentDidUpd.mp3"></audio>

#### Example with Comments:

<audio src="C:\Users\10691\Downloads\这段代码展示了一个 React (1).mp3"></audio>

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    count: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    // Only log when the count state changes
    if (prevState.count !== this.state.count) {
      console.log('Count updated:', this.state.count);
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

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
- **`componentDidUpdate`** checks if the `count` state has changed before logging.

- <audio src="C:\Users\10691\Downloads\__`componentDid (5).mp3"></audio>