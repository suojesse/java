'use strict'
const names = ["John", "Paul", "Jones"];

const targetElement = document.getElementById("target");

let listHTML = "<ul>";

for (let i = 0; i < names.length; i++) {
    listHTML += <li>${names[i]}</li>;
}

listHTML += "</ul>";

targetElement.innerHTML = listHTML;
