// let fruits = ["banana"];
// let vegetables = ["banana"];
// if (fruits === vegetables){
//     console.log("banana khabo");
// }
// else{
//     console.log("nai pabo na");
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

const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}
// console.log(mobile);

// for of : Array
// for in : object
// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }

const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    console.log(key);
}

