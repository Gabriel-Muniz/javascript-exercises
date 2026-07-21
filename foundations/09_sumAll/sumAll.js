const sumAll = function(...args) {

    if(args.find(item => item < 0 || !Number.isInteger(item))){
        return 'ERROR'
    }

    args.sort((a, b) => a - b);

    let sum = 0;

    for (let i = args[0]; i <= args[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
