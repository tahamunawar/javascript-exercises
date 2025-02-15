const palindromes = function (sentence) {
    const newSentence = Array.from(sentence).filter((letter) => {
        return /[a-zA-Z0-9]/.test(letter)
    }).map((letter) => {return letter.toLowerCase()})
    // console.log(newSentence)
    let low = 0
    let high = newSentence.length - 1
    while (low<=high){
        if (newSentence[low] != newSentence[high]){
            return false
        }
        low++
        high--
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
