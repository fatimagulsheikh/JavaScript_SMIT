// // 1. Write a program that takes a positive integer from user &
// // display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// let number = +prompt("Enter a positive integer:");

// document.write("<h3>Number: " + number + "</h3>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");


// // 2. Write a program that takes a negative floating point
// // number from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// let number = +prompt("Enter a negative floating-point number:");

// document.write("<h3>Number: " + number + "</h3>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");


// // 3. Write a program that displays the absolute value of a
// // number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let number = +prompt("Enter any number:");

// let absoluteValue = Math.abs(number);

// document.write("<h3>Number: " + number + "</h3>");
// document.write("Absolute value: " + absoluteValue);


// // 4. Write a program that simulates a dice using random()
// // method of JS Math class. Display the value of dice in your
// // browser.:

// let diceValue = Math.floor(Math.random() * 6) + 1;

// document.write("<h2>Random Dice Value: " + diceValue + "</h2>");


// // 5. Write a program that simulates a coin toss using random()
// // method of JS Math class. Display the value of coin in your
// // browser

// let toss = Math.floor(Math.random() * 2) + 1;

// // Determine the result
// let result = (toss === 1) ? "Heads" : "Tails";

// document.write("<h2>" + toss + "<br>Random Coin Value: " + result + "</h2>");


// // 6. Write a program that shows a random number between 1
// // and 100 in your browser.

// let randomNumber = Math.floor(Math.random() * 100) + 1;

// document.write("<h2>Random Number between 1 and 100: " + randomNumber + "</h2>");


// // 7. Write a program that asks the user about his weight. Parse
// // the user input and display his weight in your browser.
// // Possible user inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms

// let userInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");

// let weight = parseFloat(userInput);

// document.write("<h3>The weight of user is " + weight + " kilograms</h3>");


// // 8. Write a program that stores a random secret number from
// // 1 to 10 in a variable. Ask the user to input a number
// // between 1 and 10. If the user input equals the secret
// // number, congratulate the user.

// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let userGuess = +prompt("Guess the secret number (between 1 and 10):");

// if (userGuess === secretNumber) {
//   document.write("<h3> Congratulations! You guessed the secret number correctly.</h3>");
// } else {
//   document.write("<h3> Sorry, the secret number was " + secretNumber + ".</h3>");
// }
