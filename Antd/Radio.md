### Radio

Radio simplifies **single-choice** selection from a set of options.

- **Components**: `Radio`, `Radio.Group`, `Radio.Button`
- **Radio Group**: Allows multiple radio buttons to be grouped
- **Controlled/Uncontrolled**: Can manage selection state manually or automatically
- **Disabled**: Disable individual radios or the entire group
- **Button Style**: Option to display radios as buttons for better UX
- **Event Handlers**: `onChange` for value change events
- **Layout**: Supports horizontal and vertical arrangements

### Common Usage Demo 

![image-20241120151423322](assets\image-20241120151423322.png)

```jsx
import React, { useState } from "react";
import { Radio } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const AntdRadioDemo = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("Selected:", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Radio Demo</h2>

      {/* Basic Radio Group */}
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>Option 1</Radio>
        <Radio value={2}>Option 2</Radio>
        <Radio value={3}>Option 3</Radio>
      </Radio.Group>

      <br /><br />

      {/* Radio Group with Button Style */}
      <Radio.Group onChange={onChange} value={value} buttonStyle="solid">
        <Radio.Button value={1}>Option 1</Radio.Button>
        <Radio.Button value={2}>Option 2</Radio.Button>
        <Radio.Button value={3}>Option 3</Radio.Button>
      </Radio.Group>

      <br /><br />

      {/* Disabled Radio */}
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>Option 1</Radio>
        <Radio value={2}>Option 2</Radio>
        <Radio value={3} disabled>Option 3 (disabled)</Radio>
      </Radio.Group>
    </div>
  );
};

export default AntdRadioDemo;
```

### Features in the Demo:
1. **Basic Radio Group**: Demonstrates selection from multiple options.
2. **Button Style**: Displays radio buttons with a solid button style.
3. **Disabled Radio**: Shows how to disable individual radio options.
4. **Controlled State**: Tracks and updates the selected value using state.
5. **Event Handling**: Logs selected option on change.