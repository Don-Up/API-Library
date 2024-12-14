### Formik in React  

<audio src="../..\..\mp3\__Formik__ is a.mp3"></audio>

**Formik** is a popular React library for managing forms. It simplifies handling form state, validation, and submission. By providing hooks like `useFormik` or components like `<Formik>` and `<Field>`, Formik reduces boilerplate code. It supports schema-based validation using libraries like Yup and works seamlessly with React's controlled components.  

1. **Use Case**:  
   - Managing complex forms with validation and submission logic.  

2. **Advantages**:  
   - Simplifies form state management.  
   - Provides built-in validation support.  

3. **Installation**:  
   - Install via `npm install formik`.  

> **Formik 在 React 中的作用**  
> **Formik** 是一个流行的 React 表单管理库，简化了表单状态、验证和提交的处理。通过提供像 `useFormik` 的钩子，或 `<Formik>` 和 `<Field>` 的组件，Formik 减少了样板代码。它支持使用 Yup 等库进行基于模式的验证，并与 React 的受控组件无缝集成。  
> 1. **使用场景**：  
>    - 管理带有复杂验证和提交逻辑的表单。  
> 2. **优点**：  
>    - 简化表单状态管理。  
>    - 提供内置验证支持。  
> 3. **安装方法**：  
>    - 通过 `npm install formik` 安装。  

---

### Code Examples:

#### **Basic Formik Example**

<audio src="../..\..\mp3\这段代码使用了 `Formik.mp3"></audio>

```javascript
import React from 'react';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2)); // Log form values
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

- **What it does**:  
  - Uses `useFormik` to manage form state and handle submissions.  

---

#### **Adding Validation with Yup**

<audio src="../..\..\mp3\这段代码使用了 Formik .mp3"></audio>

```javascript
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Schema validation library

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address') // Email validation
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters') // Password length validation
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // Triggers validation when the input is blurred
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? ( // Show validation errors
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

- **What it does**:  
  - Validates the form using Yup and displays error messages.  

---

#### **Using `<Formik>` Component and `<Field>`**

<audio src="../..\..\mp3\这段代码使用了 Formik  (1).mp3"></audio>

```javascript
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function App() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Email</label>
            <Field name="email" type="email" /> {/* Simplifies input handling */}
            <ErrorMessage name="email" component="div" /> {/* Displays validation errors */}
          </div>
          <div>
            <label>Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default App;
```

- **What it does**:  
  - Uses `<Formik>` for form management and `<Field>`/`<ErrorMessage>` for simpler input handling and validation display.  

---

### Key Notes:
1. **`useFormik`**: A hook for manual control over forms.  
2. **`<Formik>`**: A component for declarative form handling.  
3. **Yup Integration**: Enables easy schema-based validation.  
4. **Error Handling**: Use `touched` and `errors` or `<ErrorMessage>` to display validation messages.  

#### Installation Command:
```bash
npm install formik yup
```