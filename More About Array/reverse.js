// let numbers = [1, 2, 3, 4, 5, 6, 7];
// const reversed = [];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
//     reversed.unshift(numbers[i]);
// }
// console.log(reversed);




// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const reversed = [];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
//     reversed.unshift(numbers[i])
// }
// console.log(reversed);



const numbers = [1, 2, 3, 4, 5, 6];
const reversed  = [];
for(let i = numbers.length-1; i > 0; i--){
    reversed.push(numbers[i]);
}
console.log(reversed);

// const numbers = [1, 2, 3, 4, 5, 6];
// const ultabo = [];
// for(const num of numbers){
//     ultabo.unshift(num);
// }
// console.log(numbers);