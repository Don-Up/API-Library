```ts
export type ResType = {
    errno: number
    data?: ResDataType
    msg?: string
}

export type ResDataType = {
    // 是一种**索引签名**，用于定义一个对象类型，其中键是字符串，值可以是任意类型。
    // 这种声明非常灵活，适合处理键值对结构，而键的名称和数量在编译时无法确定的情况。
    [key: string]: any
}
```