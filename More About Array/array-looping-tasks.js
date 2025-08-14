// task - 1


// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const ultabo = [];
// for(let paltabo of colors){
//     ultabo.unshift(paltabo);
// }
// console.log(colors);


// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const ultabo = [];
// for(let i = colors.length - 1; i >= 0; i--){
//     ultabo.push(colors[i]);
// }
// console.log(ultabo);



// task -2

// let numbers = [12, 98, 5, 41, 23, 78, 46];
// let evens = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evens.push(numbers[i])
//     }
// }
// console.log(evens);

// or

// let numbers = [12, 98, 5, 41, 23, 78, 46];
// let eventsNum = [];
// for(let num = 0; num < numbers.length; num++){
//     if(numbers[num] % 2 === 0){
//         eventsNum.push(numbers[num]);
//     }
// }
// console.log(eventsNum);



// tasks 03

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let sum = [];
// for (const num of numbers) {
//     sum = sum+ num;
// }
// console.log(sum);


// tasks - 04

// const statement = 'I am a hard working person';
// const word = statement.split(' ');
// const reversedWords = word.reverse();
// const result  = reversedWords.join(' ');
// console.log(result);


// tasks - 05

// let  input = [1, 2, 3];
// let inputCopy = [...input];
// inputCopy[0] = 99;
// console.log(input, inputCopy);


// tasks - 06

let studends = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
]
// console.log(studends[0].name, "scored",studends[0].marks);
// console.log(studends[1].name, "scored", studends[1].marks);
// for(const studend of studends)
// console.log(`${studend.name} scored ${studend.marks}`);


// tasks 07

let arrayOfArray = [
    [1, 2],
    [3, 4],
    [5, 6]
]
arrayOfArray[1][0] = 99;
console.log(arrayOfArray);
// arrayOfArray[1][0] = 99;
// console.log(arrayOfArray[1]);
// console.log(arrayOfArray[2]);