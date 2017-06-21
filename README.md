#act-ui-for-react

## 简介
这是一个react的UI组件库，包含基础组件与业务组件，用于提升react应用的开发效率。
a ui component library for react

代码结构和库的依赖以及技术在ant-d之内（所有不需要额外安装其他的依赖），支持风格配置。

但本组件库的组件写法和ant-d不同，同时包含一些ant-d没有的基础组件和业务组件。

本组件库参考了ant-design组件库：https://github.com/ant-design/ant-design
在研究ant-design组件库代码的基础上重新完善和添加了一些组件，并在组件库的代码中进行了详细的中文注释，方便使用与参考。

## 支持环境

* 现代浏览器和 IE9 及以上。
* 支持服务端渲染。
* [Electron](http://electron.atom.io/)

## 安装

```bash
npm install act-ui-for-react
```

## 组件使用 TODO


## 本地开发

```bash
$ git clone https://github.com/chenhaoact/act-ui-for-react.git
$ npm install
$ npm start
```

打开浏览器访问 http://127.0.0.1:8001。


## 组件开发流程

按照上面本地开发操作后，通过下列命令测试和校验

### eslint校验代码

```bash
$ npm run lint
```

### 跑所有代码的测试用例

```bash
$ npm test
```

### 跑某个文件的测试用例

```bash
$ npm test -- components/button/__test__/index.test.js
```

### 更新快照测试文件

```bash
$ npm test -- -u
```

### 发布到站点 TODO


版本发布流程 TODO













