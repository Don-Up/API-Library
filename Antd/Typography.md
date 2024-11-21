### Typography

Typography provides flexible components for text display, supporting various styles and features for readability and user interaction.

- **Components**: `Title`, `Text`, `Paragraph`, `Link`
- **Sizes**: Titles from `h1` to `h5`
- **Styles**: Bold, italic, underline, strikethrough, code
- **Editable**: Inline text editing
- **Ellipsis**: Truncates long text with ellipsis
- **Copyable**: Supports copying text to the clipboard
- **Disabled**: Disables interaction and dims text

### Common Usage Demo (React Component)

![image-20241120081240317](assets\image-20241120081240317.png)

```jsx
import React from "react";
import { Typography } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const { Title, Text, Paragraph, Link } = Typography;

const AntdTypographyDemo = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Typography Demo</h2>

      {/* Title with Different Levels */}
      <Title level={1}>h1 Title</Title>
      <Title level={2}>h2 Title</Title>
      <Title level={3}>h3 Title</Title>
      <Title level={4}>h4 Title</Title>
      <Title level={5}>h5 Title</Title>

      {/* Paragraph with Ellipsis */}
      <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>
        This is a long paragraph that will be truncated with ellipsis after two lines. You can click "more" to expand the full content.
      </Paragraph>

      {/* Text Variants */}
      <Text strong>Bold Text</Text>
      <br />
      <Text italic>Italic Text</Text>
      <br />
      <Text underline>Underlined Text</Text>
      <br />
      <Text delete>Strikethrough Text</Text>
      <br />
      <Text code>Inline Code Snippet</Text>

      {/* Editable Text */}
      <Paragraph editable={{ onChange: (value) => console.log(value) }}>
        Editable Paragraph. Click to edit.
      </Paragraph>

      {/* Copyable Text */}
      <Paragraph copyable={{ text: "Copied Text!" }}>
        Click to Copy This Text
      </Paragraph>

      {/* Disabled Text */}
      <Text disabled>Disabled Text</Text>

      {/* Link */}
      <Link href="https://ant.design" target="_blank">
        Ant Design Official Website
      </Link>
    </div>
  );
};

export default AntdTypographyDemo;
```

### Features in the Demo:
1. **Titles**: Demonstrates various heading levels (`h1` to `h5`).
2. **Paragraph with Ellipsis**: Text that truncates after a specific number of lines, expandable with a "more" link.
3. **Text Variants**: Shows bold, italic, underline, strikethrough, and inline code.
4. **Editable Text**: Inline editing of text with a callback on change.
5. **Copyable Text**: Allows copying a text snippet to the clipboard.
6. **Disabled Text**: Disabled text with dimmed appearance.
7. **Link**: Hyperlinks with customizable behavior (e.g., opening in a new tab).