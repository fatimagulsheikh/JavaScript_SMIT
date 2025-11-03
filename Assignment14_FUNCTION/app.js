// // 1. Write a function that displays current date & time in your
// // browser.

// function time(){
//     let today = new Date();
//     document.write(today);
// }
// time();

// // 2. Write a function that takes first & last name and then it
// // greets the user using his full name.

// function greetUser(){
//     let firstName = prompt('Write your first name.')
//     let lastName = prompt('Write your last name.')
//     alert(`Hello ${firstName} ${lastName}`)
// }
// greetUser();

// // 3. Write a function that adds two numbers (input by user)
// // and returns the sum of two numbers.

// function sum(){
//     let firstNumber = +prompt('Write a first number')
//     let secondNumber = +prompt('Write a second number')
//     let result = firstNumber + secondNumber;
//     alert(`The Sum of ${firstNumber} and ${secondNumber} is ${result}`)
// }
// sum();

// // 4. Calculator:
// // Write a function that takes three arguments num1, num2
// // & operator & compute the desired operation. Return and
// // show the desired result in your browser.

// function calculator(num1, operator, num2){
//     if(operator==='+'){
//         let result = num1 + num2;
//         alert(result)
//     }
//     else if (operator==='-'){
//         let result = num1 - num2;
//         alert(result)
//     }
//     else if (operator ==='/'){
//         let result = num1 / num2;
//         alert(result)
//     }
//     else{
//         alert('Invalid Operator')
//     }
// }

// let firstNumber=+prompt('Enter first number');
// let operator=prompt('Enter operator');
// let secondNumber=+prompt('Enter Second number');
// calculator(firstNumber,operator,secondNumber);

// // 5. Write a function that squares its argument.

// function square(num){
//     let square=num**2;
//     alert(square)
// }
// let number=+prompt('Enter number to be square')
// square(number);

// // 6. Write a function that computes factorial of a number.

// function factorial() {
//   let n = +prompt("enter n");
//   let fact = 1;
//   if (n === 1 || n === 0) {
//   } else {
//     for (var i = n; i >= 1; i--) {
//       fact = fact * i;
//     }
//   }
//   document.write(fact);
// }
// factorial();

// // 7. Write a function that take start and end number as inputs
// // & display counting in your browser.

// function counting(start,end){
//     for(let i = start; i <= end; i++ ){
//         document.write(i + '<br>');
//     }
// }
// let start = +prompt("Enter start number for counting:");
// let end = +prompt("Enter end number for counting:");
// counting(start,end);

// // 8. Write a nested function that computes hypotenuse of a
// // right angle triangle.
// // Hypotenuse2 = Base2 + Perpendicular2

// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(num) {
//     return num * num;
//   }

//   var baseSquare = calculateSquare(base);
//   var perpendicularSquare = calculateSquare(perpendicular);
//   var hyp = Math.sqrt(baseSquare + perpendicularSquare);

//   return hyp;
// }

// var base = +prompt("Enter base of right angle triangle");
// var perpendicular = +prompt("Enter perpendicular of right angle triangle");
// var hyp = calculateHypotenuse(base, perpendicular);
// alert("The hypotenuse of right angle triangle is " + hyp);

// // 9. Write a function that calculates the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables

// function areaCalculate(width,height){
//     let A=width*height;
//     return A;
// }
// let width=+prompt('Enter width of triangle');
// let height=+prompt('Enter height of triangle');
// let result=areaCalculate(width,height);
// document.write(result)

// // 10. Write a JavaScript function that checks whether a passed
// // string is palindrome or not?
// // A palindrome is word, phrase, or sequence that reads the same backward as
// // forward, e.g., madam.

// function palindrome(string) {
//   let check = "";
//   for (var i = string.length - 1; i >= 0; i--) {
//     check += string[i];
//   }
//   if (string === check) {
//     alert(string + " is a plindrome word");
//   } else {
//     alert(string + " is  not a plindrome word");
//   }
// }
// let str = prompt("Write any word");
// palindrome(str);

// // 11. Write a JavaScript function that accepts a string as a
// // parameter and converts the first letter of each word of the
// // string in upper case.

// function UpperCase(str) {
//     let arr = str.split(' ');
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//     }
//     return newArray.join(' ')

// }

// let str = 'the quick brown fox'
// let result = UpperCase(str)
// document.write('EXAMPLE  SRING :' + str + '<br>')
// document.write('EXPECTED  SRING :' + result + '<br>')


// // 12. Write a JavaScript function that accepts a string as a
// // parameter and find the longest word within the string.

// function longest(str) {
//   let split = str.split(" ");
//   let first = split[0].length;
//   for (let i = 0; i < split.length; i++) {
//     if (first < split[i].length) {
//       first = split[i];
//     }
//   }
//   return first;
// }
// let str = "Web Development Tutorial ";
// let result = longest(str);
// document.write("EXAMPLE  SRING :" + str + "<br>");
// document.write("EXPECTED  SRING :" + result + "<br>");


// // 13. Write a JavaScript function that accepts two arguments, a
// // string and a letter and the function will count the number of

// function count(str, letter) {
//     let find=0;   
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             find += 1;
//         }
//     }
//     return find
// }
// let str = 'JSResourceS.com';
// let letter = 'o'
// let result = count(str, letter);
// document.write('The occurence of o in this string is ' + result)


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.

function calcCircumference(value){
    let circumference = 2 * 3.141 * value;
    return circumference;
}

function calcArea(value){
    let area = 3.141 * (value * value);
    return area;
}

let radius = +prompt('Enter radius of circle ');
let circumference = calcCircumference(radius);
let area = calcArea(radius);

document.write('The Circumference of circle is ' + circumference + '<br>');
document.write('The Area of circle is ' + area + '<br>');
