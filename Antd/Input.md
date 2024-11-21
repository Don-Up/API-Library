### Input

Input component is a flexible and customizable input field for various user data entry scenarios. It supports:

- **Types**: `text`, `password`, `textarea`, `search`
- **Sizes**: `small`, `middle`, `large`
- **Status**: `error`, `warning`, `disabled`
- **Prefix/Suffix**: Add icons or text before/after input
- **Addon**: Additional label before/after input
- **Clear**: Built-in clear button
- **Event Handlers**: `onChange`, `onPressEnter`

### Common Usage Demo

![image-20241120080252259](assets\image-20241120080252259.png)

```jsx
import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Ant Design styles

const { TextArea } = Input;

const AntdInputDemo = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Input Demo</h2>
      
      {/* Basic Text Input */}
      <Input
        placeholder="Basic Input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginBottom: "10px", width: "300px" }}
      />

      {/* Input with Prefix and Suffix */}
      <Input
        placeholder="Input with Prefix and Suffix"
        prefix={<UserOutlined />}
        suffix=".com"
        style={{ marginBottom: "10px", width: "300px" }}
      />

      {/* Password Input */}
      <Input.Password
        placeholder="Password Input"
        style={{ marginBottom: "10px", width: "300px" }}
      />

      {/* Search Input */}
      <Input.Search
        placeholder="Search Input"
        enterButton="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={(value) => console.log("Search for:", value)}
        style={{ marginBottom: "10px", width: "300px" }}
      />

      {/* TextArea Input */}
      <TextArea
        rows={4}
        placeholder="TextArea Input"
        maxLength={100}
        style={{ marginBottom: "10px", width: "300px" }}
      />

      {/* Input with Error Status */}
      <Input
        placeholder="Input with Error Status"
        status="error"
        style={{ marginBottom: "10px", width: "300px" }}
      />

      {/* Disabled Input */}
      <Input
        placeholder="Disabled Input"
        disabled
        style={{ width: "300px" }}
      />
    </div>
  );
};

export default AntdInputDemo;
```

### Features in the React Component:
1. **Basic Input**: A simple text input field.
2. **Prefix/Suffix**: Icons or text before/after the input field (e.g., username with a domain suffix).
3. **Password Input**: Secure password entry with masking.
4. **Search Input**: Search field with a button, and an event handler for search actions.
5. **TextArea**: Multi-line input for larger text content.
6. **Input with Status**: Shows how to mark inputs with `error` status.
7. **Disabled Input**: A field that is disabled and non-interactive.
