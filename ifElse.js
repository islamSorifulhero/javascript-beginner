const car = 150000;
// if (car > 90000){
//     console.log('Yes, you can marry me')
// }
// else{
//     console.log("You can't marry me.")
// }


// Random num 1-100;


var marks = 96;

// if (marks >= 80) {
//     console.log('GPA-5.00')
// }
// else if (marks >= 70 && marks < 80) {
//     console.log('GPA-4.00')
// }
// else if (marks >= 60 && marks < 70) {
//     console.log('GPA-3.00')
// }
// else if (marks >= 50 && marks < 60) {
//     console.log('GPA-2.00')
// }
// else{
//     console.log('GPA-00.00,,You are fell')
// }





var age = 16;
// if (age > 18){
//     console.log('jaw vot diye asho')
// }
// else{
//     console.log('jaw baccha ghumao')
// }


//tarnary
// age > 18 ? console.log("jaw vot diye asho") : console.log("jaw baccha ghumaw");


let price = 500;
const isleader = true;
// if (isleader === true){
//     console.log(0)
// }
// else{
//     console.log(price + 100)
// }

// price = isleader === true ? 0 : price + 100;

// var burgerPrice = 400;
// var cokePrice;
// if(burgerPrice > 500){
//     console.log('free coke')
// }
// else{
//     console.log('cokePrice 30 taka')
// }

// if(burgerPrice > 500) console.log('free coke') : console.log('cokePrice is 30taka');

// practice 1
const burgerPrice = 501;
let cokePrice;
// if(burgerPrice > 500){
//     cokePrice = 0;
//     console.log('Free coke')
// }else{
//     cokePrice = 30;
//     console.log('Free nai 30 taka de')
// }

// practic task 2
// let bmi = 26;
// if(bmi < 18.5){
//     console.log("you are underweight")
// }
// else if(bmi >= 18.5 && bmi < 24.9){
//     console.log("you are normal")
// }
// else if(bmi >= 25 && bmi <= 29.9){
//     console.log("you are overweight")
// }
// else{
//     console.log("you are obese")
// }

let bmi = 22;
// if(bmi <18.5){
//     console.log('you are underweight')
// }
// else{
//     if(bmi >= 18.5 && bmi <= 24.9){
//         console.log('you are normal')
//     }
//     else{
//         if (bmi >= 25 && bmi <= 29.9){
//             console.log('you are overweight')
//         }
//         else{
//             console.log('you are obese')
//         }
//     }
// }

//practice 3
const score = 120;
// if(score < 0 || score >100){
//     console.log('Invalid score ! please must between 1 and 100')
// }
// else if(score >= 90 && score <=100){
//     console.log('grade: A+')
// }
// else if(score < 90 && score >= 80){
//     console.log('grade: B+')
// }
// else if(score < 80 && score >= 70){
//     console.log('grade: C+')
// }
// else if(score < 70 && score >= 60){
//     console.log('grade: D+')
// }
// else{
//     console.log('grade: F')
// }

//practice 04

// var yourScore = 54;
// var friendScore = 65;
// if(yourScore > 80){
//     console.log("your friend score")
// }
// else if(friendScore < 80 && friendScore >= 60){
//     console.log("good luck, next time")
// }
// else if(friendScore < 60 && friendScore >= 40){
//     console.log("message unseen")
// }
// else if(friendScore < 40){
//     console.log("block your friend");
// }
// else{
//     console.log("sleep and act sad");
// }

//practice 04

var yourScore = 85;
var friendScore = 65;
// if(yourScore > 80){
//     if(friendScore > 80){
//         console.log("go for a lunch")
//     }
//     else if(friendScore < 80 && friendScore >= 60){
//         console.log("good luck, next time");
//     }
//     else if(friendScore < 60 && friendScore >= 40){
//         console.log("message unseen")
//     }
//     else if(friendScore < 40){
//         console.log("block")
//     }
// }
// else{
//     console.log("go home and sleep act sad")
// }

//practice 05

// var num1 = 450;
// var num2 = 500;
// if(num1 > num2){
//     console.log(num1*2)
// }
// else{
//     console.log(num1 + num2)
// }


// (num1 > num2) ? console.log(num1 * 2) : console.log(num1 + num2);

//practice 06

var age = 69;
var ticket = 800;
var isStudent = false;

if (age < 10){
    console.log("ticket is free");
}
else if(isStudent){
    console.log(ticket / 2);
}
else if(age >= 60){
    console.log(ticket - (ticket * 15 / 100));
}
else{
    console.log(ticket);
}

