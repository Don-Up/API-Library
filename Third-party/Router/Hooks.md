### React Router Hooks  

React Router provides powerful hooks like `useNavigate`, `useParams`, and `useSearchParams` to handle navigation, route parameters, and query strings in React applications.  

1. **`useNavigate`**: Programmatically navigate between routes.  
2. **`useParams`**: Access dynamic URL parameters (e.g., `/user/:id`).  
3. **`useSearchParams`**: Manage query strings in the URL (e.g., `?key=value`).  

These hooks simplify routing logic and allow developers to build dynamic, interactive applications.  

> **React Router 钩子**  
> React Router 提供了强大的钩子，比如 `useNavigate`、`useParams` 和 `useSearchParams`，用于在 React 应用中处理导航、路由参数和查询字符串。  
>
> <audio src="C:\Users\10691\Downloads\useNavigate：用于编.mp3"></audio>
>
> 1. **`useNavigate`**：编程式导航，跳转到指定路由。  
> 2. **`useParams`**：获取动态 URL 参数（如 `/user/:id`）。  
> 3. **`useSearchParams`**：管理 URL 查询字符串（如 `?key=value`）。  
> 这些钩子简化了路由逻辑，帮助开发者构建动态、交互式应用。  

---

### Code Examples:

#### **`useNavigate`**

<audio src="C:\Users\10691\Downloads\这段代码使用 ReactRou (4).mp3"></audio>

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about'); // Navigate to About page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

<audio src="C:\Users\10691\Downloads\这段代码使用 ReactRou (5).mp3"></audio>


```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToAboutWithState = () => {
    navigate('/about', { state: { message: 'Hello from Home!' }, replace: false });
    // `state`: Pass data to the next route
    // `replace`: If true, replaces the current entry in the history stack
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAboutWithState}>Go to About with State</button>
    </div>
  );
}

function About() {
  const location = useLocation(); // Access state from navigate
  const message = location.state?.message || 'No message passed';

  return (
    <div>
      <h1>About Page</h1>
      <p>Message: {message}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

#### **`useParams`**

<audio src="C:\Users\10691\Downloads\这段代码使用 ReactRou (3).mp3"></audio>

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

function User() {
  const { id } = useParams(); // Access dynamic parameter
  return <h1>User ID: {id}</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
```
- **What it does**:  
  - Extracts the `id` from the URL (e.g., `/user/123`).

---

#### **`useSearchParams`**

<audio src="C:\Users\10691\Downloads\这段代码使用 ReactRou (2).mp3"></audio>

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams(); // Manage query params
  const query = searchParams.get('query'); // Get the value of "query"

  const updateQuery = () => {
    setSearchParams({ query: 'React' }); // Update query string
  };

  return (
    <div>
      <h1>Search Page</h1>
      <p>Query: {query}</p>
      <button onClick={updateQuery}>Set Query to "React"</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
```
- **What it does**:  
  - Retrieves and updates the query string (e.g., `/search?query=React`).

---

### Key Notes:  
1. **`useNavigate`**: For programmatic navigation (e.g., after a form submission).  
2. **`useParams`**: For accessing dynamic route segments like `/user/:id`.  
3. **`useSearchParams`**: For working with URL query strings dynamically.  

#### Example: Combine `useParams` and `useNavigate`
```javascript
function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/'); // Navigate back to Home
  };

  return (
    <div>
      <h1>User Profile for ID: {id}</h1>
      <button onClick={goToHome}>Go Home</button>
    </div>
  );
}
```