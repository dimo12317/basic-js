const CustomError = require("../extensions/custom-error");

module.exports = function countCats(params) {
    let kol = 0;
    for(let i = 0; i < params.length; i++){
        for(let y = 0; y < params[i].length; y++){
            if(params[i][y] === "^^")
            ++kol;
        }
    }
    return kol;
};
