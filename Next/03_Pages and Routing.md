# Pages and Routing in Next.js

<audio src="../mp3/2024年12月19日08点18分.mp3"></audio>

Next.js simplifies routing by using a **file-based routing system**, eliminating the need for external libraries like `react-router`. Every file inside the `pages/` directory automatically becomes a route in your application. This approach makes it straightforward to build and manage routes, even in large applications.

---

## **Objective**

The goal of this section is to:

1. Understand the basics of file-based routing in Next.js.
2. Learn how to create dynamic routes and nested routes.
3. Explore advanced routing features, such as dynamic API routes and catch-all routes.

By mastering Next.js's routing system, you'll be able to build robust and scalable navigation structures for your applications.

---

## **1. File-Based Routing Overview**

In Next.js, routing is based on the structure of the `pages/` directory. Each file inside this folder automatically corresponds to a route. For example:

- `pages/index.js` → `/` (home route)
- `pages/about.js` → `/about`
- `pages/contact.js` → `/contact`

### **Example: Creating Basic Routes**

1. Create a new file in the `pages/` directory, e.g., `services.js`.
2. Add the following code to `pages/services.js`:

   ```jsx
   export default function Services() {
     return (
       <div>
         <h1>Our Services</h1>
         <p>Learn more about what we offer.</p>
       </div>
     );
   }
   ```

