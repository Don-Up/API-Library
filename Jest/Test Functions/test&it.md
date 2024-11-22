### Test&It

- **`test()`**: Defines a test case with a description and a function containing the test logic.

- **`it()`**: Alias for `test()`, used for the same purpose. Some prefer `it()` for readability, especially when describing behavior.

- <audio src="../../../../Downloads/-  `test ` _ De.mp3"></audio>

> - **`test()`**：定义一个测试用例，包含描述和测试逻辑的函数。
>
> - **`it()`**：是 `test()` 的别名，用途相同。某些开发者更喜欢用 `it()` 来增强可读性，特别是在描述行为时。
>
> - <audio src="../../../../Downloads/- `test()`：定义一个.mp3"></audio>

```js
// Using `test` to define a test case
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);  // Assertion to check if the result is 3
});

// Using `it` to define the same test case (interchangeable with `test`)
it('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);  // Same assertion
});
```

<audio src="../../../../Downloads/这段代码展示了在 Jest 中.mp3"></audio>

Both `test()` and `it()` are interchangeable, and it's up to preference which to use.