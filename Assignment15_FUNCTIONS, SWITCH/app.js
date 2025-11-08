// // 1. Write a custom function power ( a, b ), to calculate the value of
// // a raised to b.

// function powered (a, b){
//     let result = 1;
//     for (let i = 1; i <= b; i++){
//         result = result * a;
//     }
//     return result;
// }

// let base = +prompt("Enter base number:");
// let exponent = +prompt("Enter exponent:");

// let answer = powered(base, exponent);
// document.write(`${base} Raised to powered ${exponent} is ${answer}`);


// // 2. Any year is entered through the keyboard. Write a function to
// // determine whether the year is a leap year or not.

// function isLeapYear(year){
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let year = + prompt("Enter a year:");
// if(isLeapYear(year)){
//     document.write(`${year} is Leap Year`);
// } else {
//     document.write(`${year} is Not a Leap Year`)
// }


// // 3. If the lengths of the sides of a triangle are denoted by a, b, and
// // c, then area of triangle is given by
// // area = S(S − a)(S − b)(S − c)
// // where, S = ( a + b + c ) / 2
// // Calculate area of triangle using 2 functions

// function calculateS(a, b, c){
//     return(a + b + c) / 2;
// }

// function calculateArea(a, b, c){
//     let S = calculateS(a, b, c);
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// let a = +prompt ("Enter Side a :");
// let b = +prompt ("Enter Side b :");
// let c = +prompt ("Enter Side c :");

// let are = calculateArea(a, b, c);
// document.write("The area of the triangle is:" + are.toFixed(2));


// // 4. Write a function that receives marks received by a student in 3
// // subjects and returns the average and percentage of these
// // marks. there should be 3 functions one is the mainFunction
// // and other are for average and percentage. Call those functions
// // from mainFunction and display result in mainFunction.

// function averageFunctioin(sub1, sub2, sub3){
//     let average = (sub1 + sub2 + sub3) / 3; 
//     return average;
// }

// function percentageFunction(sub1, sub2, sub3){
//     let totalMarks = 300;
//     let obtained = sub1 + sub2 + sub3;
//     let percentage = (obtained / totalMarks) * 100;
//     return percentage;
// }

// function mainFunction(){
//     let sub1 = +prompt("Enter marks of subject 1 :")
//     let sub2 = +prompt("Enter marks of subject 2 :")
//     let sub3 = +prompt("Enter marks of subject 3 :")

//     let avr = averageFunctioin(sub1, sub2, sub3);
//     let par = percentageFunction(sub1, sub2, sub3);

//     document.write("Average Marks:" + avr.toFixed(2) + "<br>");
//     document.write("Percentage:" + par.toFixed(2) + "%");
// }

// mainFunction();


// // 5. You have learned the function indexOf. Code your own custom
// // function that will perform the same functionality. You can code
// // for single character as of now.

// function index(str, char) {
//     let no;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             no = i
//             break;
//         }
//     }
//     return no
// }
// let str = 'hello world'
// let indexOf = prompt('Write character to find ');
// let result = index(str, indexOf);
// document.write('The indexOf ' + indexOf + ' is ' + result)


// // 6. Write a function to delete all vowels from a sentence. Assume
// // that the sentence is not more than 25 characters long.

// function removeVowel(sentence){
//     let result = "";
//     let vowels = "aeiouAEIOU";

//     for(let i = 0; i < sentence.length; i++){
//         if(!vowels.includes(sentence[i])){
//             result += sentence[i];
//         }
//     }
//     return result;
// }

// let sentence = prompt("Enter a sentence (max 25 characters):");
// if(sentence.length > 25){
//     alert("Sentence should not be more than 25 characters!");
// } else {
//     let withoutVowels = removeVowel(sentence);
//     document.write("Original Sentence: " + sentence + "<br>");
//     document.write("Without Vowels: " + withoutVowels);
// }


// // 7. Write a function with switch statement to count the number of
// // occurrences of any two vowels in succession in a line of text.
// // For example, in the sentence

// let str = 'Please read this application and give me gratuity';
// let occurence = [];
// let count = 0;

// function findOccurence() {
//   let chars = str.toLowerCase().split('');
//   for (let i = 0; i < chars.length; i++) {
//     let char = chars[i];
//     let next = chars[i + 1];
//     if (isCorrectCharc(char) && isCorrectCharc(next)) {
//       count++;
//       let twoChar = char + next;
//       occurence.push(twoChar);
//     }
//   }
//   return count;
// }

// function isCorrectCharc(char) {
//   switch (char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       return true;
//     default:
//       return false;
//   }
// }

// findOccurence(); 

// document.write('String: ' + str + '<br>');
// document.write('Count: ' + count + '<br>');
// document.write('Occurrence: ' + occurence.join(', '));


// // 8. The distance between two cities (in km.) is input through the
// // keyboard. Write four functions to convert and print this
// // distance in meters, feet, inches and centimeters.

// // Meters 
// function toMeters(km) {
//   return km * 1000;
// }

// // Feet 
// function toFeet(km) {
//   return km * 3280.84;
// }

// // Inches 
// function toInches(km) {
//   return km * 39370.1;
// }

// // Centimeters 
// function toCentimeters(km) {
//   return km * 100000;
// }


// function mainFunction() {
//   let distance = +prompt("Enter distance between two cities in kilometers:");

//   document.write("Distance in kilometers: " + distance + " km<br>");
//   document.write("Distance in meters: " + toMeters(distance) + " m<br>");
//   document.write("Distance in feet: " + toFeet(distance) + " ft<br>");
//   document.write("Distance in inches: " + toInches(distance) + " in<br>");
//   document.write("Distance in centimeters: " + toCentimeters(distance) + " cm<br>");
// }

// mainFunction();


// // 9. Write a program to calculate overtime pay of employees.
// // Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// // worked above 40 hours. Assume that employees do not work
// // for fractional part of an hour.

// function calculateOvertime(hoursWorked) {
//   const regularHours = 40;
//   const overtimeRate = 12; // Rs per hour

//   if (hoursWorked > regularHours) {
//     let extraHours = hoursWorked - regularHours;
//     return extraHours * overtimeRate;
//   } else {
//     return 0; 
//   }
// }


// function mainFunction() {
//   let hours = +prompt("Enter total hours worked by employee:");
//   let overtimePay = calculateOvertime(hours);

//   document.write("Total hours worked: " + hours + "<br>");
//   document.write("Overtime pay: Rs. " + overtimePay);
// }

// mainFunction();


// // 10. A cashier has currency notes of denominations 10, 50 and
// // 100. If the amount to be withdrawn is input through the
// // keyboard in hundreds, find the total number of currency notes
// // of each denomination the cashier will have to give to the
// // withdrawer.

// let amount = +prompt("Enter amount to Withdraw")
// let hundred = parseInt(amount / 100)
// let fifty = parseInt((amount % 100) / 50)
// let ten = parseInt((((amount % 100) % 50) / 10))

// document.write("Entered amount: " + amount + "<br>");
// document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes.")
