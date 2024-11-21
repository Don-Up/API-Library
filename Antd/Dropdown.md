### Dropdown

Dropdown provides a simple way to display menus and actions triggered by user interaction, typically on button or hover.

- **Trigger**: Can be triggered by `click`, `hover`, or `contextMenu`
- **Menu**: Supports rendering a list of actions or links
- **Placement**: Control where the dropdown appears (e.g., `bottomLeft`, `topRight`)
- **Disabled**: Disables the dropdown from being triggered
- **Overlay**: Custom con tent inside the dropdown
- **Submenus**: Supports nested menus for complex navigation

### Common Usage Demo

![image-20241120094833318](assets\image-20241120094833318.png)

![image-20241121091851731](C:\Users\10691\Desktop\Documentation\Antd\assets\image-20241121091851731.png)

```jsx
import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Ant Design styles

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      <a href="/profile">Profile</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="/settings">Settings</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="/logout">Logout</a>
    </Menu.Item>
  </Menu>
);

const AntdDropdownDemo = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Dropdown Demo</h2>
      
      {/* Dropdown triggered by click */}
      <Dropdown overlay={menu} trigger={['click']}>
        <Button>
          Actions <DownOutlined />
        </Button>
      </Dropdown>

      <br /><br />

      {/* Dropdown triggered by hover */}
      <Dropdown overlay={menu} trigger={['hover']}>
        <Button>
          Hover Actions <DownOutlined />
        </Button>
      </Dropdown>

      <br /><br />

      {/* Right-aligned Dropdown */}
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>
          Right-aligned Actions <DownOutlined />
        </Button>
      </Dropdown>

      <br /><br />

      {/* Disabled Dropdown */}
      <Dropdown overlay={menu} disabled>
        <Button>
          Disabled Actions <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default AntdDropdownDemo;
```

### Features in the Demo:
1. **Dropdown Triggered by Click**: Dropdown opens when the button is clicked.
2. **Dropdown Triggered by Hover**: Dropdown opens when hovering over the button.
3. **Right-Aligned Dropdown**: Dropdown menu aligned to the bottom right of the button.
4. **Disabled Dropdown**: Dropdown is disabled, preventing interaction.
5. **Menu with Icons**: Each menu item can include icons and links for better user experience.