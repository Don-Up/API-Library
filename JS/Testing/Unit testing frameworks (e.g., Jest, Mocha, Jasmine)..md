### Unit Testing Frameworks in JavaScript (e.g., Jest, Mocha, Jasmine)

<audio src="..\..\mp3\1.  Definition. (2).mp3"></audio>

1. **Definition**:  
   - Unit testing frameworks test individual pieces of code (functions, components) in isolation.  
   - Popular frameworks include **Jest**, **Mocha**, and **Jasmine**.

2. **Features**:  
   - **Jest**: Easy setup, built-in mocking, snapshot testing.  
   - **Mocha**: Flexible, supports multiple assertion libraries (e.g., Chai).  
   - **Jasmine**: Behavior-driven testing with a built-in assertion library.

3. **Benefits**:  
   - Ensures code correctness.  
   - Simplifies debugging by isolating failures.

> **单元测试框架 (例如 Jest, Mocha, Jasmine)**  
>
> <audio src="..\..\mp3\定义：  单元测试框架用于独立.mp3"></audio>
>
> 1. **定义**：  
>    - 单元测试框架用于独立测试代码的单个部分（函数、组件）。  
>    - 常用框架包括 **Jest**、**Mocha** 和 **Jasmine**。  
> 2. **功能**：  
>    - **Jest**：简单配置，内置模拟和快照测试。  
>    - **Mocha**：灵活支持多种断言库（如 Chai）。  
>    - **Jasmine**：行为驱动测试，内置断言库。  
> 3. **优点**：  
>    - 确保代码正确性。  
>    - 通过隔离故障简化调试。

---

### Code Examples:

#### **Jest Example**
```javascript
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3); // Assertion
});
```
Run with: `npx jest`.

#### **Mocha + Chai Example**
```javascript
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// test/sum.test.js
const { expect } = require("chai");
const sum = require("../sum");

describe("sum", () => {
  it("should add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).to.equal(3); // Assertion
  });
});
```
Run with: `npx mocha`.

#### **Jasmine Example**
```javascript
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.spec.js
const sum = require("./sum");

describe("sum", () => {
  it("should add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3); // Assertion
  });
});
```
Run with: `jasmine`.

---

### Key Notes:
1. **Jest** is best for React and modern JS apps with minimal setup.  
2. **Mocha** is highly flexible, often paired with **Chai** for assertions.  
3. **Jasmine** is behavior-driven and requires no extra libraries.  
4. Unit testing promotes reliable code and easier debugging.