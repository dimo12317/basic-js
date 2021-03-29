const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let array = arr;
  for(let i = 0; i < array.length; i++){
      if(array[i] === "--discard-next"){
          array.splice(i+1,1);
          --i;
      }else if(array[i] === "--discard-prev"){
          array.splice(i-1,1);
          --i;
      }else if(array[i] === "--double-next"){
          array.splice(i+1,0,array[i+1]);
          array.splice(i,1);
          --i;
      }else if(array[i] === "--double-prev"){
          array.splice(i-1,0,array[i-1]);
          array.splice(i,1);
          --i;
      }
  }
  return array;
};
