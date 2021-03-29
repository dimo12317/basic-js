const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(a){
    if(a === false){
        this.typeMachine = false;
    }else{
        this.typeMachine = true;
    }
}
  encrypt(strparam, strkey) {
    if(strparam === undefined || strkey === undefined)
    return  new Error(THROWN);
    if(typeof(strparam) != "string" || typeof(strkey) != "string")
    return new Error(THROWN);
    let y = 0;
    let str = [];
    strparam = strparam.split("");
    strkey = strkey.split("");
    for(let i = 0; i < strparam.length; i++){
      strparam[i] = strparam[i].toLowerCase();
    }
    for(let i = 0; i < strkey.length; i++){
      strkey[i] = strkey[i].toLowerCase();
    }
    for(let i = 0; i < strparam.length; i++){
            if(strparam[i].charCodeAt() < 97 || strparam[i].charCodeAt() > 122){
                str[i] = strparam[i];
                --y;
            }
            else if(strparam[i].charCodeAt() + strkey[y].charCodeAt() - 97 > 122){
              str[i] = String.fromCharCode(strparam[i].charCodeAt() + strkey[y].charCodeAt()-123)
            }else{
              str[i] = String.fromCharCode(strparam[i].charCodeAt() + strkey[y].charCodeAt()-97)
            }
            if(str[i] === '`')
            str[i] = "z";
        ++y;
        if(y === strkey.length)
        y = 0;
    }
    for(let i = 0; i < str.length; i++){
      str[i] = str[i].toUpperCase();
    }
    if(this.typeMachine === false)
    str = str.reverse();
    str = str.join("");
    return str;
}
  decrypt(strparam, strkey) {
    if(strparam === undefined || strkey === undefined)
    return new Error(THROWN);
    if(typeof(strparam) != "string" || typeof(strkey) != "string")
    return new Error(THROWN);
    let y = 0;
    let str = [];
    strparam = strparam.split("");
    strkey = strkey.split("");
    for(let i = 0; i < strparam.length; i++){
        strparam[i] = strparam[i].toLowerCase();
    }
    for(let i = 0; i < strkey.length; i++){
        strkey[i] = strkey[i].toLowerCase();
    }
    for(let i = 0; i < strparam.length; i++){
      if(strparam[i].charCodeAt() < 97 || strparam[i].charCodeAt() > 122){
          str[i] = strparam[i];
          --y;
      }
      else if(strparam[i].charCodeAt() - strkey[y].charCodeAt() + 97 >= 96){
        str[i] = String.fromCharCode(strparam[i].charCodeAt() - strkey[y].charCodeAt() + 97)
      }else{
        str[i] = String.fromCharCode(strparam[i].charCodeAt() - strkey[y].charCodeAt() + 123)
      }
      if(str[i] === '`')
      str[i] = "z";
        ++y;
        if(y === strkey.length)
        y = 0;
    }
    if(this.typeMachine === false)
    strparam.reverse()
    for(let i = 0; i < str.length; i++){
      str[i] = str[i].toUpperCase();
    }
    if(this.typeMachine === false)
        str.reverse();
    str = str.join("");
    return str;
}
}

module.exports = VigenereCipheringMachine;
