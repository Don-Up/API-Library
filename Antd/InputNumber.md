### InputNumber

InputNumber provides a user-friendly input field for numeric values with step controls.

- **Components**: `InputNumber`
- **Range**: Supports `min` and `max` values to restrict input range
- **Step**: Increment/decrement value by a defined step
- **Precision**: Control the number of decimal places
- **Formatter/Parser**: Customize display and input formats (e.g., currency)
- **Disabled**: Disable the input field to prevent interactions
- **Event Handlers**: `onChange` for value updates
- **Keyboard Support**: Allows keyboard arrows for stepping

### Common Usage Demo

![image-20241120151127017](assets\image-20241120151127017.png)

```jsx
import React, { useState } from "react";
import { InputNumber } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const AntdInputNumberDemo = () => {
  const [value, setValue] = useState(1);

  const onChange = (val) => {
    console.log('Changed:', val);
    setValue(val);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design InputNumber Demo</h2>

      {/* Basic InputNumber */}
      <InputNumber min={1} max={10} value={value} onChange={onChange} />

      <br /><br />

      {/* InputNumber with Step */}
      <InputNumber min={0} max={100} step={5} defaultValue={5} onChange={onChange} />

      <br /><br />

      {/* InputNumber with Precision */}
      <InputNumber min={0} max={1} step={0.01} precision={2} defaultValue={0.1} onChange={onChange} />

      <br /><br />

      {/* InputNumber with Formatter */}
      <InputNumber
        defaultValue={1000}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onChange}
      />
    </div>
  );
};

export default AntdInputNumberDemo;
```

### Features in the Demo:
1. **Basic InputNumber**: Defines minimum and maximum values with a default value.
2. **Step Control**: Increments or decrements by a specific step value.
3. **Precision**: Restricts input to two decimal places.
4. **Formatter/Parser**: Formats the input as currency with commas and dollar signs.
5. **Dynamic Value**: Logs and updates the value on change.