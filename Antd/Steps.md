### Steps

Steps provides a visual guide for multi-step workflows or progress tracking.

- **Components**: `Steps`, `Step`
- **Direction**: Horizontal or vertical layout
- **Status**: `process`, `finish`, `wait`, `error` to indicate step state
- **Icons**: Supports custom step icons
- **Step Navigation**: Allows navigating between steps
- **Progress Dot**: Dot style for compact progress indication
- **Event Handlers**: `onChange` for step transitions

### Common Usage Demo

![image-20241120124454970](assets\image-20241120124454970.png)

```jsx
import React, { useState } from "react";
import { Steps, Button, message } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css"; // Ant Design styles

const { Step } = Steps;

const AntdStepsDemo = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Login",
      icon: <UserOutlined />,
      content: "User Login Step",
    },
    {
      title: "Verification",
      icon: <SolutionOutlined />,
      content: "Verification Step",
    },
    {
      title: "Payment",
      icon: <LoadingOutlined />,
      content: "Processing Payment",
    },
    {
      title: "Done",
      icon: <SmileOutlined />,
      content: "Finished!",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ant Design Steps Demo</h2>

      <Steps current={current}>
        {steps.map((item, index) => (
          <Step key={index} title={item.title} icon={item.icon} />
        ))}
      </Steps>

      <div style={{ margin: "20px 0", padding: "10px", border: "1px solid #ccc" }}>
        {steps[current].content}
      </div>

      <div>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Process complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default AntdStepsDemo;
```

### Features in the Demo:
1. **Basic Steps**: Shows a multi-step process with icons for each step.
2. **Horizontal Direction**: Layout is horizontal by default.
3. **Step Transitions**: Buttons to navigate between steps (`Next`, `Previous`).
4. **Custom Icons**: Each step has a unique icon for visual assistance.
5. **Final Action**: Shows a success message on completion of the process.