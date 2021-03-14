let arr1 = [5, 3, 2, 4, 1]

function bubbleSort(arr) { // 冒泡
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let flag = false
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = true
      }
    }
    if (flag = false) return arr
  }
  return arr
}
console.log(bubbleSort(arr1));

function insertSort(arr) { // 插入
  const len = arr.length
  let temp;
  for (let i = 0; i < len; i++) {
    let j = i
    temp = arr[i]
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}
console.log(insertSort(arr1));