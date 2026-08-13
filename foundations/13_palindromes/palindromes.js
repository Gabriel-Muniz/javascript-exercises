const palindromes = function (string) {
    let formattedString = string.toLowerCase().replaceAll(/\W/gm, '');
    let auxPalindrome = '';

    for (let i = formattedString.length - 1; i >= 0; i--) {
        auxPalindrome += formattedString[i];
    }

    return auxPalindrome === formattedString;

};

// Do not edit below this line
module.exports = palindromes;
