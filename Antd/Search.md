### 1. **Install Ant Design**

First, ensure you have Ant Design installed in your project:

```bash
npm install antd
```

---

### 2. **Basic Search Component**

The `Input.Search` component from Antd is specifically designed for search functionality.

<audio src="../../../../Downloads/2024年12月24日07点54分.mp3"></audio>

```jsx
import React from "react";
import { Input } from "antd";

const { Search } = Input;

const BasicSearch = () => {
  const onSearch = (value) => {
    console.log("Search Value:", value);
  };

  return (
    <Search
      placeholder="Enter search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
};

export default BasicSearch;
```

---

### Explanation of the Code:

1. **Key Props**:
   - `placeholder`: Placeholder text shown in the input field.
   - `allowClear`: Adds a clear button to reset the input.
   - `enterButton`: Displays a button next to the input with a label (e.g., "Search").
   - `size`: Controls the size of the input (`small`, `default`, or `large`).
   - `onSearch`: Callback function triggered when the search button is clicked or the Enter key is pressed.

---

### 3. **Search with Filtered Data**

Here’s an example of how to use Antd Search to filter a list of items.

<audio src="../../../../Downloads/2024年12月24日08点05分.mp3"></audio>

```jsx
import React, { useState } from "react";
import { Input, List } from "antd";

const { Search } = Input;

// 1, 定义组件 SearchWithFilter
const SearchWithFilter = () => {
  // 2, 使用状态管理搜索词
  const [searchTerm, setSearchTerm] = useState("");

  // 3, 定义初始数据
  const data = ["React", "Angular", "Vue", "Svelte", "Ant Design", "Bootstrap"];

  // 4, 实现过滤逻辑
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase()) // 忽略大小写进行过滤
  );

  // 5, 定义搜索行为
  const onSearch = (value) => {
    setSearchTerm(value); // 更新搜索关键词
  };

  // 6, 渲染搜索框和过滤后的列表
  return (
    <div>
      {/* 渲染搜索框 */}
      <Search
        placeholder="Search frameworks" // 占位文本
        allowClear // 允许清空输入框
        enterButton="Search" // 按钮文本
        size="large" // 设置输入框大小
        onSearch={onSearch} // 绑定搜索事件
      />
      {/* 7, 渲染过滤后的列表 */}
      <List
        style={{ marginTop: "20px" }} // 列表的样式
        bordered // 添加边框
        dataSource={filteredData} // 绑定过滤后的数据
        renderItem={(item) => <List.Item>{item}</List.Item>} // 渲染每个列表项
      />
    </div>
  );
};

export default SearchWithFilter; // 导出组件
```

---

### Explanation of the Code:

1. **State Management**:
   - `useState` is used to store the current search term (`searchTerm`).

2. **Filtering Logic**:
   - The `data` array is filtered using the `searchTerm`. Case-insensitive matching is done using `toLowerCase()`.

3. **Antd Components**:
   - **Search**: Captures the input and triggers the `onSearch` callback.
   - **List**: Displays the filtered results dynamically.

---

### 4. **Search with API Calls**

Here’s an example of using the `Search` component to fetch data from an API based on the search term.

<audio src="../../../../Downloads/2024年12月24日08点12分.mp3"></audio>

```jsx
import React, { useState } from "react";
import { Input, List, Spin } from "antd";

const { Search } = Input;

// 1, 定义组件 SearchWithAPI
const SearchWithAPI = () => {
  // 2, 使用状态管理加载状态和搜索结果
  const [loading, setLoading] = useState(false); // 表示是否正在加载
  const [results, setResults] = useState([]); // 存储从 API 获取的搜索结果

  // 3, 定义搜索行为
  const onSearch = async (value) => {
    setLoading(true); // 开始加载数据

    try {
      // 4, 实现 API 数据请求
      const response = await fetch(`https://api.example.com/search?q=${value}`); // 模拟 API 调用
      const data = await response.json(); // 解析 JSON 响应
      setResults(data.results); // 将结果存储到状态中
    } catch (error) {
      console.error("Error fetching data:", error); // 捕获并记录错误
    } finally {
      setLoading(false); // 无论成功或失败，加载结束
    }
  };

  return (
    <div>
      {/* 5, 渲染搜索框 */}
      <Search
        placeholder="Search from API" // 占位文本
        allowClear // 允许清空输入框
        enterButton="Search" // 按钮文本
        size="large" // 设置输入框大小
        onSearch={onSearch} // 绑定搜索事件
      />

      {/* 6, 渲染加载状态或搜索结果 */}
      {loading ? (
        <Spin style={{ marginTop: "20px" }} /> // 显示加载指示器
      ) : (
        <List
          style={{ marginTop: "20px" }} // 列表样式
          bordered // 添加边框
          dataSource={results} // 绑定搜索结果
          renderItem={(item) => <List.Item>{item.name}</List.Item>} // 渲染每个列表项
        />
      )}
    </div>
  );
};

export default SearchWithAPI; // 导出组件
```

---

### Explanation of the Code:

1. **API Integration**:
   - The `fetch` function simulates an API call with the search term as a query parameter (`q`).

2. **Loading State**:
   - A loading spinner (`Spin` from Antd) is displayed while waiting for the API response.

3. **Dynamic Results**:
   - The `results` state stores the API response and is rendered using the Antd `List` component.

---

### 5. **Customizing Search Styles**

You can easily customize the `Search` component with styles or classes:

<audio src="../../../../Downloads/2024年12月24日08点15分.mp3"></audio>

```jsx
<Search
  placeholder="Custom Styled Search"
  allowClear
  enterButton={<button style={{ backgroundColor: "blue", color: "white" }}>Go</button>}
  size="large"
  onSearch={(value) => console.log(value)}
  style={{ width: "400px", margin: "20px auto", display: "block" }}
/>
```

---

### Summary of Features:

1. **Basic Usage**: Simple search input with customizable placeholder and button.
2. **Filtering**: Dynamically filter data based on search input.
3. **API Integration**: Trigger API calls and display results.
4. **Styling**: Easily customize the `Search` component's style and appearance.

Antd's `Input.Search` component is highly flexible and can be used for both client-side and server-side search functionality.