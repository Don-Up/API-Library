### Flex Wrap in TailwindCSS

- **Flex Wrap**: TailwindCSS provides utilities to control whether flex items wrap to the next line when they exceed the container's width. The `flex-wrap` property manages this behavior:
  - **`flex-wrap`**: Wraps items to the next line when necessary.
  - **`flex-wrap-reverse`**: Wraps items in reverse order.
  - **`flex-nowrap`**: Prevents items from wrapping (default behavior).

> **Flex Wrap**：TailwindCSS 提供了控制弹性盒子项目是否在超出容器宽度时换行的工具类。`flex-wrap` 属性管理这一行为：
> - **`flex-wrap`**：必要时将项目换行。
> - **`flex-wrap-reverse`**：反向换行。
> - **`flex-nowrap`**：阻止项目换行（默认）。

#### Example:

![image-20241119091330761](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119091330761.png)

```html
<div class="flex flex-wrap bg-gray-200">
  <div class="p-4 bg-blue-500 w-1/3">Item 1</div>
  <div class="p-4 bg-green-500 w-1/3">Item 2</div>
  <div class="p-4 bg-red-500 w-1/3">Item 3</div>
  <div class="p-4 bg-yellow-500 w-1/3">Item 4</div>
</div>
```

In this example, `flex-wrap` allows items to wrap if they exceed the container's width, placing excess items on the next line.