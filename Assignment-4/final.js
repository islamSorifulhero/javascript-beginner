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


function bestTeam(player1, player2) {
    // You have to write your code here
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }
    let player1Score = player1.foul + player1.cardY + player1.cardR;
    let player2Score = player2.foul + player2.cardY + player2.cardR;
    if (player1Score < player2Score) {
        return player1.name;
    }
    else if (player2Score < player1Score) {
        return player2.name;
    }
    else {
        return "Tie";
    }
}



