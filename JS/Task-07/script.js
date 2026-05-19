// // ==========================================
// // 1. API Task - User Names Uppercase
// // ==========================================

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const upperUsers = data.map((user) => user.username.toUpperCase());

//     console.log(upperUsers);
//   });


// // ==========================================
// // 2. API Task - Expensive Products
// // ==========================================

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((products) => {
//     const expensiveProducts = products.filter((product) => product.price > 100);
//     console.log(expensiveProducts);
//   });


// // ==========================================
// // 3. Date Concept Task - Digital Clock
// // ==========================================

// const currentDate = new Date();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();
// console.log(hours + " : " + minutes + " : " + seconds);


// // ==========================================
// // 4. String Concept Task - Username Checker
// // ==========================================

// let userName = "   Pavan kalyan   ";
// let finalName = userName.trim().toUpperCase();
// console.log(finalName);
// console.log(finalName.includes("KALYAN"));


// ==========================================
// 5. Array Concept Task - Student Rank System
// ==========================================

let marks = [450, 300, 700, 200, 900];
marks.sort((a, b) => b - a);
let top3 = marks.slice(0, 3);
console.log(top3);