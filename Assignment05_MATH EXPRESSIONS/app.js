// Assignmet_5_MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

document.write("<h1>Addition Program</h1>");

let number1 = 3;
let number2 = 5;
let add = number1 + number2;

document.write(`Sum of ${number1} and ${number2} is ${add}`);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

document.write("<h1>Math Operations in JavaScript</h1>");

let num1 = 3;
let num2 = 5;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

document.write(`Addition ${num1} and ${num2} = ${sum}<br>`);
document.write(`subtraction ${num1} and ${num2} = ${sub}<br>`);
document.write(`multiplication ${num1} and ${num2} = ${mul}<br>`);
document.write(`division ${num1} and ${num2} = ${div}<br>`);
document.write(`modulus ${num1} and ${num2} = ${mod}<br>`);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

document.write(" <h1>JS Mathematical Expressions</h1>")

// a. Declare a variable
let num;
document.write(`Value after variable declaration is: ${num}<br>`);
// c. Initialize the variable with some number
num = 5;
document.write(`Initial value: ${num}<br>`);
// e. Increment the variable
num++;
document.write(`Value after increment is: ${num}<br>`);
// g. Add 7 to the variable
num = num + 7;
document.write(`Value after addition is: ${num}<br>`);
// i. Decrement the variable
num--;
document.write(`Value after decrement is: ${num}<br>`);
// k. Remainder after dividing the variable by 3
let remainder = num % 3;
document.write(`The remainder is: ${remainder}`);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

document.write("<h1>Movie Ticket Calculator</h1>")

let ticketPrice = 600;
let totalCost = ticketPrice * 5;

document.write(`Total cost to by 5 tickets to a movie is ${totalCost}PKR`)

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

document.write("<h1>Multiplication Table of 4</h1>")

let number = 4;
for (let i = 1; i <= 10; i++) {
    document.write(`${number} x ${i} = ${number * i}<br>`)
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

document.write("<h1>Temperature Converter</h1>")

// a. Celsius to Fahrenheit
// (25×9/5)+32=45+32=77
let Celsius = 25;
let Fahrenheit = (Celsius * 9/5) +32;
document.write(`${Celsius}°C is ${Fahrenheit}°F <br>`)

// b. Fahrenheit to Celsius
// (70−32)×5/9=38×5/9=21.11
let fahren = 70;
let cels = (fahren -32) * 5/9;
document.write(`${fahren}°F is ${cels}°C`)

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

document.write("<h1>Shopping Cart Checkout</h1>")

let priceItem1 = 650;
let priceItem2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let shippingCharges = 100;

let totalCostt = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write(`Price of item 1 is ${priceItem1}<br>`)
document.write(`Quantity of item 1 is ${quantityItem1}<br>`)
document.write(`Price of item 2 is ${priceItem2}<br>`)
document.write(`Quantity of item 2 ${quantityItem2}<br>`)
document.write(`Shipping charges ${shippingCharges}<br>`)
document.write(`Total cost of your order is ${totalCostt}PKR`)

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in

document.write("<h1>Mark Sheet</h1>")

let totalMark = 980;
let obtainedMark = 804;

let percentage = (obtainedMark / totalMark) * 100;

document.write(`Total Marks: ${totalMark}<br>`)
document.write(`Total Obtained: ${obtainedMark}<br>`)
document.write(`Total Percentage: ${percentage}<br>`)


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1>Total Currency in PKR</h1>")

let totalPKR = (10 * 104.80) + (25 * 28);
document.write(`Total currency is PKR: ${totalPKR}`)


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

document.write("<h1>Age Calculator:</h1>")

let currentYear = 2025;
let birthYear = 2000;

let myAge = (currentYear - birthYear);
let actualAge = (myAge -1);

document.write(`Current Year ${currentYear}<br>`)
document.write(`Birth Year ${birthYear}<br>`)
document.write(`My Age is ${actualAge}`)


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h2>The Geometrizer</h2>")

let radius = 20;
let pi = 3.142;

let circumference = 2 * pi * radius;
let area = pi *radius * radius;

document.write(`The radius is: ${radius}<br>`);
document.write(`The circumference is: ${circumference}<br>`);
document.write(`The area is: ${area}`);


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

document.write("<h2>Lifetime Supply Calculator</h2>")

let favoriteSnack = "Chocolate";
let currentAge = 24;
let maximumAge = 65;
let parDay = 3;

let totalSnack = (maximumAge - currentAge) * parDay * 365;

document.write(`Favourite Snack: ${favoriteSnack}<br>`)
document.write(`Current Age: ${currentAge}<br>`)
document.write(`Estimated Maximum Age: ${maximumAge}<br>`)
document.write(`Amount of snacks per day: ${parDay}<br>`)
document.write(`You will need ${totalSnack} ${favoriteSnack} to last you until the trip old age of ${maximumAge}`)