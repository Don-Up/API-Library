### Testing DOM with `@testing-library/react`

<audio src="C:\Users\10691\Downloads\1.  Definition. (1).mp3"></audio>

1. **Definition**:  
   - **`@testing-library/react`** is a library for testing React components.  
   - It focuses on testing components as users interact with them (e.g., clicks, typing).  

2. **Features**:  
   - Provides utilities to query and interact with the DOM (e.g., `getByText`, `fireEvent`).  
   - Encourages testing behavior, not implementation details.  

3. **Benefits**:  
   - Simulates real user interactions.  
   - Works well with React's virtual DOM.  

> **使用 `@testing-library/react` 测试 DOM**  
>
> <audio src="C:\Users\10691\Downloads\定义：  `@testing-.mp3"></audio>
>
> 1. **定义**：  
>    - **`@testing-library/react`** 是一个用于测试 React 组件的工具库。  
>    - 专注于模拟用户与组件的交互（如点击、输入）。  
> 2. **功能**：  
>    - 提供查询和操作 DOM 的工具（如 `getByText`、`fireEvent`）。  
>    - 鼓励测试行为，而非实现细节。  
> 3. **优点**：  
>    - 模拟真实用户交互。  
>    - 与 React 的虚拟 DOM 配合效果良好。

---

### Code Example:

#### **Testing a Button Click**
```javascript
// Button.js
import React from "react";

export const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);
```

```javascript
// Button.test.js
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

test("calls onClick when button is clicked", () => {
  const handleClick = jest.fn(); // Mock function
  const { getByText } = render(<Button onClick={handleClick} label="Click Me" />);

  const button = getByText("Click Me"); // Query the button by its text
  fireEvent.click(button); // Simulate a click event

  expect(handleClick).toHaveBeenCalledTimes(1); // Assert the click handler was called
});
```

#### **Testing Input Interaction**
```javascript
// Input.js
import React, { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
      />
      <p>{value}</p>
    </div>
  );
};
```

```javascript
// Input.test.js
import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

test("updates input value and displays it", () => {
  const { getByPlaceholderText, getByText } = render(<Input />);

  const input = getByPlaceholderText("Enter text"); // Query input by placeholder
  fireEvent.change(input, { target: { value: "Hello" } }); // Simulate typing

  expect(getByText("Hello")).toBeInTheDocument(); // Assert the value is displayed
});
```

---

### Key Notes:
1. Use **query functions** like `getByText`, `getByPlaceholderText`, etc., to locate elements.  
2. Use **`fireEvent`** or **`userEvent`** to simulate user interactions like clicks and typing.  
3. Focus on **behavioral tests**, ensuring components work as expected from a user’s perspective.