To uninstall **ESLint** and **Prettier** from a **Nest.js** project, follow these steps:

------

### 1. **Uninstall ESLint and Prettier Packages**

Run the following command to remove ESLint, Prettier, and their associated configurations or plugins:

```bash
npm uninstall eslint eslint-config-prettier eslint-plugin-prettier prettier
```

If you have additional ESLint or Prettier plugins installed (like `@typescript-eslint` or `eslint-plugin-import`), remove them as well. For example:

```bash
npm uninstall @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import
```

------

### 2. **Remove Configuration Files**

Delete the ESLint and Prettier configuration files from the root of your project. Common file names include:

- `.eslintrc.js`, `.eslintrc.json`, or `.eslintrc`
- `.eslintignore`
- `.prettierrc`, `.prettierrc.json`, `.prettierrc.js`, or `.prettierrc.yaml`
- `.prettierignore`

Use the following command if you want to remove them from the terminal:

```bash
rm -rf .eslintrc* .eslintignore .prettierrc* .prettierignore
```

------

### 3. **Remove ESLint and Prettier Scripts from `package.json`**

Open your `package.json` file and remove any scripts related to ESLint or Prettier. For example:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write ."
}
```

Delete these entries entirely.

------

### 4. **Clean Up `package.json`**

Check for and remove any references to ESLint and Prettier in `package.json`, especially under the `devDependencies` section, or any overrides/settings related to ESLint or Prettier.

------

### 5. **Verify Uninstallation**

Run the following command to ensure ESLint and Prettier are no longer present in your project:

```bash
npm ls eslint prettier
```

If they are not listed, the uninstallation is successful.

------

### 6. **(Optional) Reconfigure Nest.js Defaults**

Nest.js projects often come pre-configured with ESLint. If you don't plan to use any other linter, you can leave your project without a linter. Otherwise, you might want to explore alternatives like `TSLint` or simply rely on TypeScript's strict compiler settings.

------

### 7. **Restart Your Editor**

To ensure all references to ESLint and Prettier are removed, restart your code editor. If you're using VS Code, it might still show ESLint errors due to lingering extensions or settings.

------

If you encounter issues or need further help, let me know!