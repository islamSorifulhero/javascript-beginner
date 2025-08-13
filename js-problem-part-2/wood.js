/*
 *chair --> 3 cft
 *table --> 10 cft
 *bed --> 50 cft
 */

function woodCalculate(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    const totalWoodSum = chairWood + tableWood + bedWood;
    return totalWoodSum;
}

const totalWood = woodCalculate(1, 1, 4);
console.log(totalWood);

