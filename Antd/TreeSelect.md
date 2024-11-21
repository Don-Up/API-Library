### TreeSelect

TreeSelect is a dropdown component for selecting options from a tree structure.

- **Components**: `TreeSelect`
- **Tree Data**: Hierarchical data format for nested options
- **Single/Multiple Selection**: Supports single and multiple selections
- **Searchable**: Allows searching through tree nodes
- **Tree Node Customization**: Customize node labels and values
- **Tree Checkable**: Add checkboxes for multi-selection
- **Expand/Collapse**: Supports expanding/collapsing tree nodes
- **Event Handlers**: `onChange`, `onSelect` for tracking interactions

### Common Usage Demo

![image-20241120155112222](assets\image-20241120155112222.png)

```jsx
import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import "antd/dist/reset.css"; // Ant Design styles

const treeData = [
  {
    title: 'Node 1',
    value: 'node1',
    children: [
      {
        title: 'Child Node 1',
        value: 'child_node1',
      },
      {
        title: 'Child Node 2',
        value: 'child_node2',
      },
    ],
  },
  {
    title: 'Node 2',
    value: 'node2',
    children: [
      {
        title: 'Child Node 3',
        value: 'child_node3',
      },
    ],
  },
];

const AntdTreeSelectDemo = () => {
  const [value, setValue] = useState(null);

  const handleChange = (newValue) => {
    console.log("Selected:", newValue);
    setValue(newValue);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ant Design TreeSelect Demo</h2>

      {/* Basic TreeSelect */}
      <TreeSelect
        style={{ width: '300px' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={handleChange}
      />

      <br /><br />

      {/* TreeSelect with Multiple Selection */}
      <TreeSelect
        style={{ width: '300px' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        multiple
        onChange={handleChange}
      />

      <br /><br />

      {/* TreeSelect with Checkable Nodes */}
      <TreeSelect
        style={{ width: '300px' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeCheckable={true}
        showCheckedStrategy={TreeSelect.SHOW_PARENT}
        onChange={handleChange}
      />

    </div>
  );
};

export default AntdTreeSelectDemo;
```

### Features in the Demo:
1. **Basic TreeSelect**: Select a single option from a tree structure.
2. **Multiple Selection**: Allows selecting multiple options.
3. **Checkable TreeSelect**: Supports checkboxes for multiple selections.
4. **Tree Expansion**: Expands all tree nodes by default.
5. **Controlled State**: Tracks and updates the selected value.