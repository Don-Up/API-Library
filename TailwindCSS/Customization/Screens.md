### Screens in TailwindCSS

**Screens**: TailwindCSS uses the **`screens`** key in the `tailwind.config.js` file to define responsive breakpoints. These breakpoints allow you to apply different styles based on screen sizes. The default breakpoints include `sm`, `md`, `lg`, `xl`, and `2xl`, but you can customize or add new breakpoints to suit your design needs. Breakpoints are typically used with responsive utility variants.

> **断点**：TailwindCSS 使用 `screens` 关键字定义响应式断点。可以通过修改 `tailwind.config.js` 文件自定义或添加新的断点，适用于不同屏幕尺寸。

#### Example `tailwind.config.js`:

Add a custom breakpoint called `tablet`.

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
};
```

In this example:
- **`tablet`**, **`laptop`**, and **`desktop`** are custom screen sizes that can now be used to apply responsive styles in your project.