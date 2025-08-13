function discountPrice(price){
    if(price <= 100){
        price = price * 100;
        return price
    }
    else if(price <= 200){
        price = price * 90;
        return price;
    }
    else{
        price  = price * 70;
        return price;
    }
}
const totalPrice = discountPrice(201);
console.log(totalPrice);