### Rollup

<audio src="C:\Users\10691\Downloads\__Rollup__ is a.mp3"></audio>

**Rollup** is a modern JavaScript **module bundler** optimized for building libraries and applications. It uses **ES modules (ESM)** by default, enabling efficient tree-shaking (removing unused code) to create smaller, optimized bundles. Rollup is particularly suited for building reusable libraries, thanks to its ability to output multiple formats (e.g., ESM, CommonJS, UMD).  

**Key Features**:  
1. Focuses on **tree-shaking** for smaller bundles.  
2. Outputs multiple module formats (ESM, CJS, etc.).  
3. Extensible through a rich plugin ecosystem.

**Use Case**: Ideal for creating reusable libraries or optimizing ES module-based projects.

> **Rollup**  
>
> <audio src="C:\Users\10691\Downloads\Rollup 是一个现代化的 .mp3"></audio>
>
> **Rollup** 是一个现代化的 JavaScript **模块打包工具**，专注于构建库和应用。它默认使用 **ES 模块 (ESM)**，支持高效的 **Tree-shaking**（移除未使用的代码），从而生成更小、更优的打包文件。Rollup 特别适合构建可复用的库，支持输出多种模块格式（如 ESM、CommonJS、UMD）。  
> **主要特点**：  
>
> 1. 专注于 **Tree-shaking**，生成更小的文件。  
> 2. 支持多种模块格式输出（ESM、CJS 等）。  
> 3. 可通过丰富的插件生态系统进行扩展。  
> **应用场景**：适用于构建可复用库或优化基于 ES 模块的项目。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了如何配置和使用R.mp3"></audio>

#### **Basic Rollup Configuration**

```javascript
// rollup.config.js
export default {
  input: "src/index.js", // Entry point
  output: [
    {
      file: "dist/bundle.esm.js", // Output for ES modules
      format: "esm",
    },
    {
      file: "dist/bundle.cjs.js", // Output for CommonJS
      format: "cjs",
    },
  ],
};
```

#### **Installing Rollup**
```bash
npm install rollup --save-dev
```

#### **Running Rollup**
```bash
npx rollup --config
```

#### **Example: JavaScript Module**
```javascript
// src/index.js
export function greet(name) {
  return `Hello, ${name}!`;
}
```

After building, Rollup generates optimized bundles in the specified formats.

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. __Rollup__ e.mp3"></audio>

1. **Rollup** excels at producing optimized, small library bundles.  
2. It supports **tree-shaking** natively, reducing unused code significantly.  
3. Plugins like `@rollup-plugin-node-resolve` and `@rollup-plugin-commonjs` help handle third-party dependencies.  
4. Rollup is ideal for projects targeting modern JavaScript environments or reusable libraries.