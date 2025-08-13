// const numbers = [300, 100, 700, 1200];
// function getTotal(values) {
//     let total = 0;
//     for (const value of values) {
//         total = total + value;
//     }
//     return total;
// }
// const result = getTotal(numbers);
// console.log(result);




const product = [
    {name: 'shampo', price: 100},
    {name: 'chiruni', price: 300},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200}
]
function getProduct (price){
    let value = 0;
    for(const values of price){
        value = value + values.price;
    }
    return value;
}
const result = getProduct(product);
console.log(result);
