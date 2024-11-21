### Avatar

Avatar is a component for displaying user profile pictures, icons, or initials.

- **Components**: `Avatar`
- **Types**: Supports images, icons, or text (e.g., initials)
- **Shapes**: Circular (`circle`) or square (`square`) shapes
- **Sizes**: Predefined sizes (`large`, `small`, `default`) or custom sizes
- **Fallback**: Provides default behavior when image fails to load
- **Grouped Avatars**: Can display a group of avatars with `Avatar.Group`
- **Customizable Styling**: Supports custom colors, borders, and background
- **Event Handlers**: `onError` for handling image load errors

### Common Usage Demo (React Component)

```jsx
import React from 'react';
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/reset.css"; // Ant Design styles

const AntdAvatarDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Ant Design Avatar Demo</h2>

      <Space size="large">
        {/* Basic Avatar with Icon */}
        <Avatar size="large" icon={<UserOutlined />} />

        {/* Avatar with Image */}
        <Avatar size="large" src="https://i.pravatar.cc/100" alt="avatar" />

        {/* Avatar with Text (Initials) */}
        <Avatar size="large" style={{ backgroundColor: '#87d068' }}>A</Avatar>

        {/* Square Avatar */}
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
      </Space>

      <br /><br />

      {/* Avatar Group */}
      <Avatar.Group>
        <Avatar src="https://i.pravatar.cc/100" />
        <Avatar style={{ backgroundColor: '#f56a00' }}>B</Avatar>
        <Avatar icon={<UserOutlined />} />
        <Avatar style={{ backgroundColor: '#1890ff' }}>C</Avatar>
      </Avatar.Group>
    </div>
  );
};

export default AntdAvatarDemo;
```

### Features in the Demo:
1. **Icon Avatar**: Displays an avatar with a user icon.
2. **Image Avatar**: Shows an avatar with an image.
3. **Text Avatar**: Displays initials or text inside the avatar.
4. **Square Avatar**: Demonstrates a square-shaped avatar.
5. **Avatar Group**: Displays multiple avatars together in a group.