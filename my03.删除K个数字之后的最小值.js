/**
 * @des 
 * 给定一个整数，从该整数中去掉K个数字，要求剩下的数字形成的新整数尽可能小。
 * 应如何选取被去掉的数字？
 */

 function removeDigits(num,k){
   let arr_input = num.toString().split("");
   let arr_output = [];
   let len = arr_input.length;
   let top = 0;
   for(let i=0;i<len;i++){
     while(top>0&&arr_output[top-1]>arr_input[i]&&k>0){
       top -= 1;
       k -= 1;
     }
     arr_output[top++] = arr_input[i];
   }
   for(let i=0;i<top-len+k;i++){
     arr_output.pop();
   }
   return parseInt( arr_output.join("") );
 }
 let res = removeDigits(123,1);
 console.log(res);