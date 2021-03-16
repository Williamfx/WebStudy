// 引用 Node.js 中的 path 模块，处理文件路径的小工具
const path = require("path");

// 1. 导出一个webpack具有特殊属性配置的对象
module.exports = {
    // 指定模式配置,取值： none（什么也没有）, development or production(默认的) // 如， production 模式打包后 bundle.js是压缩版本的， development则不是压缩的
    mode: 'none',
    //入口
    entry: './src/main.js', //入口模块文件路径
    //出口是对象
    output: {
        //path 必须是一个绝对路径，_dirname 是当前js的绝对路径D:\StudentProject\WebStudy\webpack-demo2
        path: path.join(__dirname, './dist/'), //打包的结果文件存储目录
        filename: 'bundle.js' //打包的结果文件名
    }
}