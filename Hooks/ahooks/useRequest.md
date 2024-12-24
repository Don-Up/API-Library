# useRequest

The `useRequest` hook is a powerful utility for managing asynchronous requests with features like loading states, retries, polling, and more.

---

### 1. **Install ahooks**

First, install the **ahooks** library in your project:

```bash
npm install ahooks
```

---

### 2. **Basic Usage of `useRequest`**

The `useRequest` hook simplifies making API calls by providing states like `loading`, `data`, and `error`.

<audio src="../../../../../Downloads/2024年12月24日10点16分.mp3"></audio>

```jsx
import React from "react";
import { useRequest } from "ahooks";

const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
};

const BasicUseRequest = () => {
  const { data, error, loading } = useRequest(fetchUser);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>User Info</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default BasicUseRequest;
```

---

### Explanation of the Code:

1. **Key States**:
   - `loading`: True while the request is in progress.
   - `data`: The response data.
   - `error`: The error object if the request fails.

2. **Simplified API Call**:
   - Pass the `fetchUser` function to `useRequest`, which handles the request lifecycle automatically.

---

### 3. **Manual Trigger Mode**

In manual mode, the request is triggered explicitly, giving you more control.

<audio src="../../../../../Downloads/2024年12月24日10点30分.mp3"></audio>

```jsx
import React from "react";
import { useRequest } from "ahooks";

const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
};

const ManualUseRequest = () => {
  const { data, loading, run } = useRequest(fetchUser, {
    manual: true, // Request will not run automatically
    onSuccess: (data) => {},
    onError:() => {},
    onFinally:() => {},
    onBe
  });

  return (
    <div>
      <button onClick={run} disabled={loading}>
        {loading ? "Loading..." : "Fetch User"}
      </button>
      {data && (
        <div>
          <h3>User Info</h3>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
};

export default ManualUseRequest;
```

---

### Explanation of the Code:

1. **Manual Trigger**:
   - The `manual: true` option ensures the request is not executed automatically.

2. **`run` Function**:
   - The `run` function is used to trigger the request manually.

---

### 4. **Polling**

You can use `useRequest` for polling by enabling the `pollingInterval` option.

```jsx
import React from "react";
import { useRequest } from "ahooks";

const fetchTime = async () => {
  const response = await fetch("https://worldtimeapi.org/api/ip");
  return response.json();
};

const PollingExample = () => {
  const { data, loading } = useRequest(fetchTime, {
    pollingInterval: 5000, // Poll every 5 seconds
  });

  return (
    <div>
      <h3>Current Time</h3>
      {loading ? <p>Loading...</p> : <p>{data ? data.datetime : "No data"}</p>}
    </div>
  );
};

export default PollingExample;
```

---

### Explanation of the Code:

1. **Polling**:
   - The `pollingInterval` option specifies the interval (in milliseconds) for repeated requests.

2. **Automatic Updates**:
   - The data is automatically refreshed every 5 seconds.

---

### 5. **Debounce and Throttle**

Debounce and throttle can be applied to requests for better control over frequent calls.

#### Debounce Example:

```jsx
import React, { useState } from "react";
import { useRequest } from "ahooks";

const searchUser = async (query) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?name_like=${query}`
  );
  return response.json();
};

const DebounceExample = () => {
  const [query, setQuery] = useState("");
  const { data, loading } = useRequest(() => searchUser(query), {
    debounceWait: 500, // Debounce the request by 500ms
  });

  return (
    <div>
      <input
        placeholder="Search user"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data &&
            data.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DebounceExample;
```

---

#### Throttle Example:

```jsx
import React, { useState } from "react";
import { useRequest } from "ahooks";

const searchUser = async (query) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?name_like=${query}`
  );
  return response.json();
};

const ThrottleExample = () => {
  const [query, setQuery] = useState("");
  const { data, loading } = useRequest(() => searchUser(query), {
    throttleWait: 1000, // Throttle the request by 1 second
  });

  return (
    <div>
      <input
        placeholder="Search user"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data &&
            data.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ThrottleExample;
```

---

### Explanation of the Code:

1. **Debounce**:
   - The `debounceWait` option delays the execution of the request until the user stops typing for the specified time (500ms in this example).

2. **Throttle**:
   - The `throttleWait` option ensures the request is triggered at most once every specified interval (1 second in this example).

---

### 6. **Retry on Failure**

You can automatically retry failed requests using the `retryCount` and `retryInterval` options.

```jsx
import React from "react";
import { useRequest } from "ahooks";

const fetchWithError = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/fake-endpoint");
  if (!response.ok) {
    throw new Error("Failed to fetch!");
  }
  return response.json();
};

const RetryExample = () => {
  const { data, error, loading } = useRequest(fetchWithError, {
    retryCount: 3, // Retry up to 3 times
    retryInterval: 2000, // Wait 2 seconds between retries
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default RetryExample;
```

---

### Explanation of the Code:

1. **Retry Logic**:
   - Automatically retries the request up to `retryCount` times if it fails.
   - The `retryInterval` specifies the delay between retries.

---

### Summary of Features:

1. **Basic Usage**: Automatically handles loading, success, and error states.
2. **Manual Trigger**: Allows explicit control over when the request is executed.
3. **Polling**: Automatically refreshes data at a specified interval.
4. **Debounce/Throttle**: Controls the frequency of requests for better performance.
5. **Retry**: Handles failed requests with retries and intervals.

The `useRequest` hook from ahooks is highly flexible and simplifies many complex asynchronous operations in React applications.