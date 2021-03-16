//node 模块化编程，导出函数
// module.exports = function () {
//     console.log('我是bar模块')
// }
// export default function () {
//     console.log('我是bar模块---ES6')   
// }
// ES6 导出默认成员
// export default { name: 'mxg' }

// ES6 导出非默认成员
export const x = 'xxx'
export const y = 'yyy'
export function add(a, b) {
    return a + b
}