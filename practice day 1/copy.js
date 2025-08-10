let applePrice = 220;
let orangePrice = applePrice;
applePrice = 170;
// console.log(applePrice);
// console.log(orangePrice);

const arrayApple = [222, 333, 4444, 555];
let arrayOrange = [];
arrayOrange = arrayApple;
arrayApple[0] = 111;
console.log(arrayApple);
console.log(arrayOrange);