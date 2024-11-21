### Border Collapse in TailwindCSS

**Border Collapse**: TailwindCSS provides the **`border-collapse`** utility to control how table borders are rendered. The `collapse` option merges adjacent table cell borders into a single border, while `separate` (default) keeps them distinct. Using `collapse` helps create a cleaner and more compact table layout, as borders between cells are shared.

#### Common Border Collapse Classes:
- **`border-collapse`**: Collapses adjacent borders into one.
- **`border-separate`**: Keeps borders separate (default).

> **边框合并**：TailwindCSS 提供了 **`border-collapse`** 工具类，用于控制表格边框的呈现方式。`collapse` 会合并相邻单元格的边框，而 `separate`（默认）则保持边框独立。

#### React Example with JSX Comments:

![image-20241119154715454](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119154715454.png)

```jsx
{/* Table with collapsed borders */}
<table className="border-collapse border border-gray-400">
  <tr>
    <td className="border border-gray-300 p-2">Cell 1</td>
    <td className="border border-gray-300 p-2">Cell 2</td>
  </tr>
</table>

{/* Table with separate borders (default) */}
<table className="border-separate border border-gray-400">
  <tr>
    <td className="border border-gray-300 p-2">Cell 1</td>
    <td className="border border-gray-300 p-2">Cell 2</td>
  </tr>
</table>
```

In this React example:
- **`border-collapse`** merges the borders between cells.
- **`border-separate`** keeps the borders distinct between cells.