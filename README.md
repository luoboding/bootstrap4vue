# vue-components-rollup
| vuejs 2.0 组件开发模版，使用rollup打包

## 创建目录结构

###  初始化项目
``` bash
yarn init
or
npm init
```

## 配置包管理

## 配置代码样式

### 安装eslint-config-airbnb-base
``` bash
yarn add --dev eslint-config-airbnb-base eslint eslint-plugin-import
```

### 安装eslint-plugin-html检查vue文件
``` bash
yarn add --dev eslint-plugin-html
```

### 配置eslint
``` bash
touch .eslintrc.js
```

``` javascript
module.exports = {
  root: true,
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'html',
  ],
    // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
```
### 添加run command
``` javascript
{
  "scripts": {
    "lint": "eslint --ext .js,.vue components config test"
  }
}
```
## 配置单元测试
