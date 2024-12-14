### Mocking and Spies in JavaScript Testing

<audio src="..\..\mp3\1.  Definition..mp3"></audio>

1. **Definition**:  
   - **Mocking**: Simulates external dependencies (e.g., API calls, functions) to control behavior in tests.  
   - **Spies**: Tracks calls to functions (e.g., how many times, with what arguments).

2. **Purpose**:  
   - Isolate units of code for testing.  
   - Verify interactions with external systems or functions.  

3. **Tools**:  
   - **Jest**: Built-in support for mocks and spies (`jest.fn`, `jest.spyOn`).  
   - **Sinon**: A standalone library for mocks, spies, and stubs.

> **Mock 和 Spy 在 JavaScript 测试中的应用**  
>
> <audio src="..\..\mp3\定义：     - Mock：.mp3"></audio>
>
> 1. **定义**：  
>    - **Mock**：模拟外部依赖（如 API 调用、函数）以控制测试行为。  
>    - **Spy**：跟踪函数调用（如调用次数、参数）。  
> 2. **目的**：  
>    - 隔离代码单元进行测试。  
>    - 验证与外部系统或函数的交互。  
> 3. **工具**：  
>    - **Jest**：内置 Mock 和 Spy 支持（如 `jest.fn`、`jest.spyOn`）。  
>    - **Sinon**：独立库，支持 Mock、Spy 和 Stub。

---

### Code Examples:

#### **Mocking with Jest**
```javascript
// greet.js
export function greet(name, fetchGreeting) {
  const greeting = fetchGreeting();
  return `${greeting}, ${name}!`;
}

// greet.test.js
import { greet } from "./greet";

test("greet uses mocked fetchGreeting", () => {
  const mockFetchGreeting = jest.fn(() => "Hello"); // Mocked function
  const result = greet("Alice", mockFetchGreeting);

  expect(mockFetchGreeting).toHaveBeenCalledTimes(1); // Verify it was called
  expect(result).toBe("Hello, Alice!"); // Verify the return value
});
```

#### **Spies with Jest**
```javascript
// math.js
export function calculate(a, b, callback) {
  return callback(a, b);
}

// math.test.js
import * as math from "./math";

test("spy on callback function", () => {
  const spy = jest.fn((a, b) => a + b); // Spy on the callback
  const result = math.calculate(3, 4, spy);

  expect(spy).toHaveBeenCalledWith(3, 4); // Verify arguments
  expect(result).toBe(7); // Verify the result
});
```

#### **Mocking with Sinon**
```javascript
const sinon = require("sinon");

// Example function to test
function fetchData(callback) {
  callback("data");
}

test("calls callback with data", () => {
  const spy = sinon.spy(); // Create a spy
  fetchData(spy);

  sinon.assert.calledOnce(spy); // Assert it was called once
  sinon.assert.calledWith(spy, "data"); // Assert it was called with "data"
});
```

---

### Key Notes:
1. **Mocks** let you control external dependencies for predictable testing.  
2. **Spies** track function calls, ensuring correct interactions (calls, arguments).  
3. Use Jest’s built-in methods (`jest.fn`, `jest.spyOn`) or libraries like **Sinon** for advanced mocking needs.