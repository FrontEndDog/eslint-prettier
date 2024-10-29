# eslint-prettier

一套自用的 eslint prettier stylelint 规则

## 安装

```bash
pnpm i eslint-config-fed -D
```

## 在根目录添加文件

```js
// eslint.config.js
import eslintConfigFed from 'eslint-config-fed/eslint'
export default [
  ...eslintConfigFed,
  {
    // 你自己的规则
  },
]
```

```js
// prettier.config.js
export { default } from 'eslint-config-fed/prettier'
```

```js
// stylelint.config.js
export { default } from 'eslint-config-fed/stylelint'
```

## vscode 配置（保存自动格式化）

```jsonc
// .vscode/settings.json
{
  //配置保存自动格式化
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit",
  },
  //指定默认格式化工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  //指定stylelint需要检查的文件
  "stylelint.validate": ["css", "scss", "less", "vue"],
  //关闭vscode内置样式校验,不然使用tailwindcss会报错
  "less.validate": false,
  "css.validate": false,
  "scss.validate": false,
}
```
