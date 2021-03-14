// 1.把数组分为[已排序]和[未排序]两部分, 第一个数为[已排序]，其余为[未排序]
// 2.从[未排序]抽出第一个数，和[已排序]部分比较，插入到合适的位置
let arr1 = [5, 3, 2, 4, 1]

function insertSort(arr) {
  const len = arr.length
  let temp; // temp用来保存当前需要插入的元素
  for (let i = 0; i < len; i++) {
    let j = i // j用来帮助temp寻找自己应该有的定位
    temp = arr[i]
    // 判断j前面一个元素是否比temp大
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}
console.log(insertSort(arr1));
