### Theme Customization in TailwindCSS

**Theme Customization**: TailwindCSS allows you to customize your design system by extending or overriding the default theme in the `tailwind.config.js` file. You can add custom colors, spacing, fonts, and more. This flexibility helps you create a consistent, branded design without being limited by the default settings.

> **主题自定义**：TailwindCSS 允许通过 `tailwind.config.js` 文件扩展或覆盖默认主题，您可以添加自定义颜色、间距、字体等，帮助创建一致的品牌设计。

#### Example `tailwind.config.js`:

Add custom colors, fonts, and spacing by extending the theme.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: '#1E40AF',
      },
      spacing: {
        '72': '18rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

In this example:
- **`customBlue`** is added to the color palette.
- **`72`** is a custom spacing value.
- **`Inter`** is set as the default sans-serif font.