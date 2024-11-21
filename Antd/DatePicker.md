### DatePicker

DatePicker provides a UI component for selecting dates and times from a calendar or input field.

- **Components**: `DatePicker`, `RangePicker`, `MonthPicker`, `WeekPicker`
- **Formats**: Customizable date formats (e.g., `YYYY-MM-DD`)
- **Ranges**: Select date ranges using `RangePicker`
- **Disabled Dates**: Disable specific date ranges or individual dates
- **Time Selection**: Supports time-based selection with `showTime`
- **Localization**: Built-in support for multiple locales
- **Event Handlers**: `onChange`, `onOpenChange` for interaction tracking

### Common Usage Demo

![image-20241120142951559](assets\image-20241120142951559.png)

```jsx
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const { RangePicker } = DatePicker;

const AntdDatePickerDemo = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRange, setSelectedRange] = useState([]);

  const onDateChange = (date, dateString) => {
    console.log("Selected Date:", dateString);
    setSelectedDate(dateString);
  };

  const onRangeChange = (dates, dateStrings) => {
    console.log("Selected Range:", dateStrings);
    setSelectedRange(dateStrings);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design DatePicker Demo</h2>

      <Space direction="vertical" size={12}>
        {/* Basic DatePicker */}
        <DatePicker onChange={onDateChange} />

        {/* DatePicker with Time Selection */}
        <DatePicker showTime onChange={onDateChange} />

        {/* RangePicker for Date Range Selection */}
        <RangePicker onChange={onRangeChange} />

        {/* RangePicker with Time Selection */}
        <RangePicker showTime onChange={onRangeChange} />
      </Space>
    </div>
  );
};

export default AntdDatePickerDemo;
```

### Features in the Demo:
1. **Basic DatePicker**: Selects a single date.
2. **DatePicker with Time**: Allows both date and time selection.
3. **RangePicker**: Selects a date range.
4. **RangePicker with Time**: Allows date range with time selection.
5. **Event Handling**: Logs and updates state on date or range changes.