// const disha = 56;
// const salman = 95;
// if(disha > salman){
//     console.log("disha is the bigger men");
// }
// else{
//     console.log("salman is big");
// }



function max (num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
const result = max(44, 86);
const result1 = max(94, 23);
const updateMax = max(result, result1);
console.log("2 max num is:", updateMax);