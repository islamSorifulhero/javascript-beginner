// function evenSizedString(str) {
//     const size = str.length;
//     console.log(str, size);
//     if (size % 2 === 0) {
//         console.log("even size");
//         return true;
//     }
//     else {
//         console.log('odd size');
//         return false;
//     }
// }
// const result = evenSizedString('Dhakai');
// console.log(result);


function doubleTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doubleTriple(5, true));
console.log(doubleTriple(5, false));
