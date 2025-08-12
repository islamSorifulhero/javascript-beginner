// const numbers = [1, 2, 4, 5, 6]
// const players = [{}, {}, {}];


// const employees = [
//     {name: 'Ashik', designation: 'Conten Writer', salary: 29000},
//     {name: 'Atik', designation: 'developer', salary: 29000},
//     {name: 'Abdur Rahim', designation: 'Digital Marketer', salary: 21000},
// ]
// console.log(employees);


// const employees = [
//     {name: 'Ashik', designation: 'Conten Writer', salary: 29000},
//     {name: 'Atik', designation: 'developer', salary: 29000},
//     {name: 'Abdur Rahim', designation: 'Digital Marketer', salary: 21000},
// ]
// console.log(employees[0]);

const employees = [
    {name: 'Ashik', designation: 'Conten Writer', salary: 29000},
    {name: 'Atik', designation: 'developer', salary: 29000},
    {name: 'Abdur Rahim', designation: 'Digital Marketer', salary: 21000},
];{
    // console.log(employees[1].designation);
    for(let employee of employees){
        console.log(employee.designation, employee.salary, employee.name);
    }
}