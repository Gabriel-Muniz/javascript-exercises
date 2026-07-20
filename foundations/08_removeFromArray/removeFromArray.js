const removeFromArray = function(arr, ...numToRemove) {
    return arr.filter((item) => {
        if(!numToRemove.includes(item)){
            return item;
        }
    })
};

// Do not edit below this line
module.exports = removeFromArray;
