'use strict';

const year = prompt("Enter the year here:");

let isLeapYear = false;

if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
        isLeapYear = true;
    }
}

document.querySelector('#target').innerHTML = `
    <p>${year} is ${isLeapYear ? "a leap year" : "not a leap year"}.</p>
`;