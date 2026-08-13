const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) return 'OOPS';

    let accumulator = 0;
    let currentValue = 1;
    let auxPartialResult = 0; 

    //if the user request other than the first number of the fibonacci sequence
    //this will remove 1 from the "num" parameter, since the first couple of digits
    //are "hard coded" in the accumulator and currentValue variables
    num = (num === 1) ? num : num - 1;


    for (let i = 0; i < num; i++) {
        auxPartialResult = accumulator + currentValue;
        accumulator = currentValue;
        currentValue = auxPartialResult;
    }

    return auxPartialResult;
};

// Do not edit below this line
module.exports = fibonacci;
