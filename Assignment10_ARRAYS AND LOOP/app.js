// // 1. Declare and initialize an empty multidimensional array.
// // (Array of arrays)

// let multiArray = [];

// multiArray.push([1,2,3]);
// multiArray.push(["A","B","C"]);
// console.log(multiArray);


// // 2. Declare and initialize a multidimensional array
// // representing the following matrix:

// const arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ]

// for(let i=0; i<3; i++){
//     for(let f=0; f<4; f++){
//         document.write(arr[i][f]+' ')
//     }
//     document.write('<br>')
// }


// // 3. Write a program to print numeric counting from 1 to 10.

// for(let i=1; i<=10; i++){
//     document.write(i + '<br>')
// }


// // 4. Write a program to print multiplication table of any
// // number using for loop. Table number & length should be
// // taken as an input from user.

// let tableNo = prompt("Enter a number to show its multiplication table")
// let tableLenght = prompt("Enter lenght multiplication table")

// document.write('Multiplication table of' +tableNo+'<br>'+'Length' + tableLenght+'<br>'+'<br>')

// for (i=1; i<=tableLenght; i++){
//     document.write(tableNo+ ' ' +'X'+ ' ' +i+' = '+tableNo*i+'<br>')
// }


// // 5. Write a program to print items of the following array
// // using for loop:
// // fruits = [“apple”, “banana”, “mango”, “orange”,
// // “strawberry”]

// const fruits=['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for(let i=0;i<fruits.length;i++){
//     document.write(fruits[i]+'<br>')
// }
// document.write('<br>')
// for(let j=0;j<fruits.length;j++){
//     document.write('Element at index '+j + ' is '+fruits[j]+'<br>');}


// // 6. Generate the following series in your browser. See
// // example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write('<h3>'+'Counting'+'</h3>')
// for(let i=1;i<=15;i++){
// document.write(i+','+' ')};

// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write('<h3>'+'Reverse Counting'+'</h3>');
// for(let i=10;i>=1;i--){
// document.write(i+','+' ')
// }

// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write('<h3>'+'Even'+'</h3>')
// for(var i=0;i<=20;i++){
// document.write(i++ +','+' ')};

// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write('<h3>'+'Odd'+'</h3>')
// for(var i=1;i<=19;i=i+2){
// document.write(i+','+' ')};


// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write('<h3>'+'Series'+'</h3>')
// for(var i=2;i<=20;i=i+2){
// document.write(i+'k'+','+' ')
// }


// // 7. You have an array
// // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an
// // array.

// const Fatima = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userInput = prompt('Enter the item name');
// userInput = userInput.toLowerCase();
// var check = false;

// for (var i = 0; i < Fatima.length; i++) {
//     if (userInput === Fatima[i]) {
//         document.write(Fatima[i] + ' is available at index ' + i + ' in our bakery')
//         check = true;

//     }
// }

// if (check === false) {
//         document.write('We are sorry .' + userInput + ' is not available in our bakery')

// }


// // 8. Write a program to identify the largest number in the
// // given array.
// // A = [24, 53, 78, 91, 12].

// let A = [24, 53, 78, 91, 12];

// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// document.write('<h3> Array items : </h3> '+A+'<br>');
// document.write('<h3> The largest number is : </h3> '+largest)


// // 9. Write a program to identify the smallest number in the
// // given array.
// // A = [24, 53, 78, 91, 12]

// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for(let i=1; i<A.length; i++){
//     if(A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// document.write('<h3> Arry items: </h3>' + A)
// document.write('<h3> The Smallest umber is: </h3>' + smallest)


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

document.write("<h4>");
for (let i = 5; i <= 100; i += 5) {
  document.write(i);
  if (i < 100) {
    document.write(", ");
  }
}
document.write("</h4>");