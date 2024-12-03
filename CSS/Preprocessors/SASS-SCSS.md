### SASS/SCSS  

SASS/SCSS extends CSS with features like variables, nesting, mixins, and inheritance for easier styling management:  

1. **Variables**: Store reusable values.  
   - Example: `$primary-color: #3498db;`.  

2. **Nesting**: Write cleaner, hierarchical styles.  
   - Example:  
     ```scss
     nav {
       ul {
         li {
           color: $primary-color;
         }
       }
     }
     ```

3. **Mixins**: Define reusable style blocks.  
   - Example:  
     ```scss
     @mixin flex-center {
       display: flex;
       justify-content: center;
       align-items: center;
     }
     ```

4. **Inheritance**: Share styles between selectors using `@extend`.  

> **SASS/SCSS**  
> SASS/SCSS 扩展了 CSS 功能，包括变量、嵌套、混入和继承，便于管理样式：  
> 1. **变量**：存储可重用的值。  
>    - 示例：`$primary-color: #3498db;`  
> 2. **嵌套**：书写更清晰的层次化样式。  
>    - 示例：  
>      ```scss
>      nav {
>        ul {
>          li {
>            color: $primary-color;
>          }
>        }
>      }
>      ```
> 3. **混入**：定义可重用的样式块。  
>    - 示例：  
>      ```scss
>      @mixin flex-center {
>        display: flex;
>        justify-content: center;
>        align-items: center;
>      }
>      ```
> 4. **继承**：通过 `@extend` 共享选择器的样式。  

---

### Code Examples:

#### **Variables**
```scss
$primary-color: #3498db;

button {
  background-color: $primary-color; /* Reuse the variable */
  color: white;
}
```

#### **Nesting**
```scss
nav {
  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      color: $primary-color; /* Use variable */
    }
  }
}
```

#### **Mixins**
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center; /* Apply the mixin */
  height: 100vh;
}
```

#### **Inheritance**
```scss
%base-button {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
}

.primary-button {
  @extend %base-button; /* Inherit base styles */
  background-color: $primary-color;
  color: white;
}
```

---

### Key Notes:  
1. Use **variables** for consistent values across styles.  
2. **Nesting** reflects the DOM structure but avoid deep nesting for readability.  
3. Use **mixins** for reusable patterns and **inheritance** to avoid repetition.  
4. SCSS syntax (`.scss`) is CSS-compatible, while SASS (`.sass`) uses indentation.