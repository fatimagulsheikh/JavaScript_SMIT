// // 1. Write a program to take a number in a variable, do the
// // required arithmetic to display the following result in your

// let a = +prompt('Input a number');
// document.write('Result ' + '<br>');
// document.write('The value of a is :' + a + '<br>');
// document.write("..............................................." + "<br>");
// document.write("<br>");
// // Pre-Increment
// document.write('The value of ++a is :' + ++a + '<br>');
// document.write('Now the value of a is :' + a);
// document.write("<br>");
// document.write("<br>");

// // Post- Increment
// document.write('The value of a++ is :' + a++ + '<br>');
// document.write('Now the value of a is :' + a);
// document.write("<br>");
// document.write("<br>");

// // Pre-Decrement
// document.write('The value of --a is :' + --a + '<br>');
// document.write('Now the value of a is :' + a);
// document.write("<br>");
// document.write("<br>");

// // Post-Decrement
// document.write('The value of a-- is :' + a-- + '<br>');
// document.write('Now the value of a is :' + a);


// // 2. What will be the output in variables a, b & result after
// // execution of the following script:
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// // --a;
// // --a - --b;
// // --a - --b + ++b;
// // --a - --b + ++b + b--;

// let a=2;
// let b=1;

// document.write("<h3>" + "Solving Complex Equation" + "</h3>");
// document.write('The value of a is :'+ a+'<br>');
// document.write('The value of b is :'+ b+'<br>');
// let result =  --a - --b + ++b + b--;
// document.write('The result is '+result+'<br>'+'<br>');
// document.write("<b>" + "Explainatory Solution" + "</b>" + "<br/>" );
// document.write("a = 2, b = 1" + "<br/>");
// document.write("--a  -  --b  +  ++b  +  b--"  + "<br/>");
// document.write('--2 - --1 + ++1 + 1-- '+'<br>');
// document.write('1 - 0 + 1 + 1 '+'<br>');
// document.write('1+1+1'+'<br>');
// document.write('The result is 3');


// // 3. Write a program that takes input a name from user &
// // greet the user.

// let name = prompt("Please enter your name:")
// alert("Hello" + " " + " " + name + " " + "Welcome to our website.")


// // 5. Write a program to take input a number from user &
// // display it’s multiplication table on your browser. If user
// // does not enter a new number, multiplication table of 5
// // should be displayed by default.

// let num = prompt("Enter a number to print its multiplication table:", "5");

// if (num === null || num === "") {
//     num = 5;
// } else {
//     num = Number(num);
// }

// document.write("<h2>Multiplication Table of " + num + "</h2>")
// for(let i = 1; i <= 10; i++) {
//     document.write(num + "x" + i + "=" + (num * i) + "<br>")
// }


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let subject1 = prompt("Enter first subject name:");
let subject2 = prompt("Enter first subject name:");
let subject3 = prompt("Enter first subject name:");

let totalMarks = 100;

let obtained1 = +prompt("Enter obtaied mark for" + " " + subject1 + ":");
let obtained2 = +prompt("Enter obtaied mark for" + " " + subject2 + ":");
let obtained3 = +prompt("Enter obtaied mark for" + " " +  subject3 + ":");

let totalObtained = obtained1 + obtained2 + obtained3;
let overallTotal = totalMarks * 3;
let percentage = (totalObtained / overallTotal) * 100;

// result in browser using table
document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtained1 + "</td><td>" + (obtained1 / totalMarks * 100) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtained2 + "</td><td>" + (obtained2 / totalMarks * 100) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtained3 + "</td><td>" + (obtained3 / totalMarks * 100) + "%</td></tr>");
document.write("<tr><th>Total</th><th>" + overallTotal + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");