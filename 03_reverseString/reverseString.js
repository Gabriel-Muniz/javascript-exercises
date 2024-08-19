const reverseString = function(stringToReverse) {
    let auxArray = [];

    for (let i = 0; i < stringToReverse.length; i++) {
        auxArray.push(stringToReverse.charAt(i));        
    }
    return auxArray.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
