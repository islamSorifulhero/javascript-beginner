// const heights = [64, 65, 224, 87, 86, 144];

// function getMax (numbers){
//     let max = numbers[0]
//     for(let num of numbers){
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;
// }
// const max = getMax(heights);
// console.log(max);

//homework: min number 


// const heights = [65, 66, 68, 72, 78, 60, 65, 66];
// function lowesNum (numbers){
//     let firstNum = numbers[0];
//     for(let number of numbers){
//         if(number > firstNum){
//             firstNum = number;
//         }
//     }
//     return firstNum;
// }
// const result = lowesNum(heights)
// console.log(result);


const heights = [65, 66, 68, 72, 78, 36, 165, 166];
function getMin (numbers){
    let min = numbers[0];
    for(const numb of numbers){
        if(numb < min){
            min = numb;
        }
    }
    return min;
}
const min = getMin(heights);
console.log(min);
