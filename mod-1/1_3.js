'use strict';
    let num1 = prompt('Type a number.');
    let num2 = prompt('Type a number.');
    let num3 = prompt('Type a number.');

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    let sum = num1 + num2 + num3;
    let product = num1 * num2 * num3;
    let average = sum / 3;


  document.querySelector('#target').innerHTML =`
    <p>Sum: ${sum}</p>
    <p>Product: ${product}</p>
    <p>Average: ${average}</p>
  `;