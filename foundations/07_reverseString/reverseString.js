const reverseString = function (string) {
    let stringArr = string.split('');
    let stringReversed = [];

    for (let i = stringArr.length; i >= 0; i--) {
        stringReversed.push(stringArr[i]);
    }

    return stringReversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
