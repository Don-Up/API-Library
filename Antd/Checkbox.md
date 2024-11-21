### Checkbox

Checkbox provides a way to toggle between checked/unchecked states for single or group selections.

- **Components**: `Checkbox`, `Checkbox.Group`
- **Indeterminate**: Supports a partially checked state
- **Checkbox Group**: Allows multiple selections from a group of checkboxes
- **Disabled**: Can disable individual checkboxes or entire groups
- **Default/Controlled**: Works with both default and controlled states
- **Event Handlers**: `onChange` triggers when the state changes
- **Layout**: Supports vertical and horizontal layouts

### Common Usage Demo

![image-20241120141445595](assets\image-20241120141445595.png)

```jsx
import React, { useState } from "react";
import { Checkbox } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple'];

const AntdCheckboxDemo = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Checkbox Demo</h2>

      {/* Checkbox Group with Check All */}
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Checkbox.Group options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  );
};

export default AntdCheckboxDemo;
```

### Features in the Demo:
1. **Checkbox Group**: Demonstrates group selection.
2. **Indeterminate State**: Shows the partially checked state for "Check all".
3. **Controlled State**: Manages checked states through state hooks.
4. **Check All Checkbox**: Toggles all checkboxes on or off.
5. **Dynamic Updates**: Adjusts the indeterminate and check-all based on user selection.