### mockFn.mockRestore()

- **`mockFn.mockRestore()`**: Restores the original implementation of a mocked function, typically used with `jest.spyOn()`. It resets the function to its initial behavior before being mocked.

- <audio src="C:\Users\10691\Downloads\__`mockFn.mockR (3).mp3"></audio>

> **`mockFn.mockRestore()`**：恢复被模拟函数的原始实现，通常与 `jest.spyOn()` 一起使用，将函数恢复到被模拟前的行为。
>
> <audio src="C:\Users\10691\Downloads\`mockFn.mockRes (4).mp3"></audio>

```js
const myObj = {
  greet: () => 'Hello, World!',
};

test('spy on and restore original function', () => {
  const spy = jest.spyOn(myObj, 'greet').mockImplementation(() => 'Hi!');
  
  expect(myObj.greet()).toBe('Hi!');  // Passes: mock implementation returns 'Hi!'
  
  spy.mockRestore();  // Restore original implementation
  
  expect(myObj.greet()).toBe('Hello, World!');  // Passes: original function returns 'Hello, World!'
});
```

<audio src="C:\Users\10691\Downloads\这段代码展示了如何使用 Jes.mp3"></audio>

`mockFn.mockRestore()` is useful for reverting a spied-on or mocked function back to its original implementation after a test.

<audio src="C:\Users\10691\Downloads\`mockFn.mockRes (5).mp3"></audio>