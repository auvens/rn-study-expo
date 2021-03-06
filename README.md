# rn-study-expo

> 示例参考：[UIExplorer](https://github.com/facebook/react-native/tree/0.44-stable/Examples/UIExplorer)

使用 expo 来学习 React native

## 预览

下载 [expo](https://expo.io/tools#client) 客户端并扫码预览

<div align=center>
  <img width="300" src="./assets/expo-qrcode.png" />
</div>

## 运行

``` bash
npm i
npm start
```

## 注意事项

- 升级 SDK 过程中发生报错，解决不了的话，建议重新 `expo init` 生成一个新的项目，并把相关文件拷贝过去，运行看是否还会报错

## 新建示例代码

文件目录示例
```
View
  - examples
    - code1
      main.js // 示例代码
      index.js // 填写示例小组件需要的信息，文档信息包含 title 和 desc ，代码链接等
    - code2
    ...
    index.js // 将 example 里面的示例整合到一起
  index.js // 示例页面，里面渲染标题等，还有将示例合集渲染起来
```