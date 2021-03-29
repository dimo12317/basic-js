const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(params) {
if(typeof(params) === "object"){
    if(params === null || params.constructor != Array){
        return false
    }
}else{
    return false;
}
for(let i = 0; i < params.length; i++){
    if(typeof(params[i]) != "string"){
      params.splice(i,1);
      i--;
    }
  }
let nameTeam = [];
for(let i = 0; i < params.length; i++){
    if(params[i][0] === " "){
        params[i] = params[i].slice(1,params[i].length)
        i--;
    }
}
for(let i = 0; i < params.length; i++){
    if(typeof(params[i]) === "string")
    nameTeam.push(params[i][0].toLowerCase());
}
console.log(nameTeam)
for(let i = 0; i < nameTeam.length; i++){
    for(let y = i; y < nameTeam.length; y++){
        if(nameTeam[i] > nameTeam[y]){
            let a = nameTeam[y];
            nameTeam[y] = nameTeam[i];
            nameTeam[i] = a;
        }
    }
}
console.log(nameTeam)
for(let i = 0; i < nameTeam.length; i++){
    nameTeam[i] = nameTeam[i].toUpperCase()
}
return nameTeam.join("")
};
