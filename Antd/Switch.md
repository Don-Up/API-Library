### Switch

Switch is a simple toggle component for binary states (on/off).

- **Components**: `Switch`
- **Checked/Unchecked**: Toggle between two states
- **Disabled**: Disable the switch to prevent toggling
- **Loading**: Shows a loading state for asynchronous actions
- **Custom Labels**: Customize the on/off labels with text or icons
- **Controlled/Uncontrolled**: Can be controlled through state or work independently
- **Event Handlers**: `onChange`, `onClick` to handle toggle events
- **Size Variants**: `default` and `small` sizes available

### Common Usage Demo

![image-20241120153229524](assets\image-20241120153229524.png)

```jsx
import React, { useState } from "react";
import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import "antd/dist/reset.css"; // Ant Design styles

const AntdSwitchDemo = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    console.log("Switch toggled:", checked);
    setChecked(checked);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Switch Demo</h2>

      {/* Basic Switch */}
      <Switch checked={checked} onChange={handleChange} />

      <br /><br />

      {/* Switch with Custom Icons */}
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        onChange={handleChange}
      />

      <br /><br />

      {/* Disabled Switch */}
      <Switch disabled defaultChecked />

      <br /><br />

      {/* Small Size Switch */}
      <Switch size="small" onChange={handleChange} />
    </div>
  );
};

export default AntdSwitchDemo;
```

### Features in the Demo:
1. **Basic Switch**: Demonstrates a simple toggle switch.
2. **Custom Icons**: Uses icons for the on/off states.
3. **Disabled Switch**: Shows a non-interactive (disabled) switch.
4. **Small Size Switch**: Demonstrates a smaller switch option.
5. **Controlled State**: Tracks the switch's state using React state.