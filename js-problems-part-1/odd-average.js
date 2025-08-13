// const biriyanikhabo = ['abul', 'babul', 'cabul', 'abul', 'babul', 'cabul', 'kabul'];
// function duplicate (name){
//     const count = [];
//     for(const item of name){
//         if(count.includes(item) === false){
//             count.push(item);
//         }
//     }
//     return count;
// }
// const result = duplicate(biriyanikhabo);
// console.log(result);


function numbers(num) {
    const count = [];
    for (const items of num) {
        if(count.includes(items) === false){
            count.push(items);
        }
    }
    return count;
}
const result = numbers([1, 2, 3, 4, 5, 6, 1, 2, 5, 6]);
console.log(result);