// // 1. Write a program to take “city” name as input from user. If
// // user enters “Karachi”, welcome the user like this:
// // “Welcome to city of lights”

// let city = prompt("Enter your city name:")

// if (city === "Karachi" || city === "Karachi") {
//     alert ("Welcome to city of lights")
// } else {
//     alert ("Welcome to " + city)
// }


// // 2. Write a program to take “gender” as input from user. If the
// // user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am.

// let gender = prompt("Enter you gender (male/female):")

// if ( gender === "male" || gender === "Male"){
//     alert("Good morning Sir")
// } else if (gender === "female" || gender === "Female"){
//     alert ("Good morning Mam")
// } else {
//     alert ("Invalid input. Please enter male or female.")
// }


// // 3. Write a program to take input color of road traffic signal
// // from the user & show the message according to this table:


// let signalColor = prompt("Enter traffic signal color (Red, Yellow, Green):");
// signalColor = signalColor.toLowerCase();

// if (signalColor === "red") {
//     alert("Must Stop")
// } else if (signalColor === "yellow") {
//     alert("Ready to move")
// } else if (signalColor === "green") {
//     alert("Move now")
// } else {
//     alert("Invalid color. Please enter Red, Yellow, or Green.")
// }


// // 4. Write a program to take input remaining fuel in car (in
// // litres) from user. If the current fuel is less than 0.25litres,
// // show the message “Please refill the fuel in your car”

// let fuel = +prompt("Enter remaining fuel in your car (in litres):");

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car")
// } else {
//     alert("You have enough fuel")
// }


// // 5. Run this script, & check whether alert message would be
// // displayed or not. Record the outputs.

// //a
// let a = 4;
// if (++a === 5){
//   alert("given condition for variable a is true");
// }

// //b
// let b = 82;
// if (b++ === 83){
//   alert("given condition for variable b is true");
// }

// //c
// let c = 12;
// if (c++ === 13){
//   alert("condition 1 is true");
// }
// if (c === 13){
//   alert("condition 2 is true");
// }
// if (++c < 14){
//   alert("condition 3 is true");
// }
// if(c === 14){
//   alert("condition 4 is true");
// }

// //d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//   alert("The cost equals");
// }

// //e
// if (true){
//   alert("True");
// }
// if (false){
//   alert("False");
// }

// //f
// if("car" < "cat"){
//   alert("car is smaller than cat");
// }


// // 6. Write a program to take input the marks obtained in three
// // subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute
// // grade as per following table:

// let subject1 = +prompt("Enter marks obtained in Subject 1:");
// let subject2 = +prompt("Enter marks obtained in Subject 2:");
// let subject3 = +prompt("Enter marks obtained in Subject 3:");
// let totalMarks = +prompt("Enter total marks:");

// let obtainedMarks = subject1 + subject2 + subject3;

// let percentage = (obtainedMarks / totalMarks) * 100;

// // Grade & remarks
// let grade, remarks;

// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else {
//   grade = "Fail";
//   remarks = "Sorry";
// }

// document.write("<h2>Marks Sheet</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");


// // 7. Guess game:
// // Store a secret number (ranging from 1 to 10) in a variable.
// // Prompt user to guess the secret number.
// // a. If user guesses the same number, show “Bingo! Correct
// // answer”.
// // b. If the guessed number +1 is the secret number, show
// // “Close enough to the correct answer”.

// let secretNumber = 7;

// let guess = +prompt("Guess the secret number (1 to 10):")

// if (guess === secretNumber) {
//     alert("Bingo! Correct answer")
// } else if (guess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//   alert("Try again!");
// }


// // 8. Write a program to check whether the given number is
// // divisible by 3. Show the message to the user if the number
// // is divisible by 3.

// let number = +prompt("Enter a number:")

// if (number % 3 === 0) {
//   alert(number + " is divisible by 3");
// } else {
//   alert(number + " is not divisible by 3");
// }


// // 9. Write a program that checks whether the given input is an
// // even number or an odd number.

// let number = +prompt("Enter a number:");

// if (number % 2 === 0) {
//   alert(number + " is an even number");
// } else {
//   alert(number + " is an odd number");
// }


// // 10. Write a program that takes temperature as input and
// // shows a message based on following criteria
// // a. T > 40 then “It is too hot outside.”
// // b. T > 30 then “The Weather today is Normal.”
// // c. T > 20 then “Today’s Weather is cool.”
// // d. T > 10 then “OMG! Today’s weather is so Cool.”


// let temp = +prompt("Enter the temperature:");

// if (temp > 40) {
//   alert("It is too hot outside.");
// } else if (temp > 30) {
//   alert("The Weather today is Normal.");
// } else if (temp > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temp > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("It's very cold outside!");
// }


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let operation = prompt("Enter operation (+, -, *, /, %):");

let result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = "Error! Division by zero.";
  }
} else if (operation === "%") {
  result = num1 % num2;
} else {
  result = "Invalid operation!";
}
alert("Result: " + result);
