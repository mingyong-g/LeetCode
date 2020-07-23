/*
 * @Author: mingyong.g
 * @Date: 2020-07-15 20:46:38
 * @LastEditors: mingyong.g
 * @LastEditTime: 2020-07-16 23:01:47
 * @Description: 常见排序算法
 * @FilePath: \LeetCode\sort-algorithm.js
 */

/**
 * @description 冒泡排序 
 * @description 两两比较，大的靠后，继续比较，大的靠后
 * @description 时间复杂度O(n^2) 稳定排序法
 * @param {Array} arr 目标数组
 */
function bubble(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let border = len - 1;
    let flag = true;
    for (let j = 0; j < border; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        border = j; //优化1
        flag = false; //优化2
      }
    }
    if (flag) break;
  }
}

let arr = [1, 4, 3, 2, 1, 5, 8];
// bubble(arr);
console.log(arr);
/**
 * 双循快排
 * @param {Array} arr 待排序数组
 */
function quickDoubleLoop(arr) {
  quickSort(arr, 0, arr.length - 1);
}
/**
 * @description 双循快排
 * @description 选的排序基准，大的放到右边，小的放到左边，通过递归直到不能分类
 * @description 时间复杂度 O(nlogn)
 * @param {*} arr
 * @param {*} startIndex
 * @param {*} endIndex
 * @returns
 */
function quickSort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) return;
  let pivotIndex = partition(arr, startIndex, endIndex);

  /**
   *  !分治法
   *  递归，左右两边分别排序直到各自牌号
   */
  quickSort(arr, startIndex, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, endIndex)

  /** 计算分割点，并将数组安装分割点分为左右两队 */
  function partition(arr, startIndex, endIndex) {
    let pivotIndex = parseInt(Math.random() * (endIndex - startIndex) + startIndex);
    let pivot = arr[pivotIndex];
    let left = startIndex;
    let right = endIndex;
    while (left != right) {
      while (left < right && arr[right] > pivot) {
        /** 大的在分割点右边则不动 */
        right--;
      }
      while (left < right && arr[left] <= pivot) {
        /** 小的在分割点左边则不动 */
        left++;
      }
      if (left < right) {
        /** 
         * 大的在左边，小的在右边，则交换围着的位置
         * 使得大的在右边，小的在左边
         */
        [arr[left], arr[right]] = [arr[right], arr[left]];
      }
    }

    /** 交换分割点元素和查找的最后一位元素，使得分割点位于正确的位置 */
    [arr[left], arr[pivotIndex]] = [arr[pivotIndex], arr[left]];
    return left;
  }
}

/**
 *@description 单循快排
 * @param {Array} arr 待排序的数组
 */
function quickSingleLoop(arr) {
  quickSort_singleloop(arr, 0, arr.length - 1);
}

/**
 * @description 单循快排
 * @param {*} arr 
 * @param {*} startIndex
 * @param {*} endIndex
 * @returns
 */
function quickSort_singleloop(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) return;
  let pivotIndex = partition_singleloop(arr, startIndex, endIndex);
  quickSort_singleloop(arr, startIndex, pivotIndex - 1);
  quickSort_singleloop(arr, pivotIndex + 1, endIndex);

  function partition_singleloop(arr, startIndex, endIndex) {
    let left = startIndex;
    let pivot = arr[startIndex];

    /** endIndex 是数组的最后一个元素也需要被访问到 */
    for (let i = left + 1; i <= endIndex; i++) {
      if (arr[i] < pivot) {
        left++;
        [arr[i], arr[left]] = [arr[left], arr[i]];
      }
    }
    [arr[left], arr[startIndex]] = [pivot, arr[left]];
    return left;
  }
}

/**
 *@description 计数排序
 * @description 仅适合整数，通过索引计数实现数组排序
 * @description 不稳定的排序算法
 * @description 时间复杂度 O(n+m),属于典型的空间换取时间
 * @param { Array } arr 待排序的正整数数组 
 * @returns
 */
function countSort(arr) {
  let max = Math.max.apply(Math, arr);
  let min = Math.min.apply(Math, arr);
  let dif = max - min;
  let countArr = new Array(dif + 1).fill(0);
  arr.forEach((item) => countArr[item-min]++);
  let arrIndex = 0;
  countArr.forEach((item,index)=> {
    for (var i = 0; i < item; i++) {
      arr[arrIndex] = index+min;
      arrIndex++;
    }
  })
}

/**
 * @description 桶排序
 * @description 将元素按大小顺序分组，每个组单独排序最后组合输出
 * @description 稳定的排序算法
 * @description 时间复杂度为O(n)
 * @param { Array } arr 待排序的数组
 */
function bucketSort(arr){
  let min = Math.min.apply(Math,arr);
  let max = Math.max.apply(Math,arr);
  let dif = max - min;
  /** n个元素n个桶  */
  let bucketNum = arr.length;
  let bucketArr = [];
  for (var i = 0; i <= bucketNum; i++) {
    bucketArr[i] = [];
  }
  arr.forEach(item=>{
    /**
     * 元素对应的桶的下标计算原则：等比分法
     * arr[i]-min/max-min = index-0/length-1-0
     */
    let index = parseInt( (item-min)*(bucketNum-1)/dif );
    bucketArr[index].push(item); 
  })

  let index = 0;
  /** 从小到大输出桶，每个桶的元素也是从小到大输出 */
  bucketArr.forEach(item=>{
    quickSingleLoop(item);
    item.forEach(list=>{
      arr[index] = list;
      index++;
    })
  })
}
