### Transfer

Transfer enables moving items between two lists (source and target).

- **Components**: `Transfer`
- **Dual List**: Displays two lists (source and target) with move functionality
- **Searchable**: Supports search functionality for filtering items
- **Controlled/Uncontrolled**: Can manage selected items state manually or automatically
- **Custom Rendering**: Customize the item rendering in each list
- **Event Handlers**: `onChange` to handle item transfer and selection changes
- **Disabled**: Disable individual items or the entire transfer component
- **Pagination**: Supports pagination for large data sets

### Common Usage Demo

![image-20241120154447789](assets\image-20241120154447789.png)

```jsx
import React, { useState } from 'react';
import { Transfer } from 'antd';
import "antd/dist/reset.css"; // Ant Design styles

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `Item ${i + 1}`,
    description: `Description of content ${i + 1}`,
  });
}

const initialTargetKeys = mockData.filter(item => Number(item.key) % 2 === 0).map(item => item.key);

const AntdTransferDemo = () => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleChange = (nextTargetKeys) => {
    console.log("Moved items:", nextTargetKeys);
    setTargetKeys(nextTargetKeys);
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log("Selected items:", [...sourceSelectedKeys, ...targetSelectedKeys]);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ant Design Transfer Demo</h2>

      {/* Basic Transfer Component */}
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        render={item => item.title}
        listStyle={{
          width: 250,
          height: 300,
        }}
      />
    </div>
  );
};

export default AntdTransferDemo;
```

### Features in the Demo:
1. **Basic Dual List**: Moves items between source and target lists.
2. **Controlled State**: Manages transferred and selected items via state.
3. **Custom Rendering**: Displays item titles in both lists.
4. **Searchable**: Allows item filtering (can be added).
5. **Event Handling**: Logs changes in selected and transferred items.