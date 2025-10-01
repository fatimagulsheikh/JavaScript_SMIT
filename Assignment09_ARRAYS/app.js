// // 1. Declare an empty array using JS literal notation to store
// // student names in future.

// const studentName = [];


// // 2. Declare an empty array using JS object notation to store
// // student names in future.

// const student = new Array();

// // 3. Declare and initialize a strings array.

// const studentName = ["Fatime", "Hunnena", "Kashfa", "Sadia"];
// console.log(studentName);


// // 4. Declare and initialize a numbers array.

// const numbers = [1,2,3,4,5,6,7];
// console.log(numbers);


// // 5. Declare and initialize a boolean array.

// const bool = [true, false, false, true];
// console.log(bool);


// // 6. Declare and initialize a mixed array.

// const arr = ["Fatima", "sheikh", 7, 9, true, false, null, undefined];
// console.log(arr);


// // 7. Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser like:

// const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];

// let count = 0;
// let i = 0;

// document.write("<h1>Qualification" + "<br/></h1>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualific8. Write a program to store 3 student names in an array.Take
// document.write(++count + ") " + qualifications[i++] + "<br/>" + "<br/>" + "<br/>");



// // 8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:ations[i++] + "<br/>");

// const studentName = ["Fatima", "Hunnena", "Kashfa"];
// const score = [450, 400, 350];
// let total = 500;

// let percentage1 = (score[0]/total)*100;
// let percentage2 = (score[1]/total)*100;
// let percentage3 = (score[2]/total)*100;

// document.write(`Score of ${studentName[0]} is ${score[0]}. Percentage: ${percentage1}% <br>`);
// document.write(`Score of ${studentName[1]} is ${score[1]}. Percentage: ${percentage2}% <br>`);
// document.write(`Score of ${studentName[2]} is ${score[2]}. Percentage: ${percentage3}% <br>`);


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then

// Arrays | JAVASCRIPT

// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// let colors = ["Red", "Green", "Blue"];
// document.write(`<b>Initial Colors:</b> ${colors.join(", ")} <br>`);

// // (a) Ask user color to add at beginning
// let addStart = prompt("Which color do you want to add at the beginning?");
// colors.unshift(addStart);
// document.write(`<b>After adding at beginning:</b> ${colors.join(", ")} <br>`);

// // (b) Ask user color to add at end
// let addEnd = prompt("Which color do you want to add at the end?");
// colors.push(addEnd);
// document.write(`<b>After adding at end:</b> ${colors.join(", ")} <br>`);

// // (c) Add two more colors at beginning
// colors.unshift("Orange", "Purple");
// document.write(`<b>After adding two more colors at beginning:</b> ${colors.join(", ")} <br>`);

// // (d) Delete the first color
// colors.shift();
// document.write(`<b>After deleting first color:</b> ${colors.join(", ")} <br>`);

// // (e) Delete the last color
// colors.pop();
// document.write(`<b>After deleting last color:</b> ${colors.join(", ")} <br>`);

// // (f) Ask user index and color to add at that index
// let indexToAdd = +prompt("At which index do you want to add a color?");
// let colorToAdd = prompt("Which color do you want to add?");
// colors.splice(indexToAdd, 0, colorToAdd); // 0 means delete none, just add
// document.write(`<b>After adding color at index ${indexToAdd}:</b> ${colors.join(", ")} <br>`);

// // (g) Ask user index and how many colors to delete
// let indexToDelete = +prompt("At which index do you want to delete color(s)?");
// let countToDelete = +prompt("How many colors do you want to delete?");
// colors.splice(indexToDelete, countToDelete);
// document.write(`<b>After deleting ${countToDelete} color(s) from index ${indexToDelete}:</b> ${colors.join(", ")} <br>`);


// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.

// const score=[122,102,110,140];

// document.write('Scores of Students : '+score+'<br>');   
// document.write('Ordered Scores of Students : '+score.sort()+'<br>');


// // 11. Write a program to initialize an array with city names.
// // Copy 3 array elements from cities array to selectedCities
// // array.

// const cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// document.write('Cities List: ' + cityName + '<br>' + '<br>')
// let selectedCities = cityName.slice(2,5);
// document.write('Selectcities List:' + selectedCities + '<br>')


// // 12. Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method

// const array=['This','is','my','cat'];

// document.write('Array : '+'<br>'+array+'<br>');
// const string=array.join(' ');
// document.write('String : '+'<br>'+string);


// // 13. Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)

// const devices = ['keyboard', 'mouse', 'printer', 'monitor'];
// let out;
// document.write('Devices :' +devices+ '<br>');
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')

// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

let phoneMenu = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
let index = 0;

document.write('<select>')
document.write('<option>' + phoneMenu[index++] + '<option>')
document.write('<option>' + phoneMenu[index++] + '<option>')
document.write('<option>' + phoneMenu[index++] + '<option>')
document.write('<option>' + phoneMenu[index++] + '<option>')
document.write('<option>' + phoneMenu[index++] + '<option>')
document.write('<option>' + phoneMenu[index++] + '<option>')
document.write('<select>')