// // 1. Write a program that takes a character (number or string)
// // in a variable & checks whether the given input is a
// // number, uppercase letter or lower case letter. (Hint: ASCII
// // codes:- A=65, Z=90, a=97, z=122).


// let char = prompt("Enter a character:");

// if (char.length !== 1) {
//   console.log("Please enter only one character.");
// } else {
//   let code = char.charCodeAt(0); 

//   // Check number
//   if (code >= 48 && code <= 57) { 
//     console.log("The input is a number.");
//   }
//   // Check uppercase letter
//   else if (code >= 65 && code <= 90) { 
//     console.log("The input is an uppercase letter.");
//   }
//   // Check lowercase letter
//   else if (code >= 97 && code <= 122) { 
//     console.log("The input is a lowercase letter.");
//   }
//   // Anything else
//   else {
//     console.log("The input is neither a number nor an English letter.");
//   }
// }


// // 2. Write a JavaScript program that accept two integers and
// // display the larger. Also show if the two integers are equal.

// // Program to accept two integers and display the larger or if they are equal

// // Taking input from the user
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// // Comparing the two numbers
// if (num1 > num2) {
//     alert(num1 + " is larger than " + num2);
// } 
// else if (num2 > num1) {
//     alert(num2 + " is larger than " + num1);
// } 
// else {
//     alert("Both numbers are equal");
// }


// // 3. Write a program that takes input a number from user &
// // state whether the number is positive, negative or zero.

// let number = parseFloat(prompt("Enter any number:"))

// if (number > 0){
//     alert(number + "is a positve number")
// }
// else if (number < 0){
//     alert(number + "is a Negative number")
// }
// else {
//     alert("This is zero")
// }


// // 4. Write a program that takes a character (i.e. string of
// // length 1) and returns true if it is a vowel, false otherwise

// let char = prompt("Enter a single character:")

// char = char.toLowerCase()

// if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//     alert(true)
// } else {
//     alert(false)
// }


// // 5. Write a program that
// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:
// // i. Check if user has entered password. If not, then
// // give message “ Please enter your password”
// // ii. Check if both passwords are same. If they are
// // same, show message “Correct! The password you
// // entered matches the original password”. Show
// // “Incorrect password” otherwise.

// let correctPassword = "fatima777";
// let userPassword = prompt("Enter your password:")

// if(!userPassword){
//     alert("Please enter your password")
// } else if (userPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password")
// } else {
//     alert("Incorrect password")
// }


// // 6. This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }

// let greeting;
// let hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
let hour = Math.floor(time / 100); 

if (hour >= 0 && hour < 12) {
  alert("Good morning! It is " + hour + " AM");
} 
else if (hour === 12) {
  alert("It is 12 PM (Noon)")
} 
else if (hour > 12 && hour < 24) {
  var pmHour = hour - 12
  alert("Good evening! It is " + pmHour + " PM");
} 
else {
  alert("Invalid time entered. Please enter between 0000 and 2359");
}
