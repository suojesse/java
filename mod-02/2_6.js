function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function main() {
    const resultsList = document.getElementById("roll-results");
    let rollResult;

    do {
        rollResult = rollDice();
        const listItem = document.createElement("li");
        listItem.textContent = `You rolled: ${rollResult}`;
        resultsList.appendChild(listItem);

    } while (rollResult !== 6);
}

main();