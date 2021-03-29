const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  if(options.repeatTimes === undefined){
    options.repeatTimes = 1;
}else if(typeof(options.repeatTimes) != "number"){
    return "eror";
}
if(options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 1;
}else if(typeof(options.additionRepeatTimes) != "number"){
    return "eror";
}
if(str === undefined){
    return "eror";
}else if(typeof(str) != "string"){
    str = String(str);
}
if(options.addition === undefined){
    options.addition = "";
}else if(options.addition != "string"){
    options.addition = String(options.addition);
}
if(options.separator === undefined){
    options.separator = "+";
}else if(typeof(options.separator) != "string"){
    options.separator = String(options.separator);
}
if(options.additionSeparator === undefined){
    options.additionSeparator = "|"
}else if(typeof(options.additionSeparator) != "string"){
    options.additionSeparator = String(options.additionSeparator);
}

for(let i = 0; i < options.additionRepeatTimes-1; i++){
    str += options.addition;
    str += options.additionSeparator;
}
str += options.addition;  
let a = str;
for(let i = 0; i < options.repeatTimes-1; i++){
    str += options.separator;
    str += a;
}
return str;
};
  
