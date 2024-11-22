### Comprehensive List of React APIs

React provides a variety of APIs that help developers build dynamic and efficient user interfaces. These APIs can be classified into **component-related** APIs, **hooks**, and **utilities**. Below is a comprehensive list of React APIs:

---

### **1. Component APIs**

These are the core APIs used to create and manage components in React.

- **`React.Component`**  
  The base class for creating class components in React. Subclass it to create stateful components.

- **`React.PureComponent`**  
  A base class similar to `React.Component`, but with shallow comparison for `props` and `state` to avoid unnecessary re-renders.

- **`React.memo`**  
  A higher-order component (HOC) that wraps a functional component to perform a shallow comparison of its props to prevent unnecessary re-renders.

- **`React.forwardRef`**  
  A function that allows you to pass refs through components to DOM elements or class components.

- **`React.lazy`**  
  Enables **code-splitting** by loading a component lazily when it is rendered, using dynamic `import()`.

- **`React.Suspense`**  
  Displays a fallback (loading component) while waiting for the lazy-loaded component or data to resolve.

- **`React.Fragment`**  
  A component that allows you to group multiple children without adding extra nodes to the DOM.

---

### **2. React Hooks**

Hooks are functions that let you use React state and lifecycle features in functional components.

- **`useState`**  
  A hook that adds local state to functional components.

- **`useEffect`**  
  A hook that runs side effects (e.g., data fetching, subscriptions) in functional components.

- **`useContext`**  
  A hook that allows you to subscribe to React context values.

- **`useRef`**  
  A hook that returns a mutable object whose `.current` property can hold any value, similar to instance variables in class components.

- **`useReducer`**  
  A hook that is an alternative to `useState` for managing more complex state logic in functional components.

- **`useCallback`**  
  A hook that memoizes a callback function, preventing it from being recreated on every render.

- **`useMemo`**  
  A hook that memoizes the result of an expensive computation so that it only recalculates when its dependencies change.

- **`useLayoutEffect`**  
  Similar to `useEffect`, but it fires synchronously after all DOM mutations. Use it for reading layout from the DOM and synchronously re-rendering.

- **`useImperativeHandle`**  
  A hook that customizes the instance value exposed to parent components when using `forwardRef`.

- **`useDebugValue`**  
  A hook that lets you display a label in React DevTools for custom hooks.

- **`useTransition`**  
  A hook that allows you to mark updates as non-urgent, enabling better user experience by allowing React to prioritize other updates.

- **`useDeferredValue`**  
  A hook that defers updating a value until the user is idle to prevent expensive updates from blocking user interactions.

- **`useId`**  
  A hook that generates a unique ID to improve accessibility and prevent ID collisions in server-side rendering (SSR).

- **`useSyncExternalStore`**  
  A hook for subscribing to external data sources that are shared between React and non-React codebases.

---

### **3. Context API**

- **`React.createContext`**  
  Creates a context object that holds global data that can be accessed by any descendant component via `useContext` or `Context.Consumer`.

- **`Context.Provider`**  
  Provides the context value to child components.

- **`Context.Consumer`**  
  Subscribes to the context value, allowing you to access the closest Provider's value.

---

### **4. Refs and DOM APIs**

- **`React.createRef`**  
  Creates a ref object that can be attached to React elements to access the DOM element or component instance.

- **`React.findDOMNode`**  
  Provides access to a DOM element corresponding to a React component, but is discouraged in favor of `ref` usage.

- **`React.cloneElement`**  
  Clones and returns a new React element using the element's props and children, while optionally overriding props.

- **`React.createElement`**  
  Creates a React element given a type, props, and children. It is typically used by JSX under the hood.

---

### **5. Error Boundaries and Error Handling**

- **`componentDidCatch`**  
  A lifecycle method available in class components to handle errors in their child components.

- **`React.ErrorBoundary`** (future API)  
  A planned API to simplify error boundary handling.

---

### **6. Concurrent Mode APIs** (Experimental)

- **`React.startTransition`**  
  Allows marking state updates as non-urgent and deferring them to improve performance during concurrent rendering.

- **`React.useTransition`**  
  A hook to track the pending state of a concurrent update.

- **`React.useDeferredValue`**  
  A hook that delays updating a value until the application is idle, useful for large updates or computations.

---

### **7. Utilities**

- **`React.isValidElement`**  
  Checks if a value is a valid React element.

- **`React.Children`**  
  A utility that provides methods for manipulating the `children` prop, such as `map`, `forEach`, `count`, `toArray`, and `only`.

- **`React.createFactory`**  
  A legacy API used to create elements, mainly used before JSX was widely adopted.

- **`React.version`**  
  A string that holds the current version of React.

---

### **8. Server-side Rendering (SSR) APIs**

- **`ReactDOMServer.renderToString`**  
  Renders React components to a string for server-side rendering.

- **`ReactDOMServer.renderToStaticMarkup`**  
  Similar to `renderToString`, but removes additional React attributes like `data-reactroot`.

- **`ReactDOMServer.renderToNodeStream`**  
  Streams the rendered output to improve performance for large pages (deprecated in React 18).

- **`ReactDOMServer.renderToPipeableStream`**  
  Streams the markup using a more efficient streaming API introduced in React 18.

---

### **9. JSX Utilities**

While not technically React APIs, these utilities are useful when working with JSX:

- **`React.Fragment`**  
  A utility to group children elements without adding an extra DOM node.

- **`React.StrictMode`**  
  A wrapper component that activates additional checks and warnings in development mode (e.g., highlighting potential issues with lifecycle methods).

---

### **10. Legacy APIs**

These APIs are no longer recommended for use but are still part of React for backward compatibility:

- **`ReactDOM.render`**  
  Used to render a React component into a DOM node. Deprecated in favor of `ReactDOM.createRoot` in React 18.

- **`ReactDOM.unmountComponentAtNode`**  
  Removes a mounted React component from the DOM.

- **`UNSAFE_componentWillMount`, `UNSAFE_componentWillReceiveProps`, `UNSAFE_componentWillUpdate`**  
  Legacy lifecycle methods that should no longer be used.

---

### **11. ReactDOM APIs**

These APIs are tied to the DOM rendering of React components.

- **`ReactDOM.createRoot`**  
  Creates a root for rendering React applications in React 18 with concurrent features.

- **`ReactDOM.hydrate`**  
  Hydrates a server-rendered React application, attaching event listeners to the existing markup.

- **`ReactDOM.flushSync`**  
  Forces React to flush updates synchronously, useful for ensuring updates are applied immediately.

---

This list covers the most important and commonly used **React APIs**. Each of these APIs plays a significant role in helping React developers build efficient, scalable, and maintainable applications.