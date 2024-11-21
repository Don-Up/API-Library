### Describe

- **`describe()`**: Groups related tests together in a test suite. It helps in organizing tests logically and scoping setup/teardown functions like `beforeEach`, `afterEach`, etc.

> **`describe()`**：将相关的测试用例分组到一个测试套件中，有助于逻辑组织测试，并为每个测试定义前置/后置的钩子函数。

```js
// Grouping tests using `describe`
describe('Math operations', () => {
  
  // A test for addition
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);  // Checks if sum is 3
  });

  // A test for subtraction
  test('subtracts 5 - 2 to equal 3', () => {
    expect(5 - 2).toBe(3);  // Checks if difference is 3
  });
});
```

Using `describe()` helps to logically organize related tests.