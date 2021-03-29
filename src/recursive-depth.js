const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
}
    calculateDepth(arr, Counter = new Set(), dep = 1) {
      Counter.add(dep);
  
        for(let a in arr){
          if(Array.isArray(arr[a])){
            this.calculateDepth(arr[a], Counter, dep + 1 );
          }
        }
  
        return Math.max(...Counter);
      }
}
