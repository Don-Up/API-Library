### expect(value).toMatchInlineSnapshot()

- **`expect(value).toMatchInlineSnapshot()`**: Compares the given value to an inline snapshot directly written in the test file. If no snapshot exists, Jest will automatically insert it into the test.

> **`expect(value).toMatchInlineSnapshot()`**：将给定的值与测试文件中的内联快照进行比较。如果没有快照，Jest 会自动将其插入测试中。

```js
test('matches inline snapshot', () => {
  const user = { name: 'Alice', age: 25 };

  expect(user).toMatchInlineSnapshot(`
    Object {
      "age": 25,
      "name": "Alice",
    }
  `);  // Jest inserts or compares this inline snapshot
});
```

`expect(value).toMatchInlineSnapshot()` is useful for keeping snapshots directly within test files, making them easier to review and maintain.