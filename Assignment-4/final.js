function totalFine(fare) {
    // You have to write your code here
    if (typeof fare !== "number" || fare <= 0){
        return "Invalid"
    }
    let fareCharge = fare * (20 / 100);
    let extraCharge = 30;
    let totalAmount = fare + fareCharge + extraCharge;
    return totalAmount;
}


function  onlyCharacter( str ) {
          // You have to write your code here
          if(typeof str !== "string"){
            return "Invalid";
          }
        let noSpaces = str.replace(/ /g, '');
        let capitalLetter = noSpaces.toUpperCase();
        return capitalLetter;
}