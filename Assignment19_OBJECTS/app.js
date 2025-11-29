// // 1. Suppose You have an array of object
// // var itemsArray = [
// // {name:”juice”,price:”50”, quantity:”3”},
// // {name:”cookie”,price:”30”, quantity:”9”},
// // {name:”shirt”,price:”880”, quantity:”1”},
// // {name:”pen”,price:”100”, quantity:”2”}];
// // Calculate total price of each item and all items;

// const itemsArray = [
//     { name: "juice", price: 50, quantity: 3 },
//     { name: "cookie", price: 30, quantity: 9 },
//     { name: "shirt", price: 880, quantity: 1 },
//     { name: "pen", price: 100, quantity: 2 }
// ];

// let grandTotal = 0;


// itemsArray.forEach(function(item) {
//     let total = item.price * item.quantity;  
//     console.log(item.name + " total =", total);
//     grandTotal += total;  
// });

// console.log("Grand Total of all items =", grandTotal);


// // 2. Create an object with properties name, email, password, age,
// // gender, city, country.
// // Check if age and country properties exist in object or not.
// // Also check firstName and lastName properties in object.

// let person = {
//     name: "Fatima",
//     email: "gull33416@gmail.com",
//     password: "12345",
//     age: 24,
//     gender: "Female",
//     city: "Karachi",
//     country: "Pakistan"
// };

// console.log("age" in person);       
// console.log("country" in person);   

// console.log("firstName" in person); 
// console.log("lastName" in person);  


// // 3. Create a constructor function with some properties. Now
// // create multiple records using the constructor.

// function Student(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// let student1 = new Student("Fatima", 24, "Karachi");
// let student2 = new Student("Ayesha", 22, "Lahore");
// let student3 = new Student("Uswa", 14, "Islamabad");

// console.log(student1);
// console.log(student2);
// console.log(student3);


// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:
//  use select box for education and profession,
//  use radio box for gender
// Bonus : use can use localStorage to save records.

function Citizen(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function saveRecord() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;

    // gender
    let gender = document.querySelector("input[name='gender']:checked").value;

    // education & profession
    let education = document.getElementById("education").value;
    let profession = document.getElementById("profession").value;

    // create object from constructor
    let person = new Citizen(name, gender, address, education, profession);

    // save in localStorage
    let data = JSON.parse(localStorage.getItem("citizens")) || [];
    data.push(person);
    localStorage.setItem("citizens", JSON.stringify(data));

    showData();
}

function showData() {
    let data = JSON.parse(localStorage.getItem("citizens")) || [];
    let output = document.getElementById("output");

    output.innerHTML = ""; 

    data.forEach((p, index) => {
        output.innerHTML += `
            <p>
                <strong>${index + 1}) ${p.name}</strong><br>
                Gender: ${p.gender}<br>
                Address: ${p.address}<br>
                Education: ${p.education}<br>
                Profession: ${p.profession}<br>
                -------------------------
            </p>
        `;
    });
}

showData();
