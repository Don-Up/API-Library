### i18n Configuration in Next.js

**i18n (Internationalization)**: Next.js provides built-in support for internationalized (i18n) routing, allowing you to create multilingual websites. You can configure supported locales, default locale, and domain-based routing in the `next.config.js` file. This enables automatic locale detection based on user preferences and URL structure (e.g., `/en`, `/fr`).

#### Key Points:
- Define **locales** and **defaultLocale** in `next.config.js`.
- Supports **automatic locale detection** and **domain-based routing**.

> **i18n 配置**：Next.js 内置了国际化路由支持，允许创建多语言网站。您可以在 `next.config.js` 文件中配置支持的语言、默认语言以及基于域名的路由。

#### Example with Comments:

```js
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'es'],  // Supported languages: English, French, Spanish
    defaultLocale: 'en',          // Default language is English
    localeDetection: true,        // Automatically detect user's locale
  },
};
```

In this example:
- **`locales`** defines the available languages.
- **`defaultLocale`** sets English as the default language.
- **`localeDetection`** enables automatic locale detection based on the user's browser settings.