function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1){
            odds.push(number);
        }
    }
    // return odds;
    let sum = 0;
    for (const number of odds){
        sum = sum + number;
    }
    return sum;




}
const oddNumber = oddAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(oddNumber);