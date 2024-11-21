### Cascader

Cascader is a component that allows users to select options from a hierarchical structure.

- **Components**: `Cascader`
- **Options**: Hierarchical data structure for nested options
- **Multiple Selection**: Supports single or multiple selections
- **Searchable**: Includes search functionality to filter options
- **Customizable**: Supports custom field names for flexibility
- **Lazy Loading**: Load options dynamically as needed
- **Event Handlers**: `onChange`, `onSelect` for option events
- **Disabled/Read-Only**: Disable specific options or entire component

### Common Usage Demo (React Component)

![image-20241120141209081](assets\image-20241120141209081.png)

```jsx
import React, { useState } from "react";
import { Cascader } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const AntdCascaderDemo = () => {
  const [value, setValue] = useState([]);

  const onChange = (value) => {
    console.log(value);
    setValue(value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Cascader Demo</h2>

      {/* Basic Cascader */}
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Please select"
        style={{ width: 300 }}
      />
    </div>
  );
};

export default AntdCascaderDemo;
```

### Features in the Demo:
1. **Basic Cascader**: Demonstrates hierarchical selection with nested options.
2. **Dynamic Value**: Logs selected values and updates the state.
3. **Custom Placeholder**: Customizable input placeholder.
4. **Searchable**: Automatically supports searching within options.
5. **Hierarchical Options**: Shows multiple levels of nested options.