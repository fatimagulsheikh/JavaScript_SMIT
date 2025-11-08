// // 1. Create a signup form and display form data in your web
// // page on submission.

// let form = document.getElementById("signupForm");
// let display = document.getElementById("displayData");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); //reload roke

//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

//   display.innerHTML = `
//       <h3>Form Data Submitted:</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Password:</strong> ${password}</p>
//     `;

//   form.reset();
// });

// // Q2
// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// let readMoreBtn = document.getElementById("readMoreBtn");
//   let shortText = document.getElementById("shortText");
//   let fullText = document.getElementById("fullText");

//   readMoreBtn.addEventListener("click", function() {
//     shortText.style.display = "none"; // summary hide
//     fullText.style.display = "block"; // full text show
//     readMoreBtn.style.display = "none"; // button hide
//   });

// Q3
// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

let studentForm = document.getElementById("studentForm");
let tableBody = document.querySelector("#studentTable tbody");
let editForm = document.getElementById("editForm");

let editRow = null; // editing row

// Add Student
studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let studentClass = document.getElementById("class").value;

  let row = document.createElement("tr");

  row.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${studentClass}</td>
      <td>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      </td>
    `;

  tableBody.appendChild(row);

  // Clear form
  studentForm.reset();

  // Add Delete & Edit event to buttons
  row.querySelector(".deleteBtn").addEventListener("click", function () {
    row.remove();
  });

  row.querySelector(".editBtn").addEventListener("click", function () {
    editForm.style.display = "block";
    editRow = row;

    // Fill edit form with current row values
    document.getElementById("editName").value = row.cells[0].innerText;
    document.getElementById("editAge").value = row.cells[1].innerText;
    document.getElementById("editClass").value = row.cells[2].innerText;
  });
});

document.getElementById("updateBtn").addEventListener("click", function () {
  if (editRow) {
    editRow.cells[0].innerText = document.getElementById("editName").value;
    editRow.cells[1].innerText = document.getElementById("editAge").value;
    editRow.cells[2].innerText = document.getElementById("editClass").value;

    editForm.style.display = "none"; // hide edit form
    editRow = null;
  }
});
