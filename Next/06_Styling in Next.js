# Styling in Next.js

Next.js provides a wide variety of **styling options** to help developers build visually appealing and modern web applications. Whether you prefer **CSS modules**, **global styles**, **Styled JSX**, **CSS-in-JS libraries**, or **utility-first frameworks** like Tailwind CSS, Next.js supports them all. Choosing the right approach depends on your project's requirements, team preferences, and the level of customization needed.

---

## **Objective**

The goal of this section is to:

1. Understand the different styling options available in Next.js.
2. Learn how to implement each styling method effectively.
3. Explore when to use a specific approach based on the use case.

By the end, you’ll have a clear understanding of how to style your Next.js applications using built-in tools and popular third-party libraries.

---

## **1. Built-In Styling Options in Next.js**

Next.js supports several built-in options for styling your application, such as:

- **CSS Modules**
- **Global Styles**
- **Styled JSX**

---

### **1.1 CSS Modules**

CSS Modules are a popular way to scope CSS to individual components in a Next.js application. This approach avoids class name conflicts and is ideal for component-based styling.

#### **How CSS Modules Work:**
- CSS files ending with `.module.css` are treated as CSS Modules.
- Class names are scoped to the module and won't affect other components.

#### **Example: Using CSS Modules**

1. Create a CSS module file: `styles/Home.module.css`.

   ```css
   .container {
     background-color: #f0f0f0;
     padding: 20px;
     text-align: center;
   }

   .heading {
     color: #0070f3;
     font-size: 2rem;
   }
   ```

2. Import and apply styles in a component:

   ```javascript
   import styles from '../styles/Home.module.css';
   
   export default function Home() {
     return (
       <div className={styles.container}>
         <h1 className={styles.heading}>Welcome to Next.js!</h1>
       </div>
     );
   }
   ```

#### **Advantages of CSS Modules:**
- Automatic scoping of class names prevents style conflicts.
- Easy to use and integrates well with Next.js.

#### **When to Use:**
- For small- to medium-sized projects where styles are mostly component-specific.
- When you want a simple, native CSS solution without additional dependencies.

---

### **1.2 Global Styles**

Global styles are applied across the entire application and are defined in a single CSS file (or multiple files). These styles are not scoped to components and can affect the entire application.

#### **How to Add Global Styles:**

1. Create a global CSS file: `styles/globals.css`.

   ```css
   body {
     margin: 0;
     font-family: Arial, sans-serif;
     background-color: #ffffff;
     color: #333333;
   }

   h1 {
     font-size: 2.5rem;
     margin: 20px 0;
   }
   ```

2. Import the global CSS file in `pages/_app.js`:

   ```javascript
   import '../styles/globals.css';
   
   export default function App({ Component, pageProps }) {
     return <Component {...pageProps} />;
   }
   ```

#### **Advantages of Global Styles:**
- Useful for defining base styles (e.g., typography, layout, colors) and CSS resets.
- Works well with utility-first frameworks like Tailwind CSS.

#### **When to Use:**
- For global elements like `<body>`, `<html>`, or shared components.
- When using a combination of global and component-scoped styles.

#### **Limitations:**
- Lack of scoping can lead to unintentional style overrides in large applications.

---

### **1.3 Styled JSX**

Next.js includes **Styled JSX** out of the box, which allows you to write scoped CSS directly within your components using a `<style jsx>` tag. Styled JSX is a CSS-in-JS solution that provides scoping and dynamic styles.

#### **Example: Using Styled JSX**

1. Add scoped styles inside a component:

   ```javascript
   export default function StyledComponent() {
     return (
       <div>
         <h1>Hello, Styled JSX!</h1>
         <p>This style is scoped to this component.</p>

         <style jsx>{`
           h1 {
             color: #0070f3;
           }
           p {
             font-size: 1.2rem;
             color: #333;
           }
         `}</style>
       </div>
     );
   }
   ```

2. To use dynamic styles, embed JavaScript expressions:

   ```javascript
   export default function DynamicStyledComponent() {
     const isPrimary = true;
   
     return (
       <div>
         <h1>Hello, Dynamic Styles!</h1>
   
         <style jsx>{`
           h1 {
             color: ${isPrimary ? '#0070f3' : '#ff0000'};
           }
         `}</style>
       </div>
     );
   }
   ```

#### **Advantages of Styled JSX:**
- Style scoping is built-in and automatic.
- Supports dynamic styling with JavaScript expressions.

#### **When to Use:**
- For small, self-contained styles specific to a single component.
- When you want to keep styles and components in one file.

