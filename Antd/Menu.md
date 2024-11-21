### Menu

Menu is a navigation component that provides a structured way to display lists of links or actions.

- **Components**: `Menu`, `Menu.Item`, `SubMenu`, and `Menu.ItemGroup`
- **Modes**: `vertical`, `horizontal`, and `inline`
- **Selectable**: Supports single or multiple item selection
- **Submenus**: Nested menus for hierarchical navigation
- **Collapsible**: Inline menus can be collapsible
- **Icons**: Can include icons for better visual context
- **Event Handling**: Provides `onClick` and `onSelect` for item interaction

### Common Usage Demo

![image-20241120122434030](assets\image-20241120122434030.png)

```jsx
import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css"; // Ant Design styles

const { SubMenu } = Menu;

const AntdMenuDemo = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("Click item:", e);
    setCurrent(e.key);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Menu Demo</h2>

      {/* Horizontal Menu */}
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ marginBottom: "20px" }}
      >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Mail
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          App
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
          <Menu.ItemGroup title="Group">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>

      {/* Vertical Menu */}
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="vertical"
        style={{ width: 256 }}
      >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Mail
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          App
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default AntdMenuDemo;
```

### Features in the Demo:
1. **Horizontal Menu**: A top navigation menu with icons.
2. **Vertical Menu**: A side navigation menu with nested options.
3. **SubMenu**: Demonstrates nested dropdowns within the menu.
4. **Selectable**: Highlights the selected menu item.
5. **Event Handling**: Logs the clicked menu item with `onClick`.