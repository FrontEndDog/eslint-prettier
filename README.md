# eslint-prettier

一套自用的 eslint prettier stylelint 规则

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

```js
// stylelint.config.cjs
module.exports = require('eslint-config-fed/stylelint')
```

## vscode 配置（保存自动格式化）

```jsonc
// .vscode/settings.json
{
  //配置保存自动格式化
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  //指定默认格式化工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  //指定eslint需要检查的文件
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
  ],
  //指定stylelint需要检查的文件
  "stylelint.validate": ["css", "scss", "less", "vue"],
  //关闭vscode内置样式校验,不然使用tailwindcss会报错
  "less.validate": false,
  "css.validate": false,
  "scss.validate": false
}
```