3. Start your Next.js development server (`npm run dev`), and navigate to [http://localhost:3000/services](http://localhost:3000/services). You’ll see your new "Services" page.

---

## **2. Dynamic Routes**

<audio src="../mp3/Dynamic routing.mp3"></audio>

Dynamic routing allows you to create routes based on data or parameters. In Next.js, you can define dynamic routes by wrapping a file or folder name with square brackets (`[param]`).

### **Example: Dynamic Route**

1. Create a new file: `pages/blog/[id].js`.
2. Add the following code:

   ```jsx
   import { useRouter } from 'next/router';

   export default function BlogPost() {
     const router = useRouter();
     const { id } = router.query;

     return (
       <div>
         <h1>Blog Post: {id}</h1>
         <p>This is the content of the blog post with ID: {id}.</p>
       </div>
     );
   }
   ```

3. Navigate to [http://localhost:3000/blog/123](http://localhost:3000/blog/123). You'll see the page dynamically renders the `id` parameter (in this case, "123").

**Key Points:**
- The `useRouter` hook from Next.js is used to access route parameters (`router.query`).
- Dynamic routes are excellent for creating pages like blogs, profiles, or e-commerce product pages.

---

## **3. Nested Routes**

You can create nested routes by organizing files into folders inside the `pages/` directory.

### **Example: Nested Routes**

1. Create a folder structure: `pages/products/` with two files:
   - `index.js` (for the `/products` route):
     ```jsx
     export default function Products() {
       return (
         <div>
           <h1>Products</h1>
           <p>Welcome to the product catalog.</p>
         </div>
       );
     }
     ```
   - `[id].js` (for the `/products/[id]` route):
     ```jsx
     import { useRouter } from 'next/router';
     
     export default function ProductDetail() {
       const router = useRouter();
       const { id } = router.query;
     
       return (
         <div>
           <h1>Product Detail</h1>
           <p>Details for product ID: {id}</p>
         </div>
       );
     }
     ```

2. Navigate to:
   - `/products` → Displays the product catalog.
   - `/products/45` → Displays details for the product with ID "45".

Nested routes allow you to build hierarchical navigation structures, such as categories and subcategories.

---

## **4. Catch-All Routes**

Catch-all routes handle multiple dynamic segments. You can create these routes by using `[...param]` in the file name.

### **Example: Catch-All Route**

<audio src="../mp3/2024年12月19日08点44分.mp3"></audio>

1. Create a file: `pages/docs/[...slug].js`.
2. Add the following code:

   ```jsx
   		import { useRouter } from 'next/router';

   export default function Docs() {
     const router = useRouter();
     const { slug } = router.query;

     return (
       <div>
         <h1>Documentation</h1>
         <p>Slug: {slug ? slug.join('/') : 'Home'}</p>
       </div>
     );
   }
   ```

3. Navigate to:
   - `/docs` → Displays "Slug: Home".
   - `/docs/getting-started` → Displays "Slug: getting-started".
   - `/docs/guides/advanced` → Displays "Slug: guides/advanced".

**Key Points:**
- `slug` is an array that captures all dynamic segments.
- Catch-all routes are useful for building deeply nested structures like documentation websites or multi-level navigation systems.

---

## **5. API Routes**

In addition to page routing, Next.js also supports API routes that allow you to define serverless API endpoints. These routes are created inside the `pages/api/` directory.

### **Example: API Route**

1. Create a file: `pages/api/hello.js`.
2. Add the following code:

   ```javascript
   export default function handler(req, res) {
     res.status(200).json({ message: 'Hello, Next.js!' });
   }
   ```

3. Start your server and navigate to [http://localhost:3000/api/hello](http://localhost:3000/api/hello). You'll receive the following JSON response:

   ```json
   {
     "message": "Hello, Next.js!"
   }
   ```

**Key Points:**
- API routes are useful for building backend logic, like handling form submissions or providing data to your frontend.
- Each file in the `pages/api/` directory corresponds to an API endpoint.

---

## **6. Custom 404 Page**

Next.js allows you to create a custom 404 page by defining a `404.js` file in the `pages/` directory.

### **Example: Custom 404 Page**

1. Create a file: `pages/404.js`.
2. Add the following code:

   ```jsx
   export default function Custom404() {
     return (
       <div>
         <h1>404 - Page Not Found</h1>
         <p>Oops! The page you're looking for doesn't exist.</p>
       </div>
     );
   }
   ```

3. Navigate to a non-existent route (e.g., `/non-existent`) to see your custom 404 page in action.

---

## **7. Linking Between Pages**

Next.js provides a built-in `Link` component for client-side navigation between pages, which is optimized for performance (e.g., prefetching pages).

<audio src="../mp3/2024年12月19日08点56分.mp3"></audio>

### **Example: Using the `Link` Component**

1. Add a navigation link to the homepage (`pages/index.js`):
   ```jsx
   import Link from 'next/link';
   
   export default function Home() {
     return (
       <div>
         <h1>Welcome to Next.js!</h1>
         <Link href="/about">Go to About Page</Link>
       </div>
     );
   }
   ```

2. Clicking the link will take you to the `/about` page.

**Key Points:**

- The `Link` component improves performance by prefetching the linked page when it appears in the viewport.

---

## **8. Programmatic Navigation**

In addition to the `Link` component, you can navigate between routes programmatically using the `useRouter` hook.

### **Example: Programmatic Navigation**

<audio src="../mp3/2024年12月19日09点06分.mp3"></audio>

1. Update `pages/index.js`:
   ```jsx
   import { useRouter } from 'next/router';
   
   export default function Home() {
     const router = useRouter();
   
     const handleNavigation = () => {
       router.push('/about');
     };
   
     return (
       <div>
         <h1>Welcome to Next.js!</h1>
         <button onClick={handleNavigation}>Go to About Page</button>
       </div>
     );
   }
   ```

2. Clicking the button will navigate to the `/about` page.

---

## **Summary**

<audio src="../mp3/2024年12月19日09点10分.mp3"></audio>

Next.js's file-based routing system is powerful and intuitive, allowing developers to easily create static, dynamic, and nested routes. By leveraging features like dynamic routing, catch-all routes, and API routes, you can build complex navigation structures with minimal configuration. Additionally, built-in tools like the `Link` component and `useRouter` hook make navigation seamless and optimized for performance. Mastering this routing system is essential for building scalable applications with Next.js.