//tasks 01

// function fourNum(num1, num2, num3, num4) {
//     const multiply = num1* num2 * num3* num4;
//     console.log(multiply);
//     return multiply;
// }
// fourNum(2, 3, 4, 5);

// or simple type

// function multiplyFour(a, b, c, d) {
//     return a * b * c * d;
// }
// console.log(multiplyFour(2, 3, 4, 5));
// const result = multiplyFour(2, 3, 4, 5)
// console.log(result);



// tasks - 02

function oddEven (input){
    if(input % 2 === 1){
        // input * 2;
        return input * 2;
    }
    else{
        return input % 2;
    }
}
const result = oddEven(22);
console.log(result);