// function sumOfNumbers(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         sum = sum + number;
//     }
//     return sum;
// }
// const sum = sumOfNumbers([3, 45, 67]);
// console.log(sum);


function marks(num) {
    let total = 0;
    for (let mark of num) {
        total = total + mark;
    }
    return total;
}
const result = marks([3, 4, 5, 8]);
console.log(result);

