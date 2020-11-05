var obj = {}
var obj1 = new Object()
// obj1._proto_=?

// Object.create(原型)
var obj = {
    name: 'wn',
    age: 18
}

var obj1 = Object.create(obj)
//obj1._proto_=?

//网易面试题
//所有对象最终都会继承自 Object.prototype???
//不是的（绝大多数） 特例：
var obj = Object.create(null)