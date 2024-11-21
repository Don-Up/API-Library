Jest provides a rich set of APIs that allow developers to write and organize tests, mock dependencies, and inspect function calls and behaviors. Below is a **comprehensive list** of Jest’s core APIs, categorized for easier understanding.

### 1. **Test Functions**

These are used to define and organize test cases.

- **`test(name, fn, timeout)`**: Defines a test case with a description (`name`) and a function (`fn`) containing the test logic.
  
- **`it(name, fn, timeout)`**: Alias for `test`. You can use `it()` interchangeably with `test()`.

- **`describe(name, fn)`**: Groups related tests together in a block. This is useful for organizing tests and making test output more readable.

- **`beforeEach(fn, timeout)`**: Runs the `fn` function before each test in the current block (or globally if no block).

- **`afterEach(fn, timeout)`**: Runs the `fn` function after each test in the current block (or globally if no block).

- **`beforeAll(fn, timeout)`**: Runs the `fn` function once before any tests in the current block.

- **`afterAll(fn, timeout)`**: Runs the `fn` function once after all tests in the current block.

### 2. **Assertions (Matchers)**

These APIs are used to assert that certain conditions are true during a test. Jest extends the basic `expect` functionality with a wide range of matchers.

- **`expect(value)`**: The main assertion function that returns a matcher object to test the `value`.

#### Common Matchers:

- **`.toBe(value)`**: Checks if `value` is exactly equal (using `===`).
- **`.toEqual(value)`**: Checks if `value` is deeply equal (use for objects/arrays).
- **`.toBeNull()`**: Checks if a value is `null`.
- **`.toBeUndefined()`**: Checks if a value is `undefined`.
- **`.toBeDefined()`**: Checks if a value is not `undefined`.
- **`.toBeTruthy()`**: Checks if a value is truthy.
- **`.toBeFalsy()`**: Checks if a value is falsy.
- **`.toBeGreaterThan(value)`**: Checks if a value is greater than the specified value.
- **`.toBeGreaterThanOrEqual(value)`**: Checks if a value is greater than or equal to the specified value.
- **`.toBeLessThan(value)`**: Checks if a value is less than the specified value.
- **`.toBeLessThanOrEqual(value)`**: Checks if a value is less than or equal to the specified value.
- **`.toMatch(regexp)`**: Checks if a string matches a regular expression.
- **`.toContain(value)`**: Checks if an array or string contains a value.
- **`.toHaveLength(number)`**: Asserts the length of an array or string.
- **`.toHaveProperty(keyPath, value?)`**: Checks if an object has a certain property.
- **`.toBeInstanceOf(class)`**: Checks if an object is an instance of a class.

#### Handling Asynchronous Code:

- **`.resolves`**: Used to unwrap a resolved promise. Example: `expect(Promise.resolve('foo')).resolves.toBe('foo')`.
- **`.rejects`**: Used to unwrap a rejected promise. Example: `expect(Promise.reject('error')).rejects.toBe('error')`.
- **`.toThrow(error?)`**: Verifies if a function throws an error. You can check for specific error types or messages.

#### Jest DOM (for testing DOM elements):

- **`.toBeInTheDocument()`**: Checks if an element is present in the document.
- **`.toHaveClass(className)`**: Checks if an element has a certain class.
- **`.toHaveTextContent(text)`**: Checks if an element contains specific text.
- **`.toHaveAttribute(attr, value?)`**: Checks if an element has a specific attribute.

### 3. **Mock Functions**

Jest provides APIs to create mock functions that allow you to test how your code interacts with external dependencies.

- **`jest.fn(implementation?)`**: Creates a new mock function. You can pass in an optional implementation.
  
- **`jest.spyOn(object, methodName)`**: Creates a mock function for an existing method on an object, allowing you to spy on calls and modify behavior.
  
- **`mockFn.mock.calls`**: An array containing the arguments for each call to the mock function.
  
- **`mockFn.mock.results`**: An array containing the results of each call to the mock function.
  
- **`mockFn.mockReturnValue(value)`**: Set a specific return value for the mock function.
  
- **`mockFn.mockResolvedValue(value)`**: Set a promise that resolves with a specific value for the mock function.
  
- **`mockFn.mockRejectedValue(value)`**: Set a promise that rejects with a specific value for the mock function.
  
- **`mockFn.mockImplementation(fn)`**: Set a custom implementation for the mock function.
  
- **`mockFn.mockClear()`**: Clears information about mock calls and results.
  
- **`mockFn.mockReset()`**: Clears mock calls, results, and implementation.
  
