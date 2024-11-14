'use strict';
const numbers = [];

while (true) {
    let num = parseInt(prompt("Enter a number (enter 0 to stop):"));

    if (num === 0) break;

    numbers.push(num);
}

numbers.sort((a, b) => b - a);

console.log("Numbers from largest to smallest:");
numbers.forEach(num => console.log(num));