// tasks - 01

// function celToFar(celsius) {
//     return ((celsius * 9 / 5) + 32);
//     // return celsius * 9/5 + 32;
// }
// const farhenheitResult = celToFar(0);
// console.log(farhenheitResult);


// tasks - 02


// function repeated(array, find) {
//     let single = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === find){
//             single++;
//         }
//     }
//     return single;
// }

// // let numbers = [5, 6, 11, 12, 98, 5];
// // console.log(repeated(numbers, 5));

// let numbers = [5, 6, 11, 12, 98, 5];
// console.log(repeated(numbers, 25));



// tasks - 03


// function vowelsCount(vowels) {
//     let count = 0;
//     let vowelsCount = 'aeiouAEIOU';
//     for (let i = 0; i < vowels.length; i++) {
//         if (vowelsCount.includes(vowels[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// // const result = vowelsCount("I am a student. I have a some problems");
// // console.log(result);

// console.log(vowelsCount("hello world"));



// tasks - 04


// function longestWord(string) {
//     let str = string.split(" ");
//     let longest = 0;
//     let word = null;
//     for (let i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// const result = longestWord("I am learning Programming to become a programmer");
// console.log(result);


// or 

// function longestWord(string){
//     let str = string.split(' ');
//     let longest = " ";
//     for(let i = 0; i < str.length; i++){
//         if(str[i].length > longest.length){
//             longest = str[i]
//         }
//     }
//     return longest;
// }
// const result = longestWord("I am learning Programming to become a programmer")
// console.log(result);


// tasks 05

// function randomNum() {
//     const min = 10;
//     const max = 20;
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const result = randomNum(10, 20);
// console.log(result);

// or

// function randomBetween10and20() {
//     return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
// }
// console.log(randomBetween10and20());

function random() {
    return Math.floor(Math.random() * (20 - 10 + 1) + 10);
}
console.log(random());