// 思想：从第一个元素开始，重复比较相邻的两项，
// 若第一项比第二项大，则交换两者的位置，反之则不动

let arr1 = [5, 3, 2, 4, 1]

function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let flag = false
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
        flag = true
      }
    }
    if (flag = false) return arr
  }
  return arr
}
console.log(bubbleSort(arr1));