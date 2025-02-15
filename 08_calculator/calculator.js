const add = function(a, b) {
  return +a + +b
};

const subtract = function(a,b) {
	return +a - +b
};

const sum = function(arr) {
  return arr.reduce((total, item)=>{
    return total+item
  },0)
};

const multiply = function(arr) {
  return arr.reduce((product, item) => {
    return product * item;
  })
};

const power = function(a,b) {
  let ans = a
  for (let i=2;i<=b;i++){
    ans*=a
  }
	return ans
};

const factorial = function(a) {
	let ans = 1
  for (let i = a; i>0; i--){
    ans *= i
  }
  return ans
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
