Next.js offers a wide range of APIs that help developers build feature-rich, server-rendered React applications. These APIs enable server-side rendering, static generation, routing, data fetching, and more. Below is a comprehensive list of Next.js APIs, categorized for better understanding:

### 1. **Routing APIs**
   Next.js handles routing automatically based on the file system, but it also provides APIs for programmatic navigation and dynamic routing:

   - **`useRouter` (Client-side Routing)**:  
     A React hook from `next/router` that gives access to the router object, allowing navigation, query params, and more.
     
     ```jsx
     import { useRouter } from 'next/router';
     
     const MyComponent = () => {
       const router = useRouter();
     
       const goToAbout = () => {
         router.push('/about');
       };
     
       return <button onClick={goToAbout}>Go to About</button>;
     };
     ```

   - **`Link` Component (Client-side Navigation)**:  
     For client-side navigation and preloading pages.
     
     ```jsx
     import Link from 'next/link';
     
     const Nav = () => (
       <nav>
         <Link href="/about">About</Link>
       </nav>
     );
     ```

   - **Dynamic Routing**:  
     Supports dynamic routes via file names like `[id].js`.
     
     ```jsx
     // pages/post/[id].js
     const Post = ({ id }) => <div>Post {id}</div>;
     ```

   - **API Routes**:  
     Create API endpoints inside the `pages/api` directory.
     
     ```js
     // pages/api/hello.js
     export default (req, res) => {
       res.status(200).json({ message: 'Hello, world!' });
     };
     ```

### 2. **Data Fetching APIs**
   Next.js provides various APIs to fetch data on the server or during static generation.

   - **`getStaticProps`**:  
     Fetches data at build time for static generation (SSG).
     
     ```js
     export async function getStaticProps() {
       return {
         props: {
           data: await fetchData(),
         },
       };
     }
     ```

   - **`getStaticPaths`**:  
     Used with `getStaticProps` to generate dynamic routes for static pages.
     
     ```js
     export async function getStaticPaths() {
       return {
         paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
         fallback: false,
       };
     }
     ```

   - **`getServerSideProps`**:  
     Fetches data on each request for server-side rendering (SSR).
     
     ```js
     export async function getServerSideProps() {
       return {
         props: {
           data: await fetchData(),
         },
       };
     }
     ```

   - **`getInitialProps`**:  
     A legacy API for data fetching. It works for both server-side and client-side rendering, but it’s recommended to use the newer APIs (`getStaticProps`, `getServerSideProps`) when possible.
     
     ```js
     MyPage.getInitialProps = async () => {
       const res = await fetch('https://api.example.com/data');
       const data = await res.json();
       return { data };
     };
     ```

### 3. **API Routes**
   Next.js allows you to create API endpoints by adding JavaScript files under the `pages/api` directory. It supports both GET and POST requests, middleware, and more:

   - **API Route Example**:
     ```js
     // pages/api/user.js
     export default function handler(req, res) {
       res.status(200).json({ name: 'John Doe' });
     }
     ```

### 4. **Middleware API**
   Middleware in Next.js is used to run code before requests are completed. You can manipulate the request, response, or even redirect users.

   - **`middleware.js`**:  
     Defines middleware in the root or specific folders of a Next.js project.
     
     ```js
     // middleware.js
     import { NextResponse } from 'next/server';
     
     export function middleware(req) {
       const url = req.nextUrl.clone();
       // Perform custom logic, such as redirects
       return NextResponse.next(); // Proceed with the request
     }
     ```

### 5. **Head Management**
   Next.js offers an API to manage the document head via the `Head` component.

   - **`Head` Component**:  
     Used to modify the `<head>` section, like adding meta tags or titles.
     
     ```jsx
     import Head from 'next/head';
     
     const MyPage = () => (
       <div>
         <Head>
           <title>My Custom Title</title>
         </Head>
         <p>Hello, World!</p>
       </div>
     );
     ```

### 6. **Image Optimization API**
   Next.js provides an API for image optimization using the `next/image` component, which automatically optimizes images on-demand for different devices and screen sizes.

   - **`Image` Component**:  
     Automatically optimizes images for faster load times and responsive behavior.
     
     ```jsx
     import Image from 'next/image';
     
     const MyComponent = () => (
       <Image src="/me.jpg" width={500} height={500} alt="Me" />
     );
     ```

