/**
 * @des 
 * 给定一个正整数，计算其全排列的下一个数。仅刚大于它的第一个数
 * 
 * @issue
 * 1. 首先确定逆序区域，然后让逆序区域里面的元素从小到大排列
 * 2. 找到逆序区域的前一个元素作为边界值
 * 3. 将边界值和顺序排列的逆序区域中的第一个值交换【也就是边界值和边界的下一个元素】
 */

 function lastNumber(num){
   let arr = num.toString().split("");
   
   let len = arr.length;
   let border = 0;
   for(i=len-1;i>0;i--){
    if(arr[i-1]<arr[i]){
      border = i-1;
      break;
    }
    else{
      [arr[i],arr[i-1]]=[arr[i-1],arr[i]];
      minIndex = i-1;
    }
   }
   if(border==0)return null;
   [arr[border],arr[border+1]] = [arr[border+1],arr[border]];
   let lastNumber = parseInt(arr.join(""));
   return lastNumber;
 }
 let num = 13143;
 let res = lastNumber(num);
 console.log(res);