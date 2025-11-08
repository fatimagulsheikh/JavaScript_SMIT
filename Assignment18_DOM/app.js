// Question 1
// Task i:
let mainContent = document.getElementById("main-content");

// Task ii:
console.log(mainContent.children); 

// Task iii:
let renders = document.getElementsByClassName("render");
for(let i=0; i<renders.length; i++){
    document.write(renders[i].innerHTML + "<br>");
}

// Task iv:
document.getElementById("first-name").value = "Fatima";

// Task v:
document.getElementById("last-name").value = "Sheikh";
document.getElementById("email").value = "gull33416@gmail.com";

// Question 2
// Task i:
let formContent = document.getElementById("form-content");
console.log(formContent.nodeType);

// Task ii:
let lastName = document.getElementById("lastName");
console.log(lastName.nodeType); // 1 (Element)
console.log(lastName.firstChild.nodeType); // 3 (Text Node)

// Task iii:
lastName.firstChild.nodeValue = "Last Name: Khan";

// Task iv:
console.log(mainContent.firstElementChild); // <p> First Name : Fatima</p>
console.log(mainContent.lastElementChild);  // <p> contact : +92 300 111089811</p>

// Task v:
console.log(lastName.nextElementSibling); // next p
console.log(lastName.previousElementSibling); // previous p

// Task vi:
let emailInput = document.getElementById("email");
console.log(emailInput.parentNode); // div#form-content
console.log(emailInput.parentNode.nodeType); // 1

