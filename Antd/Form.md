### Form

Form is a high-level component for building and validating forms in React.

- **Components**: `Form`, `Form.Item`
- **Controlled/Uncontrolled**: Works with both controlled and uncontrolled components
- **Validation**: Built-in validation rules and custom validators
- **Form Layout**: Supports `horizontal`, `vertical`, and `inline` layouts
- **Dynamic Fields**: Add or remove form fields dynamically
- **Submit Handling**: `onFinish`, `onFinishFailed` for form submission success/failure 
- **Initial Values**: Set default values for form fields
- **Form Methods**: `resetFields`, `validateFields` for programmatic control

### Common Usage Demo

![image-20241120143640711](assets\image-20241120143640711.png)

```jsx
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/reset.css"; // Ant Design styles

const AntdFormDemo = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Form Demo</h2>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Username Field */}
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        {/* Remember Me Checkbox */}
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AntdFormDemo;
```

### Features in the Demo:
1. **Basic Form**: Demonstrates a login form with username and password fields.
2. **Validation**: Uses required field validation for both inputs.
3. **Initial Values**: Pre-selects "Remember me" checkbox.
4. **Submit Handlers**: Logs form values on successful submission.
5. **Form Layout**: Uses a horizontal layout with label and input columns.