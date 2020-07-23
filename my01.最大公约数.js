/**
 * @des 
 * - 求出两个整数的最大公约数
 */

/**
 * @暴力枚举法
 * @param { Number } x 
 * @param {Number } y
 * @returns {Number} 最大公约数 
 * @缺点 时间复杂度过高 O(min(x,y))
 */
function enumerate(x,y){
  let min = Math.min.call(Math,x,y);
  let i =min;
  while(x%i!==0||y%i!==0){
    i--;
  }
  return i;
}

/**
 * @辗转相除法
 * 最大公约数 = 两数取余，与较小数之间的最大公约数 【递归】
 * @param { Number } x 
 * @param {Number } y
 * @returns {Number} 最大公约数 
 * @缺点 取余运算性能较差 时间复杂度O(max(x,y))
 */
function  division(x,y){
  let min = x<y?x:y;
  let max = x>y?x:y;
  if(max%min==0) return min;
  let temp = max%min;
  return division(temp,min);
}

/**
 * @更相减损术
 * 最大公约数 = 两数取差，与较小数之间的最大公约数 【递归】
 * @param { Number } x 
 * @param {Number } y
 * @returns {Number} 最大公约数 
 * @缺点 不稳定 时间复杂度O(max(x,y))
 */
function subtraction(x,y){
  let min = x<y?x:y;
  let max = x>y?x:y;
  if(max-min == 0 ) return min;
  return subtraction(max-min,min)
}

/**
 * @更相减损术与移位相结合
 * @param { Number } x 
 * @param { Number } y 
 * @returns { Number } 最大公约数
 * @最佳实践
 */
function subtraction_best(x,y){
  if(x==y) return x;
  /** 
   * x,y均是偶数，先除2再计算最大公约数
   * x&1==0表示x是偶数 
   */
  if(x&1==0&&y&1==0){
    return subtraction_best(x>>1,y>>1)<<1;
  }
  if(x&1==0){
    return subtraction_best(x>>1,y);
  }
  if(y&1==0){
    return subtraction_best(x,y>>1);
  }
  let min = x<y?x:y;
  let max = x>y?x:y;
  return subtraction_best(max-min,min);
}
