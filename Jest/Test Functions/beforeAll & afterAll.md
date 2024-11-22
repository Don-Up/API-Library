### beforeAll & afterAll

- **`beforeAll()`**: Runs a setup function once before all tests in a test suite. Ideal for initializing shared resources.

- **`afterAll()`**: Runs a cleanup function once after all tests, useful for resource cleanup like database disconnection.

- <audio src="../../../../Downloads/- __`beforeAll(.mp3"></audio>

> **`beforeAll()`**：在所有测试之前运行一次初始化函数，适合初始化共享资源。
> **`afterAll()`**：在所有测试之后运行一次清理函数，适合释放资源，如断开数据库连接。
>
> <audio src="../../../../Downloads/`beforeAll()`：在.mp3"></audio>

```js
let dbConnection;

// Runs once before all tests
beforeAll(() => {
  dbConnection = 'Connected';  // Simulate connecting to a database
});

// Runs once after all tests
afterAll(() => {
  dbConnection = 'Disconnected';  // Simulate disconnecting from a database
});

test('checks database connection', () => {
  expect(dbConnection).toBe('Connected');  // Check if connected
});

test('more database interactions', () => {
  expect(dbConnection).toBe('Connected');  // Still connected during tests
});
```

<audio src="../../../../Downloads/这段代码展示了如何使用 Jes (3).mp3"></audio>

In this example, `beforeAll()` sets up a shared resource (a simulated database connection), and `afterAll()` cleans it up after all tests.