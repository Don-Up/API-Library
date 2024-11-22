### `React.useTransition` in React

**`React.useTransition`**: This React Hook allows you to mark state updates as **non-urgent**, improving UI responsiveness during expensive updates. It returns a tuple: a boolean (`isPending`) indicating if the transition is in progress, and a function (`startTransition`) to wrap non-urgent updates. It’s commonly used for deferring updates like rendering large lists, ensuring smoother interactions, such as typing or clicking.

<audio src="..\..\mp3\__`React.useTra.mp3"></audio>

#### Key Points:
- Defers **non-urgent** state updates to maintain responsiveness.

- Returns `[isPending, startTransition]`.

- <audio src="..\..\mp3\- Defers __non- (1).mp3"></audio>

> **`React.useTransition`**：此 React Hook 允许将状态更新标记为**非紧急**，在执行繁重更新时提高 UI 响应性。返回一个元组：`isPending` 表示过渡是否进行中，`startTransition` 用于包装非紧急更新。
>
> <audio src="..\..\mp3\React.useTransi.mp3"></audio>

#### Example with Comments:

<audio src="..\..\mp3\这段代码展示了如何使用 Rea (18).mp3"></audio>

```jsx
import React, { useState, useTransition } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value); // Urgent update for input typing

    // Non-urgent update for rendering the list
    startTransition(() => {
      const newList = Array(10000).fill(e.target.value);
      setList(newList);
    });
  };

  return (
    <div>
      <input value={text} onChange={handleChange} placeholder="Type something..." />
      {isPending && <p>Updating list...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

In this example:
- **`useTransition`** defers the rendering of the large list, while **`isPending`** shows a loading state to indicate the transition is in progress.

- <audio src="..\..\mp3\__`useTransitio (1).mp3"></audio>