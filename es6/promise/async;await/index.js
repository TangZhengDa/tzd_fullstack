// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('aaaa')
//             resolve()
//         }, 1000)
//     })
// }
// function b() {
//     console.log('bbbb')
// }
// a().then(b())

// async声明该函数内部可能存在异步情况
async function asyncPrint(value, ms) {
    await clearTimeout(ms) //阻塞后面的代码
    console.log(value)//渠道微任务队列
}
asyncPrint('hello', 1000)
console.log('ok')