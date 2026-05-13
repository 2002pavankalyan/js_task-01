//1
// function welcomeUser(name){
//     console.log("Welcome " + name);
// }
// welcomeUser("pavan");

//2
// function squareNumber(num){
//     return num * num;
// }
// console.log(squareNumber(5));

//3
// const employee = {
//     name: "Rahul",
//     salary: 50000,
//     employeeBonus: function(bonus){
//         console.log(this.name);
//         console.log(this.salary + bonus);
//     }
// };
// employee.employeeBonus(5000);   

//4
// function checkScope(){
//     if(true){
//         var a = "I am var";
//         let b = "I am let";
//         const c = "I am const";
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     console.log(a); 
//     console.log(b); 
//     console.log(c); 
// }
// checkScope();

// Output://
// var -> function scoped -> works outside block
// let -> block scoped -> error outside block
// const -> block scoped -> error outside block

//5
// const add = (a,b) => {
//     console.log(a+b);
// };
// add(5,3);

//6
// function multiply(a,b){
//     return a * b;
// }
// function calculator(callback,a,b){
//     console.log(callback(a,b));
// }
// calculator(multiply,5,2);

//7
// function* offers()
// {
//     yield "50% OFF";
//     yield "Free Delivery";
//     yield "Cashback";
// }
// const data = offers();
// alert(data.next().value);
// alert(data.next().value);
// alert(data.next().value);

//8
// function student(name, course = "JavaScript"){
//     console.log("Name:", name);
//     console.log("Course:", course);
// }
// student("Rahul");
// student("Navi","React");

//9
// function multi(a){
//     return function(b){
//         return function(c){
//             return a * b * c;
//         };
//     };
// }
// console.log(multi(2)(3)(4));

//10
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const result = [...arr1, ...arr2];
// console.log(result);

//11
// const obj1 = {name:"Navi"};
// const obj2 = {role:"Developer"};
// const result = {...obj1, ...obj2};
// console.log(result);

//12
// function numbers(...num){
//     console.log(num);
//     let sum = 0;
//     for(let i=0; i<num.length; i++){
//         sum += num[i];
//     }
//     console.log(sum);
// }
// numbers(1,2,3,4);

//13
let students = [];
function addStudent(name, marks){
    const student = {
        name,
        marks
    };
    students.push(student);
    console.log(name + " added successfully");
}
function printStudents(){
    console.log("Student List:");
    students.forEach((student,index) => {
        console.log(
            index + 1,
            student.name,
            student.marks
        );
    });
}
function calculateMarks(student)
{
    return student.marks;
}

function totalMarks(callback)
{
    let total = 0;
    students.forEach(student => 
        {
        total += callback(student);
        });

    console.log("Total Marks:", total);
}

function addBonusMarks(bonus){
    students = students.map(student => {
        return {
            ...student,
            marks: student.marks + bonus
        };
    });
    console.log("Bonus marks added");
}
function addMultipleStudents(...newStudents){
    students = [...students, ...newStudents];
}
addStudent("Rahul",80);
addStudent("Navi",90);
addMultipleStudents(
    {name:"Kiran", marks:70},
    {name:"Akhil", marks:85}
);
printStudents();
totalMarks(calculateMarks);
addBonusMarks(5);
printStudents();