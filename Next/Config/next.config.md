### `next.config.js` in Next.js

**`next.config.js`**: This file is used to customize and configure various settings in a Next.js application. It allows you to modify how Next.js handles things like **environment variables**, **image domains**, **Webpack configurations**, and **internationalization** (i18n). It’s located in the root of your project and is automatically read by Next.js during build and development.

#### Key Points:
- Configure **Webpack**, **environment variables**, and more.
- Control features like **images** and **i18n**.

> **`next.config.js`**：`next.config.js` 文件用于自定义和配置 Next.js 应用程序的设置，允许修改 Webpack 配置、环境变量、图像域名、国际化等功能。

#### Example with Comments:

```js
// next.config.js
module.exports = {
  reactStrictMode: true,  // Enable React's strict mode for development
  images: {
    domains: ['example.com'],  // Allow external images from this domain
  },
  i18n: {
    locales: ['en', 'fr'],  // Support English and French
    defaultLocale: 'en',    // Set default locale to English
  },
};
```

In this example:
- **`reactStrictMode`** enables extra checks in development.
- **`images.domains`** allows images from `example.com`.
- **`i18n`** configures localization with English as the default.