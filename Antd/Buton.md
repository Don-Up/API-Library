### Button

Button is a widely-used React UI component that provides a variety of button types and styles, making it versatile for different UI needs.

- **Types**: `primary`, `default`, `dashed`, `text`, `link`
- **Shapes**: `default`, `circle`, `round`
- **Sizes**: `small`, `middle`, `large`
- **Loading State**: Built-in loading spinner
- **Disabled State**: Disables click functionality
- **Icons**: Supports left or right-aligned icons
- **Block**: Expands button to full width

 ![image-20241120075915887](assets\image-20241120075915887.png)

```jsx
import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Import Ant Design styles

// React Component Demo
const AntdButtonDemo = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Button Demo</h2>

      {/* Default Button */}
      <Button type="default">Default Button</Button>

      {/* Primary Button */}
      <Button type="primary" style={{ marginLeft: "10px" }}>
        Primary Button
      </Button>

      {/* Dashed Button */}
      <Button type="dashed" style={{ marginLeft: "10px" }}>
        Dashed Button
      </Button>

      {/* Text Button */}
      <Button type="text" style={{ marginLeft: "10px" }}>
        Text Button
      </Button>

      {/* Link Button */}
      <Button type="link" style={{ marginLeft: "10px" }}>
        Link Button
      </Button>

      <br />
      <br />

      {/* Button with Icon */}
      <Button
        type="primary"
        icon={<SearchOutlined />}
        style={{ marginRight: "10px" }}
      >
        Button with Icon
      </Button>

      {/* Loading Button */}
      <Button type="primary" loading>
        Loading Button
      </Button>

      <br />
      <br />

      {/* Disabled Button */}
      <Button type="primary" disabled>
        Disabled Button
      </Button>

      <br />
      <br />

      {/* Block Button (Full Width) */}
      <Button type="primary" block>
        Block Button (Full Width)
      </Button>
    </div>
  );
};

export default AntdButtonDemo;
```

