### Custom App in Next.js

**Custom App**: The `_app.js` file in Next.js allows you to override the default App component, enabling you to persist layout across pages, initialize global CSS, or pass props to pages. It wraps every page in your application, making it the perfect place for **global state management**, **context providers**, or **global styles**. Unlike `_document.js`, it runs on both the **client** and **server**.

#### Key Points:
- Customize **global layouts** and **state management**.
- Useful for **global CSS** and **context providers**.

> **自定义 App**：Next.js 的 `_app.js` 文件允许您重写默认的 App 组件，持久化跨页面布局、初始化全局 CSS 或传递通用 props。它包裹了应用中的每个页面，适合全局状态管理或样式。

#### Example with Comments:

```js
// pages/_app.js
import '../styles/globals.css';  // Import global CSS

export default function MyApp({ Component, pageProps }) {
  // Wrap every page with global layout or providers
  return (
    <div>
      <header>My Global Header</header>
      <Component {...pageProps} />  {/* Render the current page */}
      <footer>My Global Footer</footer>
    </div>
  );
}
```

In this example:
- **`<Component {...pageProps} />`** renders the current page.
- **Global layout** (header/footer) is applied to all pages.