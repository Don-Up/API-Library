### Anchor

Anchor creates navigation links within a page, allowing easy scroll-to functionality for sections or anchor points.

- **Components**: `Anchor` with nested `Anchor.Link`
- **Affix**: Sticky behavior to stay fixed while scrolling
- **Target**: Custom scrollable container for the anchor
- **Bounds**: Sets the scroll proximity to trigger the active state
- **OffsetTop**: Distance from top when fixed
- **onClick**: Event handler for link clicks
- **onChange**: Callback when the active link changes

### Common Usage Demo

![image-20241120092427885](assets\image-20241120092427885.png)

```jsx
import React from "react";
import { Anchor } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const { Link } = Anchor;

const AntdAnchorDemo = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Anchor Demo</h2>

      {/* Anchor with Links */}
      <Anchor affix={false} onChange={(link) => console.log("Active link:", link)}>
        <Link href="#section1" title="Section 1" />
        <Link href="#section2" title="Section 2">
          <Link href="#section2-1" title="Section 2-1" />
          <Link href="#section2-2" title="Section 2-2" />
        </Link>
        <Link href="#section3" title="Section 3" />
      </Anchor>

      <div style={{ marginTop: "40px" }}>
        <h3 id="section1">Section 1</h3>
        <p>This is content for section 1.</p>

        <h3 id="section2">Section 2</h3>
        <p>This is content for section 2.</p>

        <h4 id="section2-1">Section 2-1</h4>
        <p>This is content for section 2-1.</p>

        <h4 id="section2-2">Section 2-2</h4>
        <p>This is content for section 2-2.</p>

        <h3 id="section3">Section 3</h3>
        <p>This is content for section 3.</p>
      </div>
    </div>
  );
};

export default AntdAnchorDemo;
```

### Features in the Demo:
1. **Anchor with Links**: Provides navigation links to jump to different sections of the page.
2. **Nested Links**: Demonstrates hierarchical links (e.g., section 2 with subsections 2-1, 2-2).
3. **Affix**: The `affix` prop controls whether the anchor is sticky or not (in this case, not sticky).
4. **onChange**: Logs the currently active anchor link.
5. **Smooth Scrolling**: Automatically scrolls to the target section when a link is clicked.