const repeatString = function(string, num) {

    if(num < 0) return "ERROR";
    
    let aux = "";
    for (let i = 0; i < num; i++) {
        aux += string;
    }

    return aux;
};

// Do not edit below this line
module.exports = repeatString;