#### **Limitations:**
- Limited syntax compared to full CSS preprocessors like SASS/SCSS.
- Not ideal for managing large stylesheets or shared styles.

---

## **2. Third-Party Styling Options**

In addition to the built-in options, Next.js supports many third-party libraries for advanced styling needs. Here are some popular choices:

---

### **2.1 Tailwind CSS**

**Tailwind CSS** is a utility-first CSS framework that allows you to build designs using pre-defined utility classes. It’s highly flexible and widely adopted for modern web development.

#### **How to Set Up Tailwind CSS in Next.js:**

1. Install Tailwind CSS:
   ```bash
   npm install tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. Configure `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Import Tailwind styles in `styles/globals.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. Use utility classes in your components:
   ```javascript
   export default function TailwindExample() {
     return (
       <div className="bg-blue-500 text-white p-4 rounded-lg">
         <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
       </div>
     );
   }
   ```

#### **Advantages of Tailwind CSS:**
- Rapidly build responsive designs using utility classes.
- Highly customizable via configuration files.
- Encourages consistent design patterns.

#### **When to Use:**
- For projects that require rapid prototyping or custom designs.
- When you prefer a utility-first approach over traditional CSS.

---

### **2.2 CSS-in-JS Libraries (e.g., Styled Components, Emotion)**

CSS-in-JS libraries like **Styled Components** and **Emotion** allow you to write CSS directly in your JavaScript files. These libraries offer dynamic styling, theming, and a modern developer experience.

#### **Example: Using Styled Components**

1. Install Styled Components:
   ```bash
   npm install styled-components
   npm install --save-dev babel-plugin-styled-components
   ```

2. Configure Babel to support Styled Components (add `.babelrc`):
   ```json
   {
     "presets": ["next/babel"],
     "plugins": [["styled-components", { "ssr": true }]]
   }
   ```

3. Use styled components in your application:
   ```javascript
   import styled from 'styled-components';
   
   const Button = styled.button`
     background-color: #0070f3;
     color: white;
     padding: 10px 20px;
     border: none;
     border-radius: 5px;
     cursor: pointer;
   
     &:hover {
       background-color: #005bb5;
     }
   `;
   
   export default function StyledButton() {
     return <Button>Click Me!</Button>;
   }
   ```

#### **Advantages of CSS-in-JS:**
- Dynamic styling based on props or states.
- Built-in support for theming and component-specific styles.
- No need to worry about class name conflicts.

#### **When to Use:**
- For complex, interactive components that require dynamic styling.
- When you need advanced features like theming or animations.

---

### **2.3 SASS/SCSS**

SASS/SCSS allows you to write more maintainable CSS using variables, nesting, mixins, and more.

#### **How to Set Up SASS in Next.js:**

1. Install SASS:
   ```bash
   npm install sass
   ```

2. Create an SCSS file: `styles/Home.module.scss`:
   ```scss
   $primary-color: #0070f3;
   
   .container {
     text-align: center;
     background-color: $primary-color;
     padding: 20px;
   }
   ```

3. Import SCSS in your component:
   ```javascript
   import styles from '../styles/Home.module.scss';
   
   export default function Home() {
     return <div className={styles.container}>Welcome to SCSS in Next.js!</div>;
   }
   ```

#### **Advantages of SASS/SCSS:**
- Enhanced CSS features like nesting, variables, and mixins.
- Easily maintainable for large-scale projects.

#### **When to Use:**
- For larger projects requiring reusable and structured styles.
- When you need advanced CSS features.

---

## **3. Comparing Styling Options**

| **Styling Option** | **Scoping**         | **Dynamic Styles** | **Complexity** | **Use Cases**                           |
| ------------------ | ------------------- | ------------------ | -------------- | --------------------------------------- |
| CSS Modules        | Scoped to module    | No                 | Low            | Component-specific styling              |
| Global Styles      | Global              | No                 | Low            | Base styles, typography                 |
| Styled JSX         | Scoped to component | Yes                | Medium         | Small, self-contained components        |
| Tailwind CSS       | Global utilities    | No                 | Medium         | Utility-first, responsive design        |
| Styled Components  | Scoped to component | Yes                | High           | Complex, dynamic, or theme-based styles |
| SASS/SCSS          | Global or Scoped    | No                 | Medium         | Structured styles for large projects    |

---

## **Summary**

Next.js offers a range of styling options to suit different project needs. From built-in CSS Modules and Styled JSX to advanced third-party tools like Tailwind CSS, Styled Components, and SASS, you can choose the best approach based on your design complexity and team preferences. By mastering these options, you'll have the flexibility to create beautiful, maintainable, and scalable user interfaces in your Next.js applications.