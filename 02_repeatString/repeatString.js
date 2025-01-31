const repeatString = function(arg, num) {
    let ans = ""
    if (num < 0){
        return "ERROR"
    }
    while (num > 0){
        ans = ans+arg;
        num--;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