- **`mockFn.mockRestore()`**: Restores the original implementation of the mocked function (used with `jest.spyOn`).

### 4. **Timers**

Jest provides control over functions that deal with time, such as `setTimeout`, `setInterval`, and `Date.now()`.

- **`jest.useFakeTimers()`**: Switches to using fake timers, allowing you to control the passage of time manually.
  
- **`jest.runAllTimers()`**: Executes all pending timers.
  
- **`jest.advanceTimersByTime(msToRun)`**: Advances all timers by a specified amount of time.
  
- **`jest.runOnlyPendingTimers()`**: Runs only the timers that are currently pending.
  
- **`jest.clearAllTimers()`**: Clears all timers.
  
- **`jest.useRealTimers()`**: Switches back to using real timers after using fake timers.

### 5. **Mocking Modules**

Jest allows you to mock entire modules or specific exports from a module.

- **`jest.mock(moduleName, factory?, options?)`**: Mocks a module by replacing all of its exports with mock functions. You can provide a `factory` function to customize the mock implementation.

- **`jest.requireActual(moduleName)`**: Imports the actual module instead of the mocked version (useful inside `jest.mock`).
  
- **`jest.requireMock(moduleName)`**: Imports the mocked version of a module (useful when the actual module is imported elsewhere).
  
- **`jest.unmock(moduleName)`**: Removes the mocked version and returns to the original module.

- **`jest.isMockFunction(fn)`**: Returns `true` if the given function is a mock function.

### 6. **Snapshot Testing**

Snapshot testing captures the output of a function or component and compares it to a stored snapshot to ensure that the output doesn't change unexpectedly.

- **`expect(value).toMatchSnapshot()`**: Captures the current output and compares it to a stored snapshot. If the snapshot doesn't exist, it creates one.
  
- **`expect(value).toMatchInlineSnapshot()`**: Similar to `toMatchSnapshot()` but stores the snapshot directly in the test file.
  
- **`expect(value).toThrowErrorMatchingSnapshot()`**: Expects a function to throw an error that matches a stored snapshot.

### 7. **Global Setup and Teardown**

Jest allows you to run global setup and teardown logic before and after all tests.

- **`jest.setup.js`**: A file where you can place global setup logic for Jest.
  
- **`globalSetup`**: A configuration option in Jest for specifying a module that runs before all tests.
  
- **`globalTeardown`**: A configuration option in Jest for specifying a module that runs after all tests.

### 8. **Jest CLI Options**

Jest provides several CLI options to configure how tests are run.

- **`jest`**: Run all tests.
  
- **`jest --watch`**: Run tests in watch mode (reruns tests on file changes).
  
- **`jest --coverage`**: Generates a code coverage report.
  
- **`jest --runInBand`**: Runs tests serially instead of in parallel (useful for debugging).
  
- **`jest --testNamePattern "pattern"`**: Runs only tests whose name matches the pattern.
  
- **`jest --testPathPattern "pattern"`**: Runs only tests whose file path matches the pattern.

### 9. **Environment Control**

Jest provides options to configure the environment in which tests run.

- **`jest.setTimeout(ms)`**: Sets the default timeout for all tests and hooks.
  
- **`jest.retryTimes(count)`**: Retries failed tests a specified number of times.

- **`jest.isolateModules(fn)`**: Isolates modules for a specific test, preventing module caching between tests.

### 10. **Mocking Fetch & Other Globals**

Jest allows you to mock global objects like `fetch`, `window`, or `document`.

- **`global.fetch`**: You can mock `fetch` globally to simulate API responses in tests.

- **Global Mocks**: Jest provides a `__mocks__` directory where you can define mock implementations of modules. When `jest.mock()` is called, it automatically looks for a mock in that directory.

### 11. **Custom Matchers**

You can define your own custom matchers in Jest.

- **`expect.extend(matchers)`**: Adds your custom matchers to Jest’s `expect` API.

### 12. **Other Utility Functions**

- **`jest.clearAllMocks()`**: Clears all mocks created during tests.
  
- **`jest.resetAllMocks()`**: Resets all mocks to their original implementations.
  
- **`jest.restoreAllMocks()`**: Restores all mocks to their original implementations after being spied on or mocked.

- **`jest.setMock(moduleName, mockImplementation)`**: Sets the mock implementation for a module.

### Conclusion

This comprehensive list covers the core Jest APIs that you would use regularly when writing tests. Jest’s flexibility comes from its ability to mock functions, test asynchronous code, manage timers, and allow for snapshot testing, making it a powerful tool for testing JavaScript and React applications.