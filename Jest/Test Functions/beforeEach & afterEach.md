### beforeEach & afterEach

- **`beforeEach()`**: Runs a setup function before each test in the current test suite, useful for initializing or resetting conditions.

- **`afterEach()`**: Runs a cleanup function after each test, ideal for tasks like releasing resources.

- <audio src="..\..\mp3/- __`beforeEach.mp3"></audio>

> **`beforeEach()`**：在每个测试之前运行一个设置函数，常用于初始化或重置条件。
> **`afterEach()`**：在每个测试之后运行一个清理函数，适用于释放资源等操作。
>
> <audio src="..\..\mp3/`beforeEach()`：.mp3"></audio>

```js
let counter = 0;

// Runs before each test
beforeEach(() => {
  counter = 0;  // Reset counter before each test
});

// Runs after each test
afterEach(() => {
  console.log('Test finished');  // Log message after each test
});

test('increments counter to 1', () => {
  counter += 1;
  expect(counter).toBe(1);  // Check if counter is incremented
});

test('increments counter to 2', () => {
  counter += 2;
  expect(counter).toBe(2);  // Check if counter is incremented by 2
});
```

<audio src="..\..\mp3/这段代码使用了 Jest 的钩.mp3"></audio>

In this example, `beforeEach()` resets the counter before every test, and `afterEach()` logs a message after each test.