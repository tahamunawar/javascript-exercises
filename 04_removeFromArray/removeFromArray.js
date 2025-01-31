const removeFromArray = function() {
    const args = Array.from(arguments);
    const ans = [];
    const targetArray = args[0];
    const elementsToRemove = args.slice(1,args.length);
    for (let i = 0; i<targetArray.length; i++){
        if (elementsToRemove.includes(targetArray[i])){}
        else{
            ans.push(targetArray[i]);
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
