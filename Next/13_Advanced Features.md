# Advanced Features in Next.js

<audio src="C:\Users\10691\Downloads\2024年12月20日01点26分.mp3"></audio>

Next.js is a powerful framework that provides several advanced features to handle scaling, customization, and unique use cases. In this section, we’ll explore some critical features like **Static Export**, **Custom App and Document**, **Custom Error Pages**, and **Edge Functions**. These features allow you to fine-tune your Next.js applications for advanced scenarios, scalability, and a global audience.

---

## **1. Static Export**

<audio src="C:\Users\10691\Downloads\2024年12月20日01点27分.mp3"></audio>

Next.js allows you to export your application as a fully static site using the `next export` command. This is useful for deploying your site to static hosting platforms (e.g., Netlify, GitHub Pages, or AWS S3), where server-side rendering is not required.

### **How Static Export Works**

<audio src="C:\Users\10691\Downloads\2024年12月20日01点28分.mp3"></audio>

- The `next export` command generates **static HTML and assets** for your site.
- It’s ideal for use cases where you don't need dynamic server-side logic (e.g., marketing sites, blogs, or documentation).

### **Steps to Export a Static Site**
1. **Setup Static Pages:**
   Ensure all pages are compatible with static export by using **Static Site Generation (SSG)** or **Client-Side Rendering (CSR)**. Avoid `getServerSideProps`, as it relies on server-side logic.

   Example of a static page using `getStaticProps`:
   ```javascript
   export async function getStaticProps() {
     const data = await fetch('https://api.example.com/data').then(res => res.json());
   
     return {
       props: { data },
     };
   }
   
   export default function Home({ data }) {
     return <div>{data.title}</div>;
   }
   ```

2. **Add an Output Directory**:
   Configure your `next.config.js` to add the export path:
   ```javascript
   module.exports = {
     output: 'export', // Enables static export
   };
   ```

3. **Run the Export Command**:
   ```bash
   npm run build
   npx next export
   ```
   This generates a `/out` directory containing the static files.

4. **Deploy the Static Site**:
   - Upload the `/out` directory to any static hosting service (e.g., Netlify, GitHub Pages, or AWS S3).

### **Limitations of Static Export**

<audio src="C:\Users\10691\Downloads\2024年12月20日01点30分.mp3"></audio>

- No support for `getServerSideProps`, as server-side logic is not available.
- Dynamic routing pages with `getStaticPaths` must use the `fallback: false` or `blocking` mode to pre-render all paths at build time.

### **Use Cases**

<audio src="C:\Users\10691\Downloads\2024年12月20日01点30分 (2).mp3"></audio>

- Marketing or landing pages.
- Blogs or documentation sites (e.g., a static blog using Markdown files).
- Applications that don’t require dynamic user sessions or frequent updates.

---

## **2. Custom App and Document**

Next.js provides special files (`_app.js` and `_document.js`) to customize the app's behavior and structure globally. These files help you control how your application is rendered and styled.

---

### **2.1 Custom `_app.js`**

The `_app.js` file is used to customize the app’s initialization and wrap all pages with shared layouts, providers, or global settings.

#### **Example: Using `_app.js`**
```javascript
import '../styles/global.css'; // Import global CSS
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

#### **Use Cases for `_app.js`**
1. **Global Styles**: Import CSS files or use styled-components for theming.
2. **State Management**: Add global providers like Redux or Context API.
3. **Authentication**: Check user authentication state and redirect unauthorized users.
4. **Analytics**: Initialize analytics services like Google Analytics.

---

### **2.2 Custom `_document.js`**

The `_document.js` file is used to customize the **HTML document structure**. It allows you to modify the `<html>` and `<body>` tags or add meta tags and external scripts.

#### **Example: Using `_document.js`**
```javascript
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="My custom Next.js app" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

#### **Use Cases for `_document.js`**
1. **Custom Fonts**: Add links to external fonts like Google Fonts.
2. **Meta Tags**: Add meta tags for SEO or social sharing.
3. **Analytics Scripts**: Include external scripts for analytics or tracking.
4. **Custom Attributes**: Add attributes to the `<html>` or `<body>` tags (e.g., `lang`, `dir`).

---

## **3. Custom Error Pages**

Next.js makes it easy to create custom error pages for better user experience and branding. You can define custom `404` and `500` pages by creating specific files in the `pages` directory.

---

### **3.1 Custom 404 Page**

To create a custom 404 page, add a `pages/404.js` file.

#### **Example: Custom 404 Page**
```javascript
export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
```

#### **Features**
- Automatically rendered when a user navigates to a non-existent route.
- Fully customizable to match your app’s branding.

---

### **3.2 Custom 500 Page**

To create a custom error page for server errors, add a `pages/500.js` file.

#### **Example: Custom 500 Page**
```javascript
export default function Custom500() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>500 - Server Error</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
}
```

#### **Features**
- Automatically displayed for server errors.
- Useful for showing user-friendly error messages during downtime.

---

## **4. Edge Functions**

<audio src="C:\Users\10691\Downloads\2024年12月20日01点38分.mp3"></audio>

Edge Functions in Next.js allow you to run server-side code closer to the user at the **edge of the content delivery network (CDN)**. This results in lower latency and faster response times.

### **Key Features of Edge Functions**
- **Low Latency**: Code is executed in data centers closer to the user.
- **Dynamic Content**: Useful for personalization, geolocation, or A/B testing.
- **Fast Execution**: Runs on the **Edge Runtime**, optimized for speed and scalability.

---

### **4.1 How to Use Edge Functions**

Edge Functions leverage **middleware** in Next.js. Middleware can be used to modify responses dynamically.

#### **Example: Geolocation with Edge Functions**
```javascript
import { NextResponse } from 'next/server';

export function middleware(req) {
  const country = req.geo?.country || 'US';

  if (country === 'FR') {
    return NextResponse.redirect(new URL('/fr', req.url)); // Redirect French users
  }

  return NextResponse.next(); // Continue to the requested page for others
}

export const config = {
  matcher: ['/'], // Apply middleware to the root page
};
```

---

### **4.2 Use Cases for Edge Functions**
1. **Geolocation**: Serve region-specific content or redirect users based on location.
2. **A/B Testing**: Randomly serve different versions of a page for testing.
3. **Dynamic Headers**: Add or modify HTTP headers dynamically.
4. **Authentication**: Protect routes and check authentication tokens at the edge.

---

## **5. Summary**

<audio src="C:\Users\10691\Downloads\2024年12月20日01点35分.mp3"></audio>

By leveraging Next.js's advanced features, you can build scalable, performant, and highly customized applications tailored to your specific needs. Here's a recap:

- **Static Export**: Export your site as a fully static app using `next export` for deployment on static hosting platforms.
- **Custom App and Document**: Use `_app.js` for global application logic and `_document.js` for HTML structure and meta tags.
- **Custom Error Pages**: Create custom `404` and `500` pages for a polished user experience.
- **Edge Functions**: Execute server-side logic closer to the user for faster response times and dynamic content.

These features allow Next.js to scale for large, global audiences while maintaining flexibility and performance. By mastering these tools, you can handle advanced use cases for modern web applications.