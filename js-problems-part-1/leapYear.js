//simple logic

// function isLeapYear(year){
//     if(year % 4 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const lipi = isLeapYear (2043);
// const lipi = isLeapYear (2040);
// const lipi = isLeapYear (2000);
// const lipi = isLeapYear (1600);
// const lipi = isLeapYear (999);
// console.log(lipi);


function isLeapYear (year){
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }else{
        return false;
    }
}
// const lipi = isLeapYear(1600);
// const lipi = isLeapYear(1601);
// const lipi = isLeapYear(1602);
const lipi = isLeapYear(1604);
console.log(lipi);