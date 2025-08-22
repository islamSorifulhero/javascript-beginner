// tasks - 01

// function array(heights2) {
//     let lowest = heights2[0];
//     for (let i = 0; i < heights2.length; i++) {
//         if (heights2[i] < lowest) {
//             lowest = heights2[i];
//         }
//     }
//     return lowest
// }
// const heights2 = [167, 190, 120, 165, 137, 102];
// console.log(array(heights2));



// tasks - 02

// function smallest(heights){
//     let smallestName = heights2[0];
//     for(let i = 0; i < heights.length; i++){
//         if(heights[i].length < smallestName.length){
//             smallestName = heights[i];
//         }
//     }
//     return smallestName;
// }
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// console.log(smallest(heights2));


// tasks - 03

// function calculateElectronicsBudget(laptop, tablet, mobile) {
//     let laptopPrice = 35000;
//     let tabletPrice = 15000;
//     let mobilePrice = 20000;
//     const total = (laptop * laptopPrice) + (tablet * tabletPrice) + (mobile * mobilePrice);
//     return total;
// }
// console.log(calculateElectronicsBudget(2, 1, 3));



// tasks - 04

// function findAveragePhonePrice(phones) {
//     let sum = 0;
//     for (let i = 0; i < phones.length; i++){
//         sum += phones[i].price;
//     }
//     const average = sum / phones.length;
//     return average;
// }
// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];
// const avgPrice = findAveragePhonePrice(phones);
// console.log(avgPrice);


//tasks - 05

function calculateTotalMonthlySalary(employees) {
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        let emp = employees[i];
        let currentSalary = emp.starting + (emp.experience * emp.increment);
        totalSalary += currentSalary;
    }
    return totalSalary;
}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const result = calculateTotalMonthlySalary(employees);
console.log(result);



