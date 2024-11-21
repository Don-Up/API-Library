### expect().resolves()

- **`expect().resolves`**: Used to unwrap and assert the resolved value of a promise. It allows chaining matchers to check the promise's result.

> **`expect().resolves`**：用于解包并断言 promise 的解析值，可链式调用匹配器来检查 promise 的结果。

```js
test('checks resolved promise value', async () => {
  const promise = Promise.resolve('Success');
  
  await expect(promise).resolves.toBe('Success');  // Passes: promise resolves to 'Success'
});
```

`expect().resolves` is ideal for testing promises and ensures the promise resolves successfully with an expected value.