'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
    let num = prompt('Type a number.');
    numbers.push(parseInt(num));
}

console.log("Numbers in reverse order:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}