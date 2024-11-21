Here’s a comprehensive list of APIs provided by **React Testing Library (RTL)**:

### 1. **Render Functions**

- **`render()`**
  - Renders a React component into a container and returns utility methods to interact with it.
  
  ```js
  const { getByText } = render(<Component />);
  ```

### 2. **Query Functions**

**Queries are used to find elements in the rendered component. They come in three variants:**

- **get**: Throws an error if no element is found or if more than one element is found.
- **find**: Returns a promise and waits for the element to appear (useful for async elements).
- **query**: Returns `null` if no element is found, without throwing an error.

#### By Role

- **`getByRole()`** / **`queryByRole()`** / **`findByRole()`**
  - Finds elements by their ARIA role.
  
  ```js
  const button = getByRole('button');
  ```

#### By Text

- **`getByText()`** / **`queryByText()`** / **`findByText()`**
  - Finds elements by their visible text content.

  ```js
  const element = getByText('Submit');
  ```

#### By Label Text

- **`getByLabelText()`** / **`queryByLabelText()`** / **`findByLabelText()`**
  - Finds form elements by associated label text.

  ```js
  const input = getByLabelText('Username');
  ```

#### By Placeholder Text

- **`getByPlaceholderText()`** / **`queryByPlaceholderText()`** / **`findByPlaceholderText()`**
  - Finds elements by the placeholder text.

  ```js
  const input = getByPlaceholderText('Enter your name');
  ```

#### By Alt Text

- **`getByAltText()`** / **`queryByAltText()`** / **`findByAltText()`**
  - Finds elements (typically images) by their `alt` text.

  ```js
  const img = getByAltText('Profile picture');
  ```

#### By Title

- **`getByTitle()`** / **`queryByTitle()`** / **`findByTitle()`**
  - Finds elements by their `title` attribute.

  ```js
  const element = getByTitle('Tooltip text');
  ```

#### By Display Value

- **`getByDisplayValue()`** / **`queryByDisplayValue()`** / **`findByDisplayValue()`**
  - Finds form elements by their current value.

  ```js
  const input = getByDisplayValue('John Doe');
  ```

#### By Test ID

- **`getByTestId()`** / **`queryByTestId()`** / **`findByTestId()`**
  - Finds elements by their `data-testid` attribute.

  ```js
  const element = getByTestId('submit-button');
  ```

#### By Selectors (All variants)

- **`getAllBy...()`** / **`queryAllBy...()`** / **`findAllBy...()`**
  - Similar to the singular versions, but they return arrays of elements instead of a single element.

  ```js
  const buttons = getAllByRole('button');
  ```

### 3. **Event Functions**

- **`fireEvent()`**
  - Simulates DOM events such as clicking, typing, etc.
  
  ```js
  fireEvent.click(button);
  fireEvent.change(input, { target: { value: 'John' } });
  ```

- **`userEvent`** (from `@testing-library/user-event`)
  - A more user-centric way to simulate events, mimicking real user interactions better than `fireEvent`.

  ```js
  userEvent.click(button);
  userEvent.type(input, 'Hello');
  ```

### 4. **Async Utilities**

- **`wait()`** (deprecated, replaced by `waitFor`)
  - Waits for a condition to be true.
  
- **`waitFor()`**
  - Waits for an assertion to pass or for changes in the DOM.

  ```js
  await waitFor(() => expect(mockFunc).toHaveBeenCalled());
  ```

- **`waitForElementToBeRemoved()`**
  - Waits for an element to be removed from the DOM, useful for testing transitions or loading states.

  ```js
  await waitForElementToBeRemoved(() => getByText('Loading...'));
  ```

### 5. **Utility Functions**

- **`screen`**
  - A global object that can be used to access all query functions like `getByText`, `findByRole`, etc., without destructuring them from `render()`.
  
  ```js
  render(<Component />);
  screen.getByText('Submit');
  ```

- **`within()`**
  - Provides scoped queries for a specific element, allowing you to search within that element only.

  ```js
  const section = getByRole('region');
  const { getByText } = within(section);
  ```

- **`cleanup()`**
  - Unmounts React components between tests to prevent side effects.
  
  ```js
  afterEach(() => cleanup());
  ```

- **`act()`**
  - Wraps code that triggers updates to ensure all updates are processed before assertions.
  
  ```js
  act(() => {
    fireEvent.click(button);
  });
  ```

### 6. **Custom Matchers (from `jest-dom`)**

- **`.toBeInTheDocument()`**
  - Asserts that an element is present in the DOM.

  ```js
  expect(button).toBeInTheDocument();
  ```

- **`.toBeVisible()`**
  - Asserts that an element is visible.

  ```js
  expect(element).toBeVisible();
  ```

- **`.toHaveTextContent()`**
  - Asserts that an element contains specific text.

  ```js
  expect(element).toHaveTextContent('Submit');
  ```

- **`.toHaveAttribute()`**
  - Asserts that an element has a specific attribute.

  ```js
  expect(button).toHaveAttribute('type', 'submit');
  ```

- **`.toHaveClass()`**
  - Asserts that an element has a specific CSS class.

  ```js
  expect(button).toHaveClass('primary');
  ```

- **`.toBeDisabled()` / `.toBeEnabled()`**
  - Asserts that an element is disabled or enabled.

  ```js
  expect(button).toBeDisabled();
  ```

- **`.toBeChecked()`**
  - Asserts that a checkbox or radio button is checked.

  ```js
  expect(checkbox).toBeChecked();
  ```

- **`.toBeEmptyDOMElement()`**
  - Asserts that an element has no child nodes.

  ```js
  expect(div).toBeEmptyDOMElement();
  ```

- **`.toHaveFocus()`**
  - Asserts that an element has focus.

  ```js
  expect(input).toHaveFocus();
  ```

- **`.toHaveValue()`**
  - Asserts that an input element has a specific value.

  ```js
  expect(input).toHaveValue('John');
  ```

### 7. **Debugging Utilities**

- **`debug()`**
  - Outputs the current DOM tree for debugging purposes.

  ```js
  const { debug } = render(<Component />);
  debug();  // Logs the current DOM structure
  ```

- **`logRoles()`**
  - Outputs all the ARIA roles in the rendered component, useful for debugging accessibility.

  ```js
  import { logRoles } from '@testing-library/dom';
  logRoles(container);
  ```

### 8. **Custom Hook Testing (via `@testing-library/react-hooks`)**
- **`renderHook()`**
  - Renders a custom React hook in isolation for testing.

  ```js
  import { renderHook } from '@testing-library/react-hooks';
  const { result } = renderHook(() => useCustomHook());
  ```

---

### Summary of API Categories:

1. **Render Functions**: `render()`
2. **Query Functions**: `getBy...`, `queryBy...`, `findBy...`, `getAllBy...`, etc.
3. **Event Functions**: `fireEvent`, `userEvent`
4. **Async Utilities**: `waitFor()`, `waitForElementToBeRemoved()`
5. **Utility Functions**: `screen`, `within()`, `cleanup()`, `act()`
6. **Custom Matchers**: `toBeInTheDocument()`, `toHaveTextContent()`, etc.
7. **Debugging Utilities**: `debug()`, `logRoles()`
8. **Custom Hook Testing**: `renderHook()`

This covers the main APIs provided by **React Testing Library**, enabling efficient and user-centric testing of React components.