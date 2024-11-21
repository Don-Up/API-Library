### Plugins in TailwindCSS

**Plugins**: TailwindCSS allows you to extend its functionality by creating or using plugins. Plugins enable you to add custom utilities, components, or modify the existing framework. You can either write your own plugins or use community plugins to implement features like custom forms, typography, or animations. Plugins are defined in the `tailwind.config.js` file under the `plugins` array.

> **插件**：TailwindCSS 允许通过插件扩展功能。插件可以添加自定义工具类、组件，或修改现有框架。您可以在 `tailwind.config.js` 文件中定义插件。

#### Example `tailwind.config.js`:

Add a custom utility for rotating elements.

```js
// tailwind.config.js
module.exports = {
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.rotate-15': {
          transform: 'rotate(15deg)',
        },
        '.rotate-30': {
          transform: 'rotate(30deg)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
```

In this example:
- A custom plugin is created to add **`.rotate-15`** and **`.rotate-30`** utilities for rotating elements by 15 and 30 degrees.