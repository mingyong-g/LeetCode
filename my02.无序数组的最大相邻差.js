/**
 * @des
 * 给定一个无序数组，求出该数组排序后的任意两个相邻元素的最大差值
 */

/**
 * @先排序后做差
 * @param { Array } arr
 * @时间复杂度 O(nlogn) 
 */
function getMaxSortedDistance(arr) {
  arr.sort((a, b) => a - b);
  let temp = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > temp) temp = arr[i + 1] - arr[i];
  }
  return temp;
}

/**
 * @桶排序思想实现
 * @param { Array } arr
 * @时间复杂度 O(n)
 */
function getMaxSortedDistance_bucket(arr) {
  let len = arr.length;
  let bucket = [];
  let min = Math.min.apply(Math, arr);
  let max = Math.max.apply(Math, arr);
  for (let i = 0; i < len; i++) {
    bucket[i] = [];
  };
  for (let i = 0; i < len; i++) {
    let index = parseInt((arr[i] - min) * (len - 1) / (max - min))
    bucket[index].push(arr[i])
    if (bucket[index].min == null || bucket[index].min > arr[i]) {
      bucket[index].min = arr[i];
    }
    if (bucket[index].max == null || bucket[index].max < arr[i]) {
      bucket[index].max = arr[i];
    }
  }
  let leftMax = bucket[0].max;
  let maxDis = 0;
  /** 最接近的都被放置在同一数组中，所以肯定是不同数组中的相邻元素差值大 */
  for (let i = 0; i < len; i++) {
    if (bucket[i].min == null) continue;
    if (bucket[i].min - leftMax > maxDis) {
      maxDis = bucket[i].max - leftMax;
    }
    leftMax = bucket[i].max;
  }
  return maxDis;
}

let arr = [3, 1, 2, 8, 9];
let tt = getMaxSortedDistance_bucket(arr)
console.log(tt);