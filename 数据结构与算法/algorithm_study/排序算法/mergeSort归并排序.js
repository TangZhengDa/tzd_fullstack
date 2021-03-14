// 1.不断将数组对半分，直到每个数组只有一个
// 2.将分出来的部分重新合并
// 3.合并的时候按顺序排列

let arr1 = [5, 3, 2, 4, 1]

function merge(left, right) {
  const result = []
  while (left.length && right.length) {
    if (left[0] <   right[0]) {
      result.push(left.shift())
    } else result.push(right.shift())
  }
  return result.concat(left, right)
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  var middle = Math.floor(arr.length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(arr1));