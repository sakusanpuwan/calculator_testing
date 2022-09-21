const sum = function(a, b){
    return a + b;
};

const subtract = (a,b) => {
    return a - b;
} ;

const multiply = (a,b) => {
    return a * b;
};

const divide = (a,b) => {
    return a / b;
};

const modulus = (a,b) => {
    return a % b;
};

const even = a => {
    if (modulus(a,2) === 0) {
        return true;
    }
    return false;
};

const odd = a => {
    if (modulus(a,2) != 0) {
        return true;
    }
    return false;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
