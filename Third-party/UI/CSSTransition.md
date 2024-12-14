## CSSTransition

### Installation

```bash
npm i react-transition-group
```

### Search Box Transition

```jsx
const [isFocused, setIsFocused] = useState(false);

<CSSTransition
    in={isFocused}
    timeout={300}
    classNames={{
        enter: styles.searchEnter,
        enterActive: styles.searchEnterActive,
        exit: styles.searchExit,
        exitActive: styles.searchExitActive,
    }}
>
    <Input
        placeholder="搜索"
        prefix={<SearchOutlined />}
        className="rounded-full"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ width: isFocused ? "20rem" : "10re m" }}
    />
</CSSTransition>
```

#### Attribute Explanation

<audio src="..\..\mp3\三个关键属性是 in、time.mp3"></audio>

#### Code Explanation

<audio src="..\..\mp3\这段代码中的 CSSTrans.mp3"></audio>