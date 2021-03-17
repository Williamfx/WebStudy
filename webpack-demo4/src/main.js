// Node 导入莫夸
// var bar = require('./bar')
// bar ()
// 导入默认成员
// import bar from './bar'

//导入非默认成员
// 通过 export xxx 导出的非默认成员，可使用 解构赋值 的方式按需加载成员
// x 对应就是 bar.js 中的 x 成员，y 对应就是bar.js 中的 y 成员。
import { x, y, add } from './bar'
console.log(x, y, add(10, 20))

// 一次性加载 export xxx 导出所有成员，不采用结构赋值
// import * as bar2 from './bar'
// console.log(bar2)

// 模块方式导入 css ，最终会打包成js，打包在bundle.js中
import './css/style.css'