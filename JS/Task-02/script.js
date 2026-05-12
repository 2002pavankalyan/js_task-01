//***1***//
//1
// console.log("10" + 5)
//output will be 105 because of type coercion. The number 5 will be converted to a string and concatenated with "10".

//2
// console.log(10 + true)
//output will be 11 because of type coercion. The boolean value true will be converted to the number 1 and added to 10.

//3
// console.log(false + null)
//output will be 0 because of type coercion. The boolean value false will be converted to the number 0 and the null value will also be converted to 0, resulting in a sum of 0.

//4
// console.log("Hello" + undefined)
//output will be "Helloundefined" because of type coercion. The undefined value will be converted to the string "undefined" and concatenated with "Hello".

//5
// console.log([1,2] + 5)
//output will be "1,25" because of type coercion. The array [1,2] will be converted to the string "1,2" and concatenated with the number 5, resulting in "1,25".


//***2***//
//1
// let a = "10" + 5;
// console.log(a);
// console.log(typeof a);

//2
// let b = true + 10;
// console.log(b);
// console.log(typeof b);

//3
// let c = [1,2] + "hello";
// console.log(c);
// console.log(typeof c);

//4
// let d = {} + 5;
// console.log(d);
// console.log(typeof d);

//5
// let e = null + 10;
// console.log(e);
// console.log(typeof e);

//***3***//

// console.log(Number("500"));
// console.log(Number(true));
// console.log(Number(null));
// console.log(Number("abc"));
// console.log(Number([100]));

//**4***//

// console.log(Boolean(""));
// console.log(Boolean("javascript"));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean([]));
// console.log(Boolean({}));

//**5***//

// let mark = 45;
// if(mark > 35){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

//**6***//

// let age = 20;
// if(age >= 18){
//     console.log("Eligible");
// }
// else{
//     console.log("Not Eligible");
// }

//**7***//

// let a = 50;
// let b = 80;
// let c = 30;
// if(a > b && a > c){
//     console.log("A is greatest");
// }
// else if(b > a && b > c){
//     console.log("B is greatest");
// }
// else{
//     console.log("C is greatest");
// }

//**8***//

// let signal = "red";
// switch(signal){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("ready");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default:
//         console.log("invalid signal");
// }

//**9***//

// let username = "admin";
// let password = "1234";
// if(username == "admin"){  
//     if(password == "1234"){
//         console.log("Login Success");
//     }
//     else{
//         console.log("Invalid Password");
//     }
// }
// else{
//     console.log("Invalid Username");
// }

//**10***//

// let hour = 14;
// if(hour >= 1 && hour <= 12){
//     console.log("Morning");
// }
// else if(hour >= 13 && hour <= 15){
//     console.log("Afternoon");
// }
// else if(hour >= 16 && hour <= 19){
//     console.log("Evening");
// }
// else if(hour >= 20 && hour <= 24){
//     console.log("Night");
// }
// else{
//     console.log("Invalid Time");
// }

//**11(Bonus Challenge)***//

console.log(true + true)
//output will be 2 because of type coercion. The boolean value true will be converted to the number 1, and when added together, it results in 2.
console.log("5" - 2)
//output will be 3 because of type coercion. The string "5" will be converted to the number 5, and when 2 is subtracted from it, it results in 3.
console.log("5" + 2)
//output will be "52" because of type coercion. The string "5" will be converted to the number 5, and when 2 is concatenated with it, it results in "52".
console.log(null + 1)
//output will be 1 because of type coercion. The null value will be converted to the number 0, and when 1 is added to it, it results in 1.
console.log(undefined + 1)
//output will be NaN because of type coercion. The undefined value will be converted to the number NaN, and when 1 is added to it, it results in NaN.
console.log(Boolean(" "))
//output will be true because the string " " (a single space) is a truthy value.
console.log(Number(true))
//output will be 1 because the boolean value true will be converted to the number 1.
