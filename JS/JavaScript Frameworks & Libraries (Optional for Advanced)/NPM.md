### NPM

<audio src="..\..\mp3\NPM (Node Packa.mp3"></audio>

**NPM (Node Package Manager)** is the default package manager for **Node.js**. It allows developers to install, manage, and share JavaScript packages (libraries, tools, frameworks). NPM simplifies dependency management and enables access to a vast ecosystem of open-source modules.  

**Key Features**:  
1. **Install packages** locally or globally.  
2. **Manage dependencies** via `package.json`.  
3. **Publish packages** to share with others.  

**Commands**:  

- `npm install` to install packages.  
- `npm init` to create a `package.json`.  
- `npm publish` to share a package.

> **NPM**  
>
> <audio src="..\..\mp3\NPM,（Node 包管理器）.mp3"></audio>
>
> **NPM（Node 包管理器）** 是 **Node.js** 的默认包管理工具。它允许开发者安装、管理和共享 JavaScript 包（库、工具、框架）。NPM 简化了依赖管理，并提供了一个庞大的开源模块生态系统。  
> **主要功能**：  
>
> 1. **本地或全局安装** 包。  
> 2. 通过 `package.json` **管理依赖**。  
> 3. **发布包** 与他人共享。  
> **常用命令**：  
> - `npm install` 安装包。  
> - `npm init` 创建 `package.json` 文件。  
> - `npm publish` 发布包。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了使用`npm`,.mp3"></audio>

#### **Installing a Package Locally**
```bash
npm install lodash
```

```javascript
// Using lodash in your project
const _ = require("lodash");
console.log(_.capitalize("hello npm!")); // Output: "Hello npm!"
```

#### **Initializing a Project**
```bash
npm init -y
```

Creates a `package.json` file for managing project dependencies.

#### **Installing a Package Globally**
```bash
npm install -g nodemon
```

```bash
# Run nodemon globally
nodemon app.js
```

#### **Listing Installed Packages**
```bash
npm list --depth=0
```

#### **Uninstalling a Package**
```bash
npm uninstall lodash
```

---

### Key Notes:

<audio src="..\..\mp3\1. __Local pack.mp3"></audio>

1. **Local packages** are installed in the project directory, while **global packages** are available system-wide.  
2. Use `package.json` to track dependencies, scripts, and metadata for the project.  
3. NPM provides access to millions of reusable modules via [npmjs.com](https://www.npmjs.com).  
4. Combine NPM with tools like **npx** to execute binaries without global installation.