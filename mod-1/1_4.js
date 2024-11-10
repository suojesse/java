'use strict';
  let studentName = prompt("Enter the student's name:");

  let houseNumber = Math.floor(Math.random() * 4) + 1;
  let houseName;

  switch (houseNumber) {
    case 1:
      houseName = "Gryffindor";
      break;
    case 2:
      houseName = "Slytherin";
      break;
    case 3:
      houseName = "Hufflepuff";
      break;
    case 4:
      houseName = "Ravenclaw";
      break;
  }
  document.querySelector('#target').innerHTML = `
    <p>${studentName}, you are ${houseName}!</p>
  `;