# eslint-prettier

一套自用的 eslint 与 prettier 规则

## 安装

```bash
pnpm i eslint-config-fed -D
```

## 在根目录添加文件

```js
// .eslintrc.cjs
module.exports = {
  extends: ['fed'],
}
```

```js
// prettier.config.cjs
module.exports = require('eslint-config-fed/prettier')
```

## vscode 配置（保存自动格式化）

```jsonc
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```
