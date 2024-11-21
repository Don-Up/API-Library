### expect(value).toMatchSnapshot()

- **`expect(value).toMatchSnapshot()`**: Captures a snapshot of the given value and compares it to a stored snapshot from a previous run. If the two don’t match, the test will fail.

> **`expect(value).toMatchSnapshot()`**：捕获给定值的快照，并与之前运行时存储的快照进行比较。如果不匹配，测试将失败。

```js
test('matches the snapshot', () => {
  const user = { name: 'Alice', age: 25 };

  expect(user).toMatchSnapshot();  // Captures and compares the snapshot of the object
});
```

`expect(value).toMatchSnapshot()` is useful for ensuring consistent output over time, especially for testing UI components or complex objects.