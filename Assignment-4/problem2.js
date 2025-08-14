function  onlyCharacter( str ) {
          // You have to write your code here
          if(typeof str !== "string"){
            return "Invalid";
          }
        let noSpaces = str.replace(/ /g, '');
        let capitalLetter = noSpaces.toUpperCase();
        return capitalLetter;
}
const result = onlyCharacter(true);
console.log(result);