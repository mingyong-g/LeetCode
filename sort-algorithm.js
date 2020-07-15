/*
 * @Author: mingyong.g
 * @Date: 2020-07-15 20:46:38
 * @LastEditors: mingyong.g
 * @LastEditTime: 2020-07-15 22:18:08
 * @Description: 常见排序算法
 * @FilePath: \LeetCode\sort-algorithm.js
 */ 

/**
 * @description 冒泡排序 
 * @description 两两比较，大的靠后，继续比较，大的靠后
 * @description 时间复杂度O(n^2) 稳定排序法
 * @param {Array} arr 目标数组
 */
function bubble(arr){
  let len = arr.length;
  for(let i=0;i<len-1;i++){
    let border = len-1;
    let flag = true;
    for(let j=0;j<border;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        border = j;  //优化1
        flag = false;//优化2
      }
    }
    if(flag) break;
  }
}

let arr = [1,4,3,2,1,5,8];
// bubble(arr);
console.log(arr);

function quick(arr){
  quickSort(arr,0,arr.length-1);
}
function quickSort(arr,startIndex,endIndex){
  if(startIndex>=endIndex) return;
  let pivotIndex = partition(arr,startIndex,endIndex);

  /**
   *  !分治法
   *  递归，左右两边分别排序直到各自牌号
   */
  quickSort(arr,startIndex,pivotIndex-1);
  quickSort(arr,pivotIndex+1,endIndex)

  /** 计算分割点，并将数组安装分割点分为左右两队 */
  function partition(arr,startIndex,endIndex){
    let pivotIndex = parseInt( Math.random()*(endIndex-startIndex)+startIndex);
    let pivot = arr[pivotIndex];
    let left = startIndex;
    let right = endIndex;
    while(left!=right){
      while(left<right&&arr[right]>pivot){
        /** 大的在分割点右边则不动 */
        right--;
      }
      while(left<right&&arr[left]<=pivot){
        /** 小的在分割点左边则不动 */
        left++;
      }
      if(left<right){
        /** 
         * 大的在左边，小的在右边，则交换围着的位置
         * 使得大的在右边，小的在左边
         */
        [arr[left],arr[right]]=[arr[right],arr[left]];
      }
    }

    /** 交换分割点元素和查找的最后一位元素，使得分割点位于正确的位置 */
    [arr[left],arr[pivotIndex]]=[arr[pivotIndex],arr[left]];
    return left;
  }
}

quick(arr);
console.log(arr);