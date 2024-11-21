### TimePicker

TimePicker provides a user-friendly interface for selecting times.

- **Components**: `TimePicker`
- **Format**: Supports custom time formats (e.g., `HH:mm:ss`)
- **12/24-Hour Mode**: Toggle between 12-hour (AM/PM) or 24-hour mode
- **RangePicker**: Select a time range with `TimeRangePicker`
- **Disabled Times**: Restrict selectable times (e.g., disable past times)
- **Controlled/Uncontrolled**: Can work with both controlled and uncontrolled inputs
- **Event Handlers**: `onChange`, `onOpenChange` for tracking changes and interactions
- **Clearable**: Option to clear selected time

### Common Usage Demo

<img src="assets\image-20241120153642089.png" alt="image-20241120153642089" style="zoom: 67%;" />

```jsx
import React, { useState } from "react";
import { TimePicker } from "antd";
import moment from "moment";
import "antd/dist/reset.css"; // Ant Design styles

const AntdTimePickerDemo = () => {
  const [time, setTime] = useState(null);

  const handleChange = (time, timeString) => {
    console.log("Selected Time:", timeString);
    setTime(time);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design TimePicker Demo</h2>

      {/* Basic TimePicker */}
      <TimePicker onChange={handleChange} />

      <br /><br />

      {/* TimePicker with 12-Hour Format */}
      <TimePicker
        use12Hours
        format="h:mm a"
        onChange={handleChange}
      />

      <br /><br />

      {/* TimePicker with Custom Format */}
      <TimePicker
        format="HH:mm:ss"
        onChange={handleChange}
      />

      <br /><br />

      {/* Disabled TimePicker */}
      <TimePicker disabled defaultValue={moment('12:08:23', 'HH:mm:ss')} />
    </div>
  );
};

export default AntdTimePickerDemo;
```

### Features in the Demo:
1. **Basic TimePicker**: Allows selecting a time in default format.
2. **12-Hour Format**: Demonstrates time selection with AM/PM.
3. **Custom Format**: Displays time with a custom format (`HH:mm:ss`).
4. **Disabled TimePicker**: Shows a non-interactive, disabled time picker.
5. **Controlled State**: Logs and updates the selected time.