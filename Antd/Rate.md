### Rate

Rate allows users to provide a rating by selecting stars.

- **Components**: `Rate`
- **Max Rating**: Customizable maximum number of stars (default is 5)
- **Allow Half**: Allows half-star ratings
- **Read-Only**: Supports disabled state for read-only or non-interactive ratings
- **Allow Clear**: Enables clearing the rating by clicking again
- **Character Customization**: Supports custom characters instead of stars
- **Event Handlers**: `onChange` to handle rating changes
- **Tooltips**: Show tooltips for each rating level

### Common Usage Demo

![image-20241120151902075](assets\image-20241120151902075.png)

```jsx
import React, { useState } from "react";
import { Rate } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const AntdRateDemo = () => {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    console.log("Selected Rating:", value);
    setValue(value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Rate Demo</h2>

      {/* Basic Rating */}
      <Rate onChange={handleChange} value={value} />

      <br /><br />

      {/* Rating with Half-Star */}
      <Rate allowHalf onChange={handleChange} defaultValue={2.5} />

      <br /><br />

      {/* Disabled (Read-Only) Rating */}
      <Rate disabled defaultValue={3} />

      <br /><br />

      {/* Customized Character Rating */}
      <Rate character="❤️" onChange={handleChange} defaultValue={4} />
    </div>
  );
};

export default AntdRateDemo;
```

### Features in the Demo:
1. **Basic Rate**: Allows users to rate with full stars.
2. **Half-Star Rating**: Demonstrates half-star selection.
3. **Read-Only Rating**: Displays a disabled, non-interactive rating.
4. **Custom Character**: Replaces stars with custom characters (e.g., hearts).
5. **Controlled State**: Tracks and updates selected rating value.