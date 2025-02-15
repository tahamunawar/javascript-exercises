const fibonacci = function(num) {
    if (num<0){
        return "OOPS"
    }
    if (num == 0){
        return 0
    }
    let num1 = 1
    let num2 = 1
    for (let i=0;i<+num-2;i++){
        let temp = num1+num2
        num1 = num2
        num2 = temp
    }
    return num2

};

// Do not edit below this line
module.exports = fibonacci;
