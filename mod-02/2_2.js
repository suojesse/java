'use strict';

const numParticipants = parseInt(prompt("Enter the number of participants:"));
const participants = [];

for (let i = 0; i < numParticipants; i++) {
    let name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
}

participants.sort();

const participantList = document.getElementById("participantList");
participants.forEach(name => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    participantList.appendChild(listItem);
});