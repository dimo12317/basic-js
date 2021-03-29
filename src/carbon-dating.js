const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if(isNaN(sampleActivity) ) return false;
  if( Number(sampleActivity) > MODERN_ACTIVITY | Number(sampleActivity) <= 0) return false;
  if(typeof sampleActivity == "string"){
    let result = Math.ceil( - HALF_LIFE_PERIOD * Math.log( sampleActivity / MODERN_ACTIVITY) / Math.log(2) );
   return result;
  }
  else return false;
};
