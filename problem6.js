/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var nowSalary = startingSalary * Math.pow((1 + 0.05), experience);
console.log(nowSalary.toFixed(2));