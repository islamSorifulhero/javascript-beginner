function evenNum(num) {
    let evens = [];
    for(let even of num){
        if(even % 2 === 0){
            evens.push(even)
        }
    }
    return evens;
}
const result = evenNum([5, 8, 91, 24, 6])
console.log(result);