### 7. **Next.js Config API**
   Next.js can be configured using the `next.config.js` file, allowing for custom configurations like environment variables, custom Webpack, and more.

   - **`next.config.js`**:
     ```js
     // next.config.js
     module.exports = {
       reactStrictMode: true,
       images: {
         domains: ['example.com'],
       },
     };
     ```

### 8. **API for Internationalization (i18n)**
   Next.js supports internationalized routing and localization through the i18n configuration in `next.config.js`.

   - **i18n Configuration**:
     ```js
     // next.config.js
     module.exports = {
       i18n: {
         locales: ['en', 'fr', 'es'],
         defaultLocale: 'en',
       },
     };
     ```

### 9. **Preview Mode API**
   Next.js provides a preview mode API for viewing unpublished content from a headless CMS or other data sources.

   - **Enable Preview Mode**:
     ```js
     export default function handler(req, res) {
       res.setPreviewData({});
       res.end('Preview mode enabled');
     }
     ```

   - **Disable Preview Mode**:
     ```js
     export default function handler(req, res) {
       res.clearPreviewData();
       res.end('Preview mode disabled');
     }
     ```

### 10. **Custom Document API**
   Next.js allows you to customize the default HTML document structure via a custom `_document.js` file. This is useful for modifying the `<html>` or `<body>` tags.

   - **Custom `_document.js` Example**:
     ```js
     // pages/_document.js
     import Document, { Html, Head, Main, NextScript } from 'next/document';
     
     class MyDocument extends Document {
       render() {
         return (
           <Html>
             <Head />
             <body>
               <Main />
               <NextScript />
             </body>
           </Html>
         );
       }
     }
     
     export default MyDocument;
     ```

### 11. **Custom App API**
   You can override the default App component by creating a custom `_app.js` file, useful for persisting layouts, adding global CSS, and more.

   - **Custom `_app.js` Example**:
     ```js
     // pages/_app.js
     import '../styles/globals.css';
     
     function MyApp({ Component, pageProps }) {
       return <Component {...pageProps} />;
     }
     
     export default MyApp;
     ```

### 12. **Built-in CSS and Sass Support**
   Next.js has built-in support for importing **CSS** and **Sass** files directly into your components.

   - **Importing CSS**:
     ```js
     import '../styles/globals.css';
     
     export default function MyApp({ Component, pageProps }) {
       return <Component {...pageProps} />;
     }
     ```

   - **Importing Sass**:
     ```js
     import '../styles/globals.scss';
     
     export default function MyApp({ Component, pageProps }) {
       return <Component {...pageProps} />;
     }
     ```

### 13. **Static File Serving API**
   You can serve static files like images, fonts, or documents from the **`public`** directory. These files are accessible via the root URL path.

   - **Serving Static Files**:
     Place files in the `public` directory and access them in your app:
     
     ```jsx
     <img src="/logo.png" alt="Logo" />
     ```

### 14. **Edge API Routes**
   Next.js provides **Edge API Routes**, which allow you to run your server-side logic closer to the user, minimizing latency.

   - **Edge API Route Example**:
     ```js
     // pages/api/hello.js
     export const config = {
       runtime: 'edge',
     };
     
     export default async function handler(req) {
       return new Response('Hello from the Edge!');
     }
     ```

### 15. **Custom Error Pages**
   Next.js allows you to create custom error pages by adding `_error.js` or `_error.tsx` files in the `pages` directory.

   - **Custom `_error.js`**:
     ```jsx
     function Error({ statusCode }) {
       return (
         <p>
           {statusCode
             ? `An error ${statusCode} occurred on server`
             : 'An error occurred on client'}
         </p>
       );
     }
     
     Error.getInitialProps = ({ res, err }) => {
       const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
       return { statusCode };
     };
     
     export default Error;
     ```

---

This list includes the core APIs provided by Next.js, helping developers build sophisticated applications with server-side rendering, static generation, and enhanced user experience.