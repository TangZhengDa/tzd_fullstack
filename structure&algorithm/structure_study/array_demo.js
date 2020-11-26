//创建并初始化数组
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let array_append = function (numbers) {//添加元素
    //在数组末尾添加元素的两种方式
    // numbers[numbers.length] = 10
    // numbers.push(10, 11)

    //在数组开头插入元素的两种方式
    // Array.prototype.insertFirstPosition = function (value) {
    //     for (let i = this.length; i > 0; i--) {
    //         this[i] = this[i - 1]
    //     }
    //     this[0] = value
    // }
    // numbers.insertFirstPosition(-1)

    numbers.unshift(-2, -3)
}
let array_delete = function (numbers) {//删除元素
    //从数组末尾删除元素
    // numbers.pop()

    //从数组开头删除元素的三种方式
    // for (let i = 0; i < numbers.length; i++) {//会在末尾增加undefined值，不推荐
    //     numbers[i] = numbers[i + 1]
    // }

    // Array.prototype.reIndex = function (myArray) {
    //     const newArray = []
    //     for (let i = 0; i < myArray.length; i++) {
    //         if (myArray[i] !== undefined) {

    //             newArray.push(myArray[i])
    //         }
    //     }
    //     return newArray
    // }
    // Array.prototype.removeFirstPosition = function () {
    //     for (let i = 0; i < this.length; i++) {
    //         this[i] = this[i + 1]
    //     }
    //     return this.reIndex(this)
    // }
    // numbers = numbers.removeFirstPosition()
    // console.log(numbers);

    numbers.shift()
}
// array_append(numbers)
// array_delete(numbers)
// numbers.splice(5, 3)//删除从第五个元素开始的三个元素
// numbers.splice(5)//第二个参数不传默认删除索引5之后所有元素
// numbers.splice(5, 0, 1, 2, 1)//第三个参数及以后代表添加的元素
// console.log(numbers);

//二维数组的输出
// let averageTemp = []
// averageTemp[0] = [10, 11, 12, 13, 14, 15]
// averageTemp[1] = [20, 21, 22, 23, 24, 25]

// function printMatrix(myMatrix) {
//     for (let i = 0; i < myMatrix.length; i++) {
//         for (let j = 0; j < myMatrix[i].length; j++) {
//             console.log(myMatrix[i][j]);
//         }
//     }
// }
// printMatrix(averageTemp)
// console.table(averageTemp)

//数组合并
// const zero = 0
// const number1 = [1, 2, 3]
// const number2 = [4, 5, 6]
// let number = number2.concat(zero, number1) //先后将zero与number1合并到number2末尾
// console.log(number);

//迭代器函数
const isEven = x => x % 2 === 0
// console.log(numbers.every(isEven));//迭代每个元素，直到返回false停止
// console.log(numbers.some(isEven));//迭代每个元素，直到返回true停止
// numbers.forEach(x => console.log(x % 2 === 0))//迭代整个数组
// console.log(numbers.map(isEven));//返回包含迭代结果true false的新数组
// console.log(numbers.filter(isEven));//返回包含函数返回true的元素的新数组
// console.log(numbers.reduce((previous, current) => previous + current));//对数组所有元素求和
for (const n of numbers) {
    console.log(n % 2 === 0 ? 'even' : 'odd');
}





