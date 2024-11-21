### Slider

Slider is a UI component that allows users to select a value or range from a defined interval by dragging a thumb.

- **Components**: `Slider`
- **Range Mode**: Supports selecting a range of values
- **Step**: Define increments between values
- **Min/Max**: Set minimum and maximum values
- **Tooltip**: Shows the current value as a tooltip
- **Marks**: Add labeled points along the slider
- **Disabled**: Can disable the slider for read-only interaction
- **Event Handlers**: `onChange` and `onAfterChange` trigger on value change

### Common Usage Demo

<img src="assets\image-20241120152608735.png" alt="image-20241120152608735" style="zoom:200%;" />

```jsx
import React, { useState } from "react";
import { Slider } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const AntdSliderDemo = () => {
  const [value, setValue] = useState(30);
  const [rangeValue, setRangeValue] = useState([20, 50]);

  const handleSliderChange = (newValue) => {
    console.log("Slider Value:", newValue);
    setValue(newValue);
  };

  const handleRangeChange = (newRange) => {
    console.log("Range Value:", newRange);
    setRangeValue(newRange);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Slider Demo</h2>

      {/* Basic Slider */}
      <Slider
        min={0}
        max={100}
        value={value}
        onChange={handleSliderChange}
      />

      <br /><br />

      {/* Slider with Step */}
      <Slider
        min={0}
        max={100}
        step={10}
        defaultValue={50}
        onChange={handleSliderChange}
      />

      <br /><br />

      {/* Range Slider */}
      <Slider
        range
        min={0}
        max={100}
        value={rangeValue}
        onChange={handleRangeChange}
      />

      <br /><br />

      {/* Slider with Marks */}
      <Slider
        marks={{ 0: '0%', 50: '50%', 100: '100%' }}
        defaultValue={50}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default AntdSliderDemo;
```

### Features in the Demo:
1. **Basic Slider**: Demonstrates single value selection.
2. **Step Slider**: Moves by specific increments.
3. **Range Slider**: Allows selecting a range of values.
4. **Slider with Marks**: Adds labeled markers at specific points.
5. **Controlled State**: Uses state to track and update slider values dynamically.