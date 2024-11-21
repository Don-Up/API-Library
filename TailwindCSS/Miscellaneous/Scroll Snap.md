### Scroll Snap in TailwindCSS

**Scroll Snap**: TailwindCSS provides utilities to control **scroll snap behavior**, allowing elements to "snap" into place as the user scrolls. This feature is useful for creating carousels or galleries where items align perfectly after scrolling. You can define scroll snap alignment for both the container (e.g., **`scroll-snap-x`**, **`scroll-snap-y`**) and the children (e.g., **`snap-start`**, **`snap-center`**).

#### Common Scroll Snap Classes:
- **`snap-start`**: Snaps to the start of the element.
- **`snap-center`**: Snaps to the center of the element.
- **`snap-x`**: Enables horizontal scroll snapping.

> **滚动捕捉**：TailwindCSS 提供了控制 **滚动捕捉行为** 的工具类，允许元素在滚动时自动对齐。常用于创建自动对齐的轮播图或图像库。

#### React Example with JSX Comments:

![image-20241119155643247](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119155643247.png)

```jsx
{/* Scrollable container with horizontal snap */}
<div className="snap-x snap-mandatory overflow-x-auto flex space-x-4">
  <div className="snap-start w-64 h-32 bg-blue-500">Item 1</div>
  <div className="snap-center w-64 h-32 bg-green-500">Item 2</div>
  <div className="snap-start w-64 h-32 bg-red-500">Item 3</div>
</div>
```

In this React example:
- **`snap-x`** enables horizontal scroll snapping.
- **`snap-start`** and **`snap-center`** define where the elements snap into place during scrolling.