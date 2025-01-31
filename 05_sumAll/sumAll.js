const sumAll = function() {
    let num1 = arguments[0];
    let num2 = arguments[1];
    let largerNum = 0;
    let smallerNum = 0;
    let sum = 0;
    if ((num1 < 0) || (num2 < 0)){ 
        return "ERROR";
    }
    if ((Number.isInteger(num1) == 0) || (Number.isInteger(num2) == 0)){
        return "ERROR";
    }
    if ((num1>num2)){
        largerNum = num1;
        smallerNum = num2;
    }
    else {
        largerNum = num2;
        smallerNum = num1;
    } 
    for (let i=smallerNum;i<largerNum+1;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
