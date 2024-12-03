### Stylus  

**Stylus** is a CSS preprocessor that provides a highly flexible, minimalistic syntax for writing CSS.  

1. **Features**:  
   - **Variables**: `$primary = #3498db`.  
   - **Nesting**: Write hierarchical styles.  
   - **Mixins**: Create reusable style blocks.  
   - **Functions**: Built-in and custom functions for dynamic values.  
   - **Optional Syntax**: Curly braces and semicolons are optional.  

2. **Comparison**:  
   - Similar to LESS/SASS but more concise and flexible.  

> **Stylus**  
> **Stylus** 是一种 CSS 预处理器，提供高度灵活、简洁的语法来编写 CSS。  
> 1. **功能**：  
>    - **变量**：`$primary = #3498db`  
>    - **嵌套**：支持层次化样式书写。  
>    - **混入**：创建可复用的样式块。  
>    - **函数**：支持内置和自定义函数，动态生成值。  
>    - **可选语法**：大括号和分号是可选的。  
> 2. **比较**：  
>    - 类似 LESS/SASS，但语法更简洁灵活。  

---

### Code Examples:

#### **Stylus Variables**
```styl
$primary = #3498db

button
  background-color $primary
  color white
```

#### **Nesting**
```styl
nav
  ul
    margin 0
    li
      list-style none
      color $primary
```

#### **Mixins**
```styl
flex-center()
  display flex
  justify-content center
  align-items center

.container
  flex-center() /* Apply the mixin */
  height 100vh
```

#### **Functions**
```styl
box-shadow($x, $y, $blur)
  box-shadow $x $y $blur rgba(0, 0, 0, 0.2)

.card
  box-shadow(2px, 4px, 10px)
```

---

### Key Notes:  
1. Stylus supports concise, indentation-based syntax but allows traditional CSS.  
2. It’s highly customizable and useful in projects needing syntax flexibility.  
3. It competes with LESS/SASS but is less widely adopted.