### AutoComplete

AutoComplete is a component for input suggestions, providing dynamic options based on user input.

- **Data Source**: Accepts an array of options for suggestions
- **Custom Rendering**: Supports custom rendering for options
- **Controlled/Uncontrolled**: Can manage input state manually or automatically
- **Event Handlers**: `onSelect`, `onSearch` to handle selection and search events
- **Dropdown**: Displays matched suggestions in a dropdown
- **Deb ounce**: Can integrate with debounced search for performance
- **Filter**: Supports filtering options based on input

### Common Usage Demo

![image-20241120125350410](assets\image-20241120125350410.png)

```jsx
import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const AntdAutoCompleteDemo = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    if (value) {
      setOptions([
        { value: `${value}@gmail.com` },
        { value: `${value}@yahoo.com` },
        { value: `${value}@outlook.com` },
      ]);
    } else {
      setOptions([]);
    }
  };

  const handleSelect = (value) => {
    console.log("Selected:", value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design AutoComplete Demo</h2>

      <AutoComplete
        style={{ width: 300 }}
        options={options}
        onSelect={handleSelect}
        onSearch={handleSearch}
        placeholder="Enter email"
      >
        <Input />
      </AutoComplete>
    </div>
  );
};

export default AntdAutoCompleteDemo;
```

### Features in the Demo:
1. **Basic AutoComplete**: Suggests email domains based on user input.
2. **Dynamic Options**: Updates suggestions as user types.
3. **Custom Rendering**: Uses default `Input` as the child component.
4. **Event Handlers**: Logs the selected suggestion with `onSelect`.
5. **Debounced Search**: Can be easily modified to debounce search for performance.