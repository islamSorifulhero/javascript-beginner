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

// function oddEven(input) {
//     if (input % 2 === 1) {
//         return input * 2;
//     }
//     else {
//         return input / 2;
//     }
// }
// const result = oddEven(90);
// console.log(result);


//tasks - 03

// myself practice

// function make_avg(avg) {
//     let sum = 0;
//     for (let i = 0; i < avg.length; i++) {
//         sum += avg[i];
//     }
//     let avgNum = sum;
//     let avgtotal = avgNum / 12;
//     return avgtotal;
// }
// const result = make_avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
// console.log(result);


// origin answer

// function make_avg(array, number) {
//     let sum = 0;
//     for(let i = 0; i < number; i++){
//         sum += array[i];
//     }
//     return sum / number;
// }
// let arrayNum = [2, 3, 4, 5, 6, 40];
// let avgNum = make_avg(arrayNum, arrayNum.length);
// console.log(avgNum);


function count_zero(binary){
    if(binary.length === 0){
        return binary.length;
    }
}
const result = count_zero("1100111101001000101");
console.log(result);
