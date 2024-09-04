<div align="center">
    <img alt="logo" src="./public/favicon.png" width="240" height="240" >
    <p style="font-size: 36px;font-weight: bold" align="center">GHUI</p>
    <h2>GUANGHUI-UI,一个写起玩的移动端ui库~~</h2>
</div>


## 组件预览
```bash
# 切换到test目录
cd test
# 安装依赖
pnpm i
# 组件预览,也可以在根目录启动预览
pnpm dev
```

## 库构建
```bash
# 根目录执行
pnpm build:lib
```

## npm发布
```bash
npm adduser
npm login
npm config set proxy false
npm publish
```

## 组件测试构建
```bash
# 根目录、test目录执行都行
pnpm build
```

## 组件测试构建本地预览
组件测试构建后运行 `preview.bat`

## 仓库
[github](https://github.com/guanghuijs/guanghui-ui)
[gitee](https://gitee.com/guanghuijs/guanghui-ui)

## [组件库文档](https://guanghuijs.github.io/blogs/ghui/guide/1.%E7%AE%80%E4%BB%8B.html)

## [组件预览地址](https://guanghuijs.github.io/guanghui-ui)

## git 提交规范
- 🍐 feat 增加新功能
- 🍐 fix 修复问题/BUG
- 🍐 style 代码风格相关无影响运行结果的
- 🍐 perf 优化/性能提升
- 🍐 refactor 重构
- 🍐 revert 撤销修改
- 🍐 test 测试相关
- 🍐 docs 文档/注释
- 🍐 chore 依赖更新/脚手架配置修改等
- 🍐 workflow 工作流改进
- 🍐 ci 持续集成
- 🍐 types 类型定义文件更改
- 🍐 wip 开发中