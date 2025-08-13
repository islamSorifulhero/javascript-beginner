const phone = [
    {name: 'samsang', price: 12000, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 33000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 25000, camera: '12mp', color: 'black'},
    {name: 'htc', price: 22000, camera: '12mp', color: 'black'}
]
function getCheapPhone(prices){
    let cheap = prices[0];
    for(const num of prices){
        if(num.price < cheap.price){
            cheap = num;
        }
    }
    return cheap;
}
const result = getCheapPhone(phone);
console.log(result);