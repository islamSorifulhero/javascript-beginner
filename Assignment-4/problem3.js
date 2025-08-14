let player1 = ({ name: "Germany", foul: 10, cardY: 1, cardR: 1 });
let player2 = ({ name: "France", foul: 10, cardY: 2, cardR: 1 });
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
const result = bestTeam(player1, player2);
console.log(result);