### Built-in CSS and Sass Support in Next.js

**CSS and Sass Support**: Next.js provides **built-in support** for importing CSS and Sass files directly into your components or pages. You can import **global CSS** in `_app.js` and **module-specific CSS** or **Sass** using CSS Modules (e.g., `Component.module.css` or `Component.module.scss`). This allows you to scope styles to individual components, preventing class name collisions.

#### Key Points:
- Import **global styles** in `_app.js`.
- Use **CSS Modules** for **scoped styles** in components.

> **内置的 CSS 和 Sass 支持**：Next.js 内置支持直接在组件或页面中导入 CSS 和 Sass 文件。全局样式可以在 `_app.js` 中导入，模块化的 CSS 或 Sass 可通过 CSS Modules 实现，避免类名冲突。

#### Example with Comments:

```js
// Import global CSS in _app.js
// pages/_app.js
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Use CSS Module for component-specific styles
// components/Button.module.css
.button {
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

// components/Button.js
import styles from './Button.module.css';

export default function Button() {
  return <button className={styles.button}>Click Me</button>;
}
```

In this example:
- Global styles are imported in **`_app.js`**.
- **CSS Modules** are used for scoped styles in the **Button** component.