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

<audio src="../../../../Downloads/2024年12月24日08点33分.mp3"></audio>

![image-20241120143640711](assets\image-20241120143640711.png)

```jsx
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/reset.css"; // 引入 Ant Design 样式

// 1, 定义组件 AntdFormDemo
const AntdFormDemo = () => {
  // 2, 定义表单提交逻辑
  const onFinish = (values) => {
    console.log("Success:", values); // 表单提交成功时打印表单数据
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo); // 表单提交失败时打印错误信息
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Form Demo</h2>

      {/* 3, 设置表单布局和初始值 */}
      <Form
        name="basic" // 表单名称
        labelCol={{ span: 8 }} // 设置标签宽度
        wrapperCol={{ span: 16 }} // 设置输入框宽度
        initialValues={{ remember: true }} // 设置初始值
        onFinish={onFinish} // 提交成功时的回调
        onFinishFailed={onFinishFailed} // 提交失败时的回调
        autoComplete="off" // 禁用浏览器自动补全
      >
        {/* 4, 渲染用户名字段 */}
        <Form.Item
          label="Username" // 标签文本
          name="username" // 字段名称
          rules={[
            {
              required: true, // 必填项
              message: "Please input your username!", // 验证失败时的提示信息
            },
          ]}
        >
          <Input /> {/* 用户名输入框 */}
        </Form.Item>

        {/* 5, 渲染密码字段 */}
        <Form.Item
          label="Password" // 标签文本
          name="password" // 字段名称
          rules={[
            {
              required: true, // 必填项
              message: "Please input your password!", // 验证失败时的提示信息
            },
          ]}
        >
          <Input.Password /> {/* 密码输入框 */}
        </Form.Item>

        {/* 6, 渲染“记住我”复选框 */}
        <Form.Item
          name="remember" // 字段名称
          valuePropName="checked" // 绑定复选框的选中状态
          wrapperCol={{ offset: 8, span: 16 }} // 设置复选框布局
        >
          <Checkbox>Remember me</Checkbox> {/* 复选框 */}
        </Form.Item>

        {/* 7, 渲染提交按钮 */}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button> {/* 提交按钮 */}
        </Form.Item>
      </Form>
    </div>
  );
};

export default AntdFormDemo; // 导出组件
```

### Features in the Demo:
1. **Basic Form**: Demonstrates a login form with username and password fields.
2. **Validation**: Uses required field validation for both inputs.
3. **Initial Values**: Pre-selects "Remember me" checkbox.
4. **Submit Handlers**: Logs form values on successful submission.
5. **Form Layout**: Uses a horizontal layout with label and input columns.