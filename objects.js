// let fruits = ["banana"];
// let vegetables = ["banana"];
// if (fruits === vegetables){
//     console.log("banana khabo");
// }
// else{
//     console.log("nai pabo na");
// }


// //trim means beside space done korbe and === kore dibe
// const drink = "  water";
// const liquid = "water";
// // console.log(drink === liquid);
// if(drink.trim() === liquid.trim()){
//     console.log("pani er opor nam jibon.");
// }
// else{
//     console.log("somudrer pani ase khaite pari na");
// }


// const address = 'andorkilla';
// const update = address.slice(2, 7)
// console.log(update);

// const sentence = "I am a good and hardworking person.";
// // console.log(sentence);
// console.log(sentence.slice(5, 28));


// const sentence = "I am a good and hardworking person.";
// console.log(sentence.split("a"));


// const friendsStr = "rahim, kahim, dahim, lahim, fahim, sahim";
// // console.log(friendsStr);
// const friends = friendsStr.split(",");
// console.log(friends);

// const friendsStr = ['rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim'];
// console.log(friendsStr.join('-'));
// console.log(friendsStr.join(','));
// console.log(friendsStr.join('|'));


// const sentence = "I am learning web development.";
// //const result = ".tnempoleved bew ......."
// for(const letter of sentence){
//     console.log(letter);
// }

// const sentence = "I am learning web development."
// let revers = '';
// for(const letter of sentence){
//     // console.log(letter);
//     revers = letter + revers;
// }
// console.log(revers);


// const sentence = "I am learning web development."
// let rev = '';
// for(let i = 0; i < sentence.length; i++){
//     const letter = sentence[i];
//     rev = letter + rev;
// }
// console.log(rev);
//const reversed = sectence.split('').reverse().join('');
// console.log(reversed);

//object
// const bottle {
//     brand: 'apple',
//     price: 45;
//     color: 'white',
//     isClean: false
// }

// const subject = {
//     name: 'biology',
//     teacher: 'nilufar yasmin',
//     examDate: '30 Feb',
//     chapters: ['first', 'second', 'third'],
//     exam: {
//         name: 'Final Exam',
//         marks: 100
//     }
// }
// console.log(subject);
// console.log(subject.chapters);
// console.log(subject.examDate);
// const devExam = subject.examDate;
// console.log(devExam);

// const subject = {
//     name: 'biology',
//     teacher: 'nilufar yasmin',
//     examDate: '30 Feb',
//     chapters: ['first', 'second', 'third'],
//     exam: {
//         name: 'Final Exam',
//         marks: 100
//     }
// }


// const keys = Object.keys(subject);
// console.log(keys);

// const subject = {
//     name: 'biology',
//     teacher: 'nilufar yasmin',
//     examDate: '30 Feb',
//     chapters: ['first', 'second', 'third'],
//     exam: {
//         name: 'Final Exam',
//         marks: 100
//     }
// }
// delete subject.teacher;
// delete subject.chapters;
// console.log(subject);
// const values = Object.values(subject);
// console.log(values);
// console.log(subject.teacher);
// console.log(subject.exam);
// console.log(subject.exam.marks);

// const mobile = {
//     brand: 'samsung',
//     price: 25000,
//     color: 'black',
//     camera: '12mp',
//     isNew: true
// }
// console.log(mobile);

// for of : Array
// for in : object
// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }

// const keys = Object.keys(mobile);
// console.log(keys);
// for(const key of keys){
//     console.log(key);
// }


// const pen = {brand: 'econo', price: 10, color: 'black'};
// const pencil = new Object()
// console.log(pencil);
// const rubber = Object.create({})
// console.log(rubber);


//object task -1

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": "#daa520"
// }
// console.log(colors["golden rod"]);


//object task -2


// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
// };
// car["passenger capacity"] = 5;
// console.log(car);


//object task -3

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// }
// console.log(student.physics.marks);


//object task -4

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// const result = Object.keys(student).length;
// console.log(result);


//object task -5

// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };
// for(const [key, value] of Object.entries(myObject)){
//     console.log(`Key: ${key} | type: ${typeof value}`);
// }


//Object task -6 

// const myObject = {
//     name: "Alice",
//     age: 30,
//     isStudent: false,
//     hobbies: ["reading", "coding"],
//     address: null
// };
// for (const [key, value] of Object.entries(myObject)) {
//     console.log(`key: ${key}, value: ${value},Type: ${typeof value}`);
// }


//string task is start  1

// let string = 'data and datatype';
// let countA = 0;
// for(let i = 0; i < string.length; i++){
//     if(string[i] === 'a'){
//         countA++;
//     }
// }
// console.log(countA);


//string task is start  2


// let text = "I Am a learning JavaScript And a Practicing a lot";
// let count = 0;
// for (let i = 0; i < text.length; i++) {
//     if (text[i].toLowerCase() === 'a') {
//         count++;
//     }
// }
// console.log(count);


//string task is start  3

// let text = "education is a powerful tool for you";
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let allVowels = true;
// for (let count of vowels) {
//     if (!text.includes(count)) {
//         allVowels = false;
//         break;
//     }
// }
// if (allVowels) {
//     console.log('moja hobe');
// }
// else {
//     console.log('kosto hobe');
// }


// string task is start  4,

// If a given string has either x, replace x by y.if the given string has X, replace it by Y.

// num: 1
// let str = 'abacd';
// let c1 = 'a';
// let c2 = 'x';
// function replaceCharacter(str, c1, c2) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != c1) {
//             result += str[i];
//         }
//         else {
//             result += c2;
//         }
//     }
//     return result;
// }
// let newStr = replaceCharacter(str, c1, c2);
// console.log(newStr);

// num: 2

// let string = "Exam is exists by example.";
// let p1 = 'x';
// let p2 = 'y';
// function changeValue(string, p1, p2) {
//     let count = " ";
//     for (let i = 0; i < string.length; i++) {

//         if (string[i] != p1) {
//             count += string[i];
//         }
//         else {
//             count += p2;
//         }

//     }
//     return count;
// }
// let newValue = changeValue(string, p1, p2)
// console.log(newValue);

//g means = global flag

// let text = "Exam is exists by example"
// let updatedText = text.replace(/x/g, 'y').replace(/X/g, 'Y');
// console.log(updatedText);

// let string = "abdul aziz alamin amin alek.";
// let updatedText = string.replace(/a/g, 'm');
// console.log(updatedText);

// let friendsName = "xlam is xmal is xjal is xsal is xkam";
// let changeName = friendsName.replace(/x/g, 'y');
// console.log(changeName);


//string task 5


// let text = "capitalize every first letter if each word in a string.";
// let capitalizedText = text.split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// console.log(capitalizedText);

let string = "my name is soriful islam. i am a student. I have a dream . My dream is want to be a software developer.";
let capital = string.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
console.log(capital);