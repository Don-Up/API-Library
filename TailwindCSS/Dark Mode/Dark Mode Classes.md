### Dark Mode Classes in TailwindCSS

**Dark Mode**: TailwindCSS provides built-in support for **dark mode** by using the `dark:` prefix on any utility class. This allows you to define styles that apply when the user's system or website is in dark mode. By default, Tailwind uses the media query strategy, but it can be configured to use a class-based approach.

#### Example Dark Mode Classes:
- **`dark:bg-gray-800`**: Sets background color to gray in dark mode.
- **`dark:text-white`**: Changes text color to white in dark mode.

> **暗模式**：TailwindCSS 支持通过 `dark:` 前缀为暗模式定义样式。默认情况下，使用媒体查询检测用户的系统或网站是否处于暗模式。

#### React Example with JSX Comments:

![image-20241119155741657](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119155741657.png)

```jsx
{/* Example of dark mode styles */}
<div className="bg-white text-black dark:bg-gray-800 dark:text-white p-4">
  This text is black in light mode and white in dark mode.
</div>
```

In this React example:
- **`dark:bg-gray-800`** changes the background to dark gray in dark mode.
- **`dark:text-white`** changes the text to white in dark mode.