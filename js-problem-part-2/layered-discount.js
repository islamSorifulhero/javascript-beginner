function layearDiscount(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const abovePrice = 70;
    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 90) {
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * abovePrice;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}
const output = layearDiscount(240);
console.log(output);