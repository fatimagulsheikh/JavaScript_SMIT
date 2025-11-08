// // 1. Show an alert box on click on a link.

// function greet(){
//     alert("Hello World")
// }

// greet();

// // 2. Display some Mobile images in browser. On click on an
// // image Show the message in alert to user.

let images = document.querySelectorAll(".mobile");

images.forEach(function (img) {
  img.addEventListener("click", function () {
    alert("You clicked on " + img.alt);
  });
});

// // 3. Display 10 student records in table and each row should contain a delete
// // button. If you click on a button to delete a record, entire row should be
// // deleted.

let students = [
  { id: 1, name: "Tayyaba", age: 18 },
  { id: 2, name: "Fatima", age: 19 },
  { id: 3, name: "Hunnena", age: 20 },
  { id: 4, name: "Sara", age: 18 },
  { id: 5, name: "Hassan", age: 21 },
  { id: 6, name: "Ayesha", age: 20 },
  { id: 7, name: "Omar", age: 19 },
  { id: 8, name: "Zara", age: 18 },
  { id: 9, name: "Bilal", age: 22 },
  { id: 10, name: "Kashifa", age: 21 },
];

let tbody = document.querySelector("#studentTable tbody");

students.forEach(function (student) {
  let row = document.createElement("tr");

  row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td><button class="deleteBtn">Delete</button></td>
    `;

  tbody.appendChild(row);
});

let deleteButtons = document.querySelectorAll(".deleteBtn");
deleteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let row = button.parentElement.parentElement;
    row.remove(); // row delete
  });
});

// // 4. Display an image in browser. Change the picture on mouseover and set the
// // first picture on mouseout.

let image = document.getElementById("myImage");

  // Mouse over event
  image.addEventListener("mouseover", function() {
    image.src = "./New folder/images2.jpg";
  });

  // Mouse out event
  image.addEventListener("mouseout", function() {
    image.src = "./New folder/imagee.png";
  });

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

let counter = 0; // counter value

let counterDisplay = document.getElementById("counterValue");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");

// Increase
increaseBtn.addEventListener("click", function () {
  counter++;
  counterDisplay.innerText = counter;
});

// Decrease
decreaseBtn.addEventListener("click", function () {
  counter--;
  counterDisplay.innerText = counter;
});
