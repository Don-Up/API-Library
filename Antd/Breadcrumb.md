### Breadcrumb

Breadcrumb provides a navigation hierarchy, displaying the user's location within a site and allowing traversal through paths.

- **Components**: `Breadcrumb` with `Breadcrumb.Item`
- **Separator**: Customizable separator between items (default is `/`)
- **Link/Non-Link Items**: Supports linked and plain text items
- **Dropdown**: Supports dropdowns within breadcrumbs for nested navigation
- **Icons**: Can add icons to breadcrumb items
- **Responsive**: Works well with dynamic paths

### Common Usage Demo

![image-20241120093610418](assets\image-20241120093610418.png)

```jsx
import React from "react";
import { Breadcrumb, Menu, Dropdown } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Ant Design styles

const menu = (
  <Menu>
    <Menu.Item>
      <a href="/profile">Profile</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/settings">Settings</a>
    </Menu.Item>
  </Menu>
);

const AntdBreadcrumbDemo = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Breadcrumb Demo</h2>

      {/* Basic Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/users">
          <UserOutlined />
          <span>Users</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>John Doe</Breadcrumb.Item>
      </Breadcrumb>

      <br />

      {/* Breadcrumb with Custom Separator */}
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/category">Category</Breadcrumb.Item>
        <Breadcrumb.Item>Product</Breadcrumb.Item>
      </Breadcrumb>

      <br />

      {/* Breadcrumb with Dropdown */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Dropdown overlay={menu}>
            <span>Account</span>
          </Dropdown>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Details</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default AntdBreadcrumbDemo;
```

### Features in the Demo:
1. **Basic Breadcrumb**: Shows a simple breadcrumb trail(路径) with links and icons.
2. **Custom Separator**: Demonstrates changing the default separator to `>`.
3. **Dropdown in Breadcrumb**: Includes a dropdown within the breadcrumb for additional nested options.
4. **Icons**: Adds icons (e.g., home, user) to enhance visual navigation.
5. **Non-Link Item**: Some breadcrumb items are plain text, indicating the current page.