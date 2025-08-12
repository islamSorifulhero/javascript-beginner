const numbers = [6, 4, 2, 7, 3, 8, 1];
// numbers.sort();
// console.log(numbers);
// const sereil = numbers.sort();
// console.log(sereil);


// const ages = [32, 54, 15, 76, 98];
// console.log(ages);
// ages.sort();
// console.log(ages);


// const ages = [32, 54, 15, 76, 98];
// const sortAges = ages.sort(function (a, b) { return a - b });
// console.log(sortAges);


const ages = [32, 54, 15, 76, 98];
const rightAges = ages.sort(function(a,b){return b - a})
console.log(rightAges);
