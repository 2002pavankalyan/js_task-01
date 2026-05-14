//***1 — Student Registration Form***//
// let studentName = prompt("Enter Student Name:");
// let department = prompt("Enter Department:");
// let age = prompt("Enter Age:");
// console.log(`Welcome ${studentName}`);
// console.log(`Department: ${department}`);
// console.log(`Age: ${age}`);

//***2 — ATM Withdrawal System***//
// let balance = 10000;
// let amount = Number(prompt("Enter Withdrawal Amount:"));
// if (amount >= 100 && amount <= balance) 
// {
//     console.log("Transaction Successful");
//     console.log(`Remaining Balance: ${balance - amount}`);
// } 
// else if (amount < 100) 
// {
//     console.log("Minimum withdrawal amount is 100");
// } 
// else
// {
//     console.log("Insufficient Balance");
// }

//***3 — Swiggy Discount Checker***//
// let orderAmount = Number(prompt("Enter Order Amount:"));
// let result = orderAmount > 499
//     ? "Free Delivery Available"
//     : "Delivery Charges Applied";
// console.log(orderAmount);
// console.log(result);

//***4 — Instagram Login System***//
// let username = prompt("Enter Username:");
// if (username === "admin") 
// {
//     let password = prompt("Enter Password:");
//     if (password === "1234") 
//     {
//         console.log("Login Success");
//     } 
//     else
//     {
//         console.log("Wrong Password");
//     }
// } 
// else 
//  {
//      console.log("Invalid Username");
//  }

//***5 — Traffic Signal System***//
// let signal = prompt("Enter Signal Color (red / yellow / green):");
// switch(signal) {
//     case "red":
//         alert("STOP");
//         break;
//     case "yellow":
//         alert("READY");
//         break;
//     case "green":
//         alert("GO");
//         break;
//     default:
//         alert("Invalid Signal");
// }

//***6 —  Employee Salary Calculator***//
// function salaryCalculation(basicSalary, bonus) {
//     let totalSalary = basicSalary + bonus;
//     return totalSalary;
// }
// let result = salaryCalculation(25000, 5000);
// alert(result);
// console.log(result);

//***7 —  E-Commerce Cart Total***//
// let prices = [100, 200, 300, 400];
// let total = 0;
// for(let i = 0; i < prices.length; i++) 
// {
//     total = total + prices[i];
// }
// let average = total / prices.length;
// console.log("Total Price:", total);
// console.log("Average Price:", average);

//***8 —  WhatsApp Contact Book***//
// let contact = 
// {
//     name: prompt("Enter Name:"),
//     phone: prompt("Enter Phone Number:"),
//     status: prompt("Enter Status:")
// };
// for(let key in contact) 
// {
//     console.log(key + " : " + contact[key]);
// }

//***9 —  Movie Ticket Booking***//
// function payment() {
//     alert("Payment Successful");
// }
// function bookTicket(callback) {
//     alert("Movie Ticket Booked Successfully");
//     callback();
// }
// bookTicket(payment);

//***10 —  Food Delivery Time Tracker***//
function* orderStatus() 
{
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}
let delivery = orderStatus();
function nextStage() {
    alert(delivery.next().value);
}
nextStage();
nextStage(); 
nextStage(); 
nextStage(); 