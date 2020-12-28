// let proxy = new Proxy({}, {
//   get: function (obj, prop) {
//     console.log('get操作');
//     return obj[prop]
//   },
//   set: function (obj, prop, value) {
//     console.log('set操作');
//     obj[prop] = value
//   }
// })
// proxy.time = 35
// console.log(proxy.time);

// let handler = {
//   has(target, key) {
//     if (key[0] === '_') {
//       return false
//     }
//     return key in target
//   }
// }

// let target = { _prop: 'foo', prop: 'bar' }
// let proxy = new Proxy(target, handler)
// console.log('_prop' in proxy);

let target = function () { return 'I am the target' }
let handler = {
  apply: function () {
    return 'I am the Proxy'
  }
}
let p = new Proxy(target, handler)
console.log(p());
