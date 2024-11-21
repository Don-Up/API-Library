### Pagination

Pagination provides controls for splitting large sets of data across multiple pages.

- **Components**: `Pagination`
- **Page Sizes**: Allows users to change items per page
- **Simple Mode**: Compact pagination with fewer controls
- **Jumper**: Jump to specific page feature
- **Total Items**: Displays total count of items
- **Controlled/Uncontrolled**: Can be fully controlled or handle state internally
- **Event Handlers**: `onChange`, `onShowSizeChange` for page and size changes
- **Custom Item Render**: Customize the appearance of pagination buttons

### Common Usage Demo

![image-20241120123426859](assets\image-20241120123426859.png)

```jsx
import React, { useState } from "react";
import { Pagination } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const AntdPaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handlePageChange = (page, pageSize) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setCurrentPage(page);
  };

  const handleSizeChange = (current, size) => {
    console.log("Current Page:", current, "New PageSize:", size);
    setPageSize(size);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Pagination Demo</h2>

      {/* Basic Pagination */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={100}
        onChange={handlePageChange}
        onShowSizeChange={handleSizeChange}
        showSizeChanger
        showQuickJumper
      />

      <br />

      {/* Simple Pagination */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={100}
        onChange={handlePageChange}
        simple
      />

      <br />

      {/* Pagination with Total */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={100}
        showTotal={(total) => `Total ${total} items`}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default AntdPaginationDemo;
```

### Features in the Demo:
1. **Basic Pagination**: Demonstrates page changing with size changer and quick jumper.
2. **Simple Pagination**: Compact mode with minimal controls.
3. **Pagination with Total**: Displays the total number of items alongside pagination controls.
4. **Event Handlers**: Handles page change and size change with `onChange` and `onShowSizeChange`.
5. **Controlled Pagination**: Manages state for `currentPage` and `pageSize`.