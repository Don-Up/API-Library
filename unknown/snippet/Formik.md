### 1. **Install Formik**

Make sure you install Formik in your project:

```bash
npm install formik
```

---

### 2. **Basic Formik Example**

Here’s how to use Formik to build a simple form in React.

<audio src="C:\Users\10691\Downloads\2024年12月23日21点34分.mp3"></audio>

```jsx
import React from "react";
import { useFormik } from "formik";

const BasicForm = () => {
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
```

---

### Explanation of the Code:

#### 1. **`useFormik` Hook**

- The `useFormik` hook initializes the form and provides all the necessary properties and methods, such as:
  - `initialValues`: Sets default values for form fields.
  - `validate`: A function for custom validation. It returns an object where the keys are field names and the values are error messages.
  - `onSubmit`: A function that executes when the form is submitted.

#### 2. **Input Handling**

Formik automatically handles inputs with the following:
- `onChange`: Updates field values in the `formik.values` object.
- `onBlur`: Marks fields as "touched" to show validation errors after losing focus.
- `value`: Binds the current value of the field.

#### 3. **Validation Feedback**

- `formik.errors`: Contains error messages for invalid fields.
- `formik.touched`: Ensures errors are shown only after interacting with the fields.

---

### 3. **Advanced Formik Example (With `Yup` Validation)**

Formik works seamlessly with the **Yup** library for schema-based validation.

<audio src="C:\Users\10691\Downloads\2024年12月23日22点15分.mp3"></audio>

```bash
npm install yup
```

```jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// 1, 定义组件 AdvancedForm
const AdvancedForm = () => {
  // 2, 使用 Formik 管理表单状态
  const formik = useFormik({
    initialValues: {
      name: "", // 姓名字段的初始值为空
      email: "", // 邮箱字段的初始值为空
    },
    // 3, 设置表单验证规则
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less") // 限制最多 15 个字符
        .required("Name is required"), // 必填项
      email: Yup.string()
        .email("Invalid email address") // 必须是有效的邮箱格式
        .required("Email is required"), // 必填项
    }),
    // 4, 定义表单提交逻辑
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2)); // 弹窗显示表单数据
    },
  });

  // 5, 渲染表单结构
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* 6, 渲染姓名输入框 */}
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange} // 更新表单状态
          onBlur={formik.handleBlur} // 处理失焦事件
          value={formik.values.name} // 绑定输入框的值
        />
        {formik.touched.name && formik.errors.name ? ( // 如果验证失败，显示错误信息
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
      </div>

      {/* 7, 渲染邮箱输入框 */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange} // 更新表单状态
          onBlur={formik.handleBlur} // 处理失焦事件
          value={formik.values.email} // 绑定输入框的值
        />
        {formik.touched.email && formik.errors.email ? ( // 如果验证失败，显示错误信息
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
      </div>

      {/* 8, 渲染提交按钮 */}
      <button type="submit">Submit</button>
    </form>
  );
};

// 9, 导出组件
export default AdvancedForm;
```

---

### Key Improvements with `Yup`:

- **`validationSchema`**: Defines a schema for validation using Yup. This reduces the need for manual validation logic.
- **Reusable Rules**: Use Yup to define validation rules like string length, required fields, and email formatting.

---

### Final Notes:

Formik simplifies form handling by:
1. Abstracting state management for form inputs.
2. Providing easy validation.
3. Supporting libraries like Yup for advanced use cases.

This makes it ideal for building both basic and complex forms in React!