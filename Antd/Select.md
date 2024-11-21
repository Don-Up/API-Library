### Select

Select is a dropdown component that enables users to select an option from a list.

- **Components**: `Select`, `Option`
- **Modes**: Supports single and multiple selection
- **Searchable**: Allows searching through options with a filter
- **Disabled**: Can disable individual options or the entire component
- **Tags Mode**: Users can create new items (tags) dynamically
- **Customizable Dropdown**: Custom render for options and dropdown behavior
- **Event Handlers**: `onChange`, `onSelect`, `onDeselect` for interaction
- **Clearable**: Supports clearing the selection with a close button

### Common Usage Demo

![image-20241120152253115](assets\image-20241120152253115.png)

```jsx
import React, { useState } from "react";
import { Select } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const { Option } = Select;

const AntdSelectDemo = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    console.log("Selected:", value);
    setSelectedValue(value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Select Demo</h2>

      {/* Basic Single Select */}
      <Select
        style={{ width: 200 }}
        placeholder="Select an option"
        onChange={handleChange}
        value={selectedValue}
        allowClear
      >
        <Option value="apple">Apple</Option>
        <Option value="orange">Orange</Option>
        <Option value="banana">Banana</Option>
      </Select>

      <br /><br />

      {/* Multiple Select */}
      <Select
        mode="multiple"
        style={{ width: 300 }}
        placeholder="Select multiple options"
        onChange={handleChange}
        allowClear
      >
        <Option value="apple">Apple</Option>
        <Option value="orange">Orange</Option>
        <Option value="banana">Banana</Option>
        <Option value="grape">Grape</Option>
      </Select>

      <br /><br />

      {/* Select with Search */}
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Search for a fruit"
        optionFilterProp="children"
        onChange={handleChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        <Option value="apple">Apple</Option>
        <Option value="orange">Orange</Option>
        <Option value="banana">Banana</Option>
      </Select>
    </div>
  );
};

export default AntdSelectDemo;
```

### Features in the Demo:
1. **Basic Single Select**: Allows selecting one option with `allowClear` enabled.
2. **Multiple Select**: Allows selecting multiple options via checkbox-style inputs.
3. **Searchable Select**: Provides a searchable dropdown with filtering.
4. **Clearable**: Adds the ability to clear the selection with a close button.
5. **Controlled State**: Manages selected value using state.