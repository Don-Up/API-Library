### expect().rejects()

- **`expect().rejects`**: Used to unwrap and assert the rejected value of a promise. It allows chaining matchers to check the error or rejection reason.

> **`expect().rejects`**：用于解包并断言 promise 的拒绝值，可链式调用匹配器来检查错误或拒绝原因。

```js
test('checks rejected promise', async () => {
  const promise = Promise.reject('Error');
  
  await expect(promise).rejects.toBe('Error');  // Passes: promise rejects with 'Error'
});
```

`expect().rejects` is useful for testing promises that are expected to fail, ensuring they reject with the correct error or reason.