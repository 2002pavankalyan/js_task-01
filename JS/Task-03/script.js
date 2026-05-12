//1
// for(let i = 1; i <= 20; i++) {
//     console.log(i);
// }

//2
// for(let i = 1; i <= 50; i++) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

//3
// for(let i = 1; i <= 10; i++) {
//     console.log("7 x " + i + " = " + (7 * i));
// }

//4
// let i = 20;
// while(i >= 1) {
//     console.log(i);
//     i--;
// }

//5
// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log("Total Sum:", sum);

//6
// let fruits = ["apple","banana","orange","grapes"];
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//7
// let count = 0;
// for(let i = 1; i <= 50; i++) {
//     if(i % 2 === 0) {
//         count++;
//     }
// }
// console.log("Even Numbers Count:", count);

//8
// for(let i = 1; i <= 5; i++) {
//     let star = "";
//     for(let j = 1; j <= i; j++) {
//         star = star + "*";
//     }
//     console.log(star);
// }

//9
// function welcome() {
//     console.log("Welcome to JavaScript");
// }
// welcome();

//10
// function greet(name) {
//     console.log("Hello " + name);
// }
// greet("Naveen");

//11
// function add(a, b) {
//     return a + b;
// }
// console.log(add(10, 20));

//12
// function salaryBonus(salary, bonus) {
//     return salary + bonus;
// }
// console.log(salaryBonus(50000, 5000));

//13
// let student = {
//     name : "Rahul",
//     course : "JavaScript",
//     marks : 95
// };
// for(let key in student) {
//     console.log(key + " : " + student[key]);
// }

//14
// function largest(a, b) {
//     if(a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(largest(10, 50));

//15
let employee = {
    name: "Ravi",
    department: "IT",
    salary: 50000
};
function addBonus(salary, bonus) {
    return salary + bonus;
}
console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);
let finalSalary = addBonus(employee.salary, 5000);
console.log("Salary after bonus:", finalSalary